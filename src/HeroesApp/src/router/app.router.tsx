import { createBrowserRouter } from "react-router";
import { HomePage } from "../heroes/pages/home/HomePage";
import { SearchPage } from "../heroes/pages/search/SearchPage";
import { HeroPage } from "../heroes/pages/hero/HeroPage";
import { AdminPage } from "../admin/pages/AdminPage";
import { HeroesLayout } from "../heroes/layouts/HeroesLayout";
import { AdminLayout } from "../admin/layout/AdminLayout";


export const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <HeroesLayout />,
      children: [
         {
            index: true,
            element: <HomePage />
         },
         {
            path: '/search',
            element: <SearchPage />
         },
         {
            path: '/heroes/1',
            element: <HeroPage />
         },
         {
            path: '/*',
            element: <HomePage />
         },
      ]
   },
   {
      path: '/admin',
      element: <AdminLayout />,
      children: [
         {
            index: true,
            element: <AdminPage />,
         }
      ]
   }
])