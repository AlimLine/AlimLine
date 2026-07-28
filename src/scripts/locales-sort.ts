import fs from 'fs';
import path from 'path';

const BASE_LANG = 'ru';

const languages = ['ru', 'kk', 'en', 'zh'];

const localePaths = ['./apps/internet-banking/public/locales', './packages/locales'];

function processLocaleObject(base: Record<string, any>, target: Record<string, any>): Record<string, any> {
  if (typeof base !== 'object' || base === null || Array.isArray(base)) {
    return target || base;
  }

  const result: Record<string, any> = {};
  const allKeys = [...new Set([...Object.keys(base), ...Object.keys(target || {})])].sort();

  for (const key of allKeys) {
    const baseValue = base[key];
    const targetValue = target?.[key];

    if (typeof baseValue === 'object' && baseValue !== null) {
      result[key] = processLocaleObject(baseValue, typeof targetValue === 'object' ? targetValue : {});
    } else {
      result[key] = targetValue !== undefined ? targetValue : baseValue;
    }
  }

  return result;
}

const startLocalesSort = (localDirPathString) => {
  const dirPath = path.resolve(localDirPathString);
  const langDir = path.join(dirPath, BASE_LANG);

  let baseJsonMap: Record<string, any> = {};

  fs.readdirSync(langDir).forEach((file) => {
    if (file.endsWith('.json')) {
      const filePath = path.join(langDir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      baseJsonMap[file] = JSON.parse(raw);
    }
  });

  languages.forEach((lang) => {
    const langDir = path.join(dirPath, lang);

    if (!fs.existsSync(langDir)) {
      console.warn(`cannot find folder ${lang}, will create...`);
      fs.mkdirSync(langDir, { recursive: true });
    }

    // Проверяем каждый файл базового языка
    Object.keys(baseJsonMap).forEach((file) => {
      const filePath = path.join(langDir, file);
      const baseJson = baseJsonMap[file];

      let targetJson: Record<string, any> = {};

      if (fs.existsSync(filePath)) {
        try {
          const raw = fs.readFileSync(filePath, 'utf-8');
          targetJson = JSON.parse(raw);
        } catch (err) {
          console.error(`reading error ${filePath}:`, err);
        }
      } else if (lang !== BASE_LANG) {
        console.log(`file ${lang}/${file} not found. will create new...`);
      }

      const processed = processLocaleObject(baseJson, targetJson);

      fs.writeFileSync(filePath, JSON.stringify(processed, null, 2) + '\n', 'utf-8');
      console.log(`${lang}/${file} updated.`);
    });
  });
};

localePaths.forEach((path) => {
  startLocalesSort(path);
});
