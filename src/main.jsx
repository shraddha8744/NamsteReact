import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import { store } from "../src/store/store.js";
import RestaurantList from "./components/RestaurantList.jsx";
import RestaurentMenuCard from "./components/RestaurentMenuCard.jsx";
import Menu2 from "./components/Menu2.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/res",
        element: <RestaurantList />,
      },
      {
        path: "/menu",
        element: <RestaurentMenuCard />,
      },
      {
        path: "/menu2",
        element: <Menu2 />,
      },
    ],

    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    ,
  </React.StrictMode>
);
