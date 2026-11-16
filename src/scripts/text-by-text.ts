import fs from 'fs';
import path from 'path';

// ИНСТРУКЦИЯ!!
/*
Если коротко,
наш код ищет в папке swapLang ру текст и меняет его на swapListText, при этом если в тексте есть лишний пробел наш код его не поменяет и выведет в консоль

в ruListText нужно положить текст из excel ру текст в swapListText нужно чтобы ложили те слова на которые нужно заменить

как нужно ложить текст:

`Импорт файла
Выбрать файлы
Загрузить`

при этом не правильно будет ложить вот так:
`
Импорт файла
Выбрать файлы
Загрузить
`

+ мы должны показать на какой язык мы меняем через переменную swapLang, он покажет в какой папке делать изменения
*/
const swapLang = 'kk';

// const dirPath = path.join(process.cwd(), '/packages/locales/' + swapLang);
const dirPath = path.join(process.cwd(), '/apps/internet-banking/public/locales/' + swapLang);

/* eslint-disable no-restricted-syntax */
const ruListText = `фыва`;

const swapListText = `фва`;
/* eslint-enable no-restricted-syntax */

const ruList = ruListText.split('\n');

const swapList = swapListText.split('\n');

// будем отслеживать, какие строки встретились
const foundSet = new Set<string>();

function replaceValues(obj: any): any {
  if (typeof obj === 'string') {
    const index = ruList.indexOf(obj);

    if (index !== -1) {
      foundSet.add(obj); // отмечаем, что нашли
      return swapList[index];
    }

    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(replaceValues);
  }

  if (typeof obj === 'object' && obj !== null) {
    const newObj: any = {};
    for (const key in obj) {
      newObj[key] = replaceValues(obj[key]);
    }
    return newObj;
  }

  return obj;
}

function processFiles() {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);

    if (fs.statSync(filePath).isFile() && file.endsWith('.json')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const json = JSON.parse(content);

      const updatedJson = replaceValues(json);

      fs.writeFileSync(filePath, JSON.stringify(updatedJson, null, 2) + '\n', 'utf-8');

      // eslint-disable-next-line no-restricted-syntax
      console.log(`Обработан файл: ${file}`);
    }
  });

  // после обработки — ищем те, что НЕ встретились
  const notFound = ruList.filter((item) => !foundSet.has(item));

  if (notFound.length > 0) {
    // eslint-disable-next-line no-restricted-syntax
    console.log('\n❗ Не найдены строки:');
    notFound.forEach((str) => console.log(`${str}`));
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log('\n Все строки были найдены!');
  }
}

processFiles();
