import layoutStyles from "../styles/Layout.module.css";
// import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.layout}>
      <Sidebar />
      <div className={layoutStyles.child}>{children}</div>
    </div>
  );
};

export default Layout;
