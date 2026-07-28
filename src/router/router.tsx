import {createBrowserRouter} from "react-router";
import NavigatePage from '@/views/NavigatePage/NavigatePage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigatePage />
  }
])

export default router