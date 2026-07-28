import {createBrowserRouter} from "react-router";
import NavigatePage from '@/views/NavigatePage/NavigatePage.tsx'
import SpaceX from "@/views/SpaceX/SpaceX.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigatePage />
  },
  {
    path: '/space-x',
    element: <SpaceX />
  }
])

export default router