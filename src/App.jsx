import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
// import Body from "./components/Body";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;
