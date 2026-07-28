import { useTranslation } from 'react-i18next';
import styles from '@/views/NavigatePage/navigate-page.module.scss';
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper.tsx";
import {useState} from "react";
import CTabs from "@/components/ui/Tabs/Tabs.tsx";

const NavigatePage = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState('');
  
  return (
    <div className={styles.navigate_page}>
      <PageWrapper>
        <div className={styles.title}>{t('title')}</div>

        <CTabs value={tab} onChange={(_, value) => setTab(value)}>

        </CTabs>
      </PageWrapper>
    </div>
  );
};

export default NavigatePage;