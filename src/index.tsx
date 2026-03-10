import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import PlansePage from './components/Planse/PlansePage';
import ContactPage from './components/ContactPage/ContactPage';
import ConsultancyPage from './components/Consultancy/ConsultancyPage';
import "./i18n";
import FAQ from './components/FAQWidget/FAQ';

const FULL_FAQ_ORDER = [
  1, 2, 20, 3, 4, 21, 5, 6, 7, 22, 8, 9, 10, 23, 11, 12, 13, 24, 14, 15, 16, 17, 18, 19
];

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
      },
      {
        path: "/faq",
        element: <FAQ questionIndexes={FULL_FAQ_ORDER} />
      },
      {
        path: "/consultanta",
        element: <ConsultancyPage/>
      }
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
