import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import Login from "./pages/Login.tsx";
import Home from './pages/Home.tsx';
import Order from './pages/Order.tsx';
import AllProducts from './pages/AllProducts.tsx';

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: (
      // <ProtectedRoute>
        <App />
      /*{ </ProtectedRoute> }*/
    ),
    errorElement: <NotFoundPage />,
    children:[

      { path: "/", element: < Home/> },
      { path: "/orders", element: < Order/> },
      { path: "/all-products", element: < AllProducts/> },

    ]
  },
  { path: "/login", element: < Login/> }
 
]
)
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
