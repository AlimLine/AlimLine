import { useTranslation } from 'react-i18next';
import styles from '@/views/NavigatePage/navigate-page.module.scss';
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper.tsx";
import {useState} from "react";
import CTabs from "@/components/ui/Tabs/Tabs.tsx";
import {Tab} from "@mui/material";
import {clsx} from "clsx";
import Card from "@/views/NavigatePage/_components/Cards/Card.tsx";

export type TabType = 'All' | 'Hard' | 'Medium' | 'Easy';

const NavigatePage = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<TabType>('All');

  return (
    <div className={styles.navigate_page}>
      <PageWrapper className={styles.paper_wrapper}>
        <div className={styles.title}>{t('title')}</div>

        <CTabs value={tab} onChange={(_, value) => setTab(value)} className={clsx(styles.tabs, styles[tab])}>
          <Tab value='All' label='All' />
          <Tab value='Easy' label='Easy' />
          <Tab value='Medium' label='Medium' />
          <Tab value='Hard' label='Hard' />
        </CTabs>

        <div className={clsx(styles.cards, styles[tab])}>
          <Card
            title='Space X'
            difficult='Medium'
            href='/space-x'
          />
        </div>
      </PageWrapper>
    </div>
  );
};

export default NavigatePage;