import styles from '@/App.module.scss'
import {RouterProvider} from "react-router";
import router from "@/router/router.tsx";

import {initI18n} from "@/helpers/i18n.ts";
import StarFall from "@/components/wrappers/StarFall/StarFall.tsx";
initI18n({initialLocale: localStorage.getItem('locale') || 'ru'})

function App() {
  return <div className={styles.main}>
    <StarFall />

    <RouterProvider router={router} />
  </div>
}

export default App
