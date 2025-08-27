import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import PlansePage from './components/Planse/PlansePage';
import ContactPage from './components/ContactPage/ContactPage';
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/despre-noi",
        element: <AboutUsPage />,
      },
      {
        path: "/planse",
        element: <PlansePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      }
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

