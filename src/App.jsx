import { createBrowserRouter } from 'react-router-dom';
import './App.css'
import { children } from 'react';
import GifPage from './pages/single-gif';
import Category from './pages/category';
import Search from './pages/search';
import Favorites from './pages/favorites';
import { RouterProvider } from 'react-router-dom';
import AppLayouts from './layouts/app-layouts';
import Home from './pages/home';
import GifProvider from './context/gif-context';

// homepage
// categories
// search page
// single gif
// favourite


const router = createBrowserRouter([
  {
    element:<AppLayouts />,
    

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:category',
        element: <Category />,
      },
      {
        path: '/search/:query',
        element: <Search />,
      },
      {
        path: '/:type/:slug',
        element: <GifPage />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ]
  }
]);

function App() {

  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );

};

export default App;
