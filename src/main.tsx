//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import App from './App.tsx'
import Library from './pages/library/Library.tsx'
import Feed from './pages/feed/Feed.tsx'
import Player from './pages/player/Player.tsx'
import Trending from './pages/trending/Trending.tsx'
import Favourite from './pages/favourite/Favourite.tsx'

const router = createBrowserRouter([{
  element: <App />,
  path: '/',
  children: [
    {
      path: '/',
      element: <Library />
    },
    {
      path: '/feed',
      element: <Feed />
    },
    {
      path: '/player',
      element: <Player />
    },
    {
      path: '/trending',
      element: <Trending />
    },
    {
      path: '/favourite',
      element: <Favourite />
    }
]
}])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
