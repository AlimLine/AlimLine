import {createBrowserRouter} from "react-router";
import NavigatePage from '@/views/NavigatePage/NavigatePage.tsx'
import SpaceX from "@/views/SpaceX/SpaceX.tsx";
import Constructor from "@/views/Constructor/Constructor.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigatePage />
  },
  {
    path: '/space-x',
    element: <SpaceX />
  },
  {
    path: '/constructor',
    element: <Constructor />
  }
])

export default router