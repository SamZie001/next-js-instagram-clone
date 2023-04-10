import layoutStyles from "../styles/Layout.module.css";
// import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.layout}>
      <Sidebar />
      {/* {React.Children.map(children, (child) => {
        return React.cloneElement(child, { className: layoutStyles.child });
      })} */}

      <div className={layoutStyles.child}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

