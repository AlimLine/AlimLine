import styles from '@/App.module.scss'
import {RouterProvider} from "react-router";
import router from "@/router/router.tsx";

import {initI18n} from "@/scripts/i18n.ts";
initI18n({initialLocale: localStorage.getItem('locale') || 'ru'})

function App() {
  return <div className={styles.main}>
    <RouterProvider router={router} />
  </div>
}

export default App
