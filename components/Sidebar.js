import sideStyles from "../styles/Sidebar.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Search from "./Search";
import Notifications from "./Notifications";
import Create from "./Create";

const Sidebar = () => {
  const sidebarDOM = useRef();
  const [showObjects, setShowObjects] = useState({
    showSearch: false,
    showCreate: false,
    showMore: false,
    showNotifications: false,
  });

  // This function will set only one object state to true and set the rest to false simultaneously
  const toggleShowObjects = (property) => {
    setShowObjects((prevState) => ({
      showSearch:
        property === "Search"
          ? !prevState.showSearch
          : prevState.showSearch && false,
      showCreate:
        property === "Create"
          ? !prevState.showCreate
          : prevState.showCreate && false,
      showMore:
        property === "More" ? !prevState.showMore : prevState.showMore && false,
      showNotifications:
        property === "Notifications"
          ? !prevState.showNotifications
          : prevState.showNotifications && false,
    }));
  };

  // Use effect to manage sideBar width change and icon-only display on component renders
  // To be updated soon
  useEffect(() => {
    if (
      showObjects.showSearch ||
      showObjects.showNotifications ||
      showObjects.showCreate
    ) {
      console.log("minimize: ", sidebarDOM.current.classList);
    }
    if (
      !showObjects.showSearch &&
      !showObjects.showNotifications &&
      !showObjects.showCreate
    ) {
      console.log("maximize: ", sidebarDOM.current.classList);
    }
  }, [showObjects]);

  return (
    <>
      <nav className={sideStyles.sidebar} id="sidebar">
        <ul className={sideStyles["nav-items"]} ref={sidebarDOM}>
          <h1>
            <Link href="/">Instagram</Link>
          </h1>
          <Link href="/">
            <li>
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </li>
          </Link>
          <li
            onClick={() => toggleShowObjects("Search")}
            // ref={(el) => (elementRefs.current[0] = el)}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
          </li>
          <Link href="/explore">
            <li>
              <i className="fa-regular fa-compass"></i>
              <span>Explore</span>
            </li>
          </Link>
          <Link href="/reels">
            <li>
              <i className="fa-solid fa-film"></i>
              <span>Reels</span>
            </li>
          </Link>
          <Link href="/inbox">
            <li>
              <i className="fa-sharp fa-solid fa-comment-dots"></i>
              <span>Messages</span>
            </li>
          </Link>
          <li
            onClick={() => toggleShowObjects("Notifications")}
            // ref={(el) => (elementRefs.current[1] = el)}
          >
            <i className="fa-regular fa-heart"></i>
            <span>Notifications</span>
          </li>
          <li
            onClick={() => toggleShowObjects("Create")}
            // ref={(el) => (elementRefs.current[2] = el)}
          >
            <i className="fa-regular fa-square-plus"></i>
            <span>Create</span>
          </li>
          <Link href="/profile">
            <li>
              <i className="fa-solid fa-circle-user"></i>
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={() => toggleShowObjects("More")}>
            <i className="fa-solid fa-bars"></i>
            <span>More</span>
          </li>
        </ul>
      </nav>
      {showObjects.showSearch && <Search />}
      {showObjects.showNotifications && <Notifications />}
      {showObjects.showCreate && <Create />}
      {/* {showObjects.showMore && <p>MshowMore</p>} */}
    </>
  );
};

export default Sidebar;
