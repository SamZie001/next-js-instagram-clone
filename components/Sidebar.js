import sideStyles from "../styles/Sidebar.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Search from "./Search";
import Notifications from "./Notifications";
import Create from "./Create";
import MoreNavItems from "./MoreNavItems";

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

  // This function will set all showObject states to false so the side bar can widen
  const handleClearShowObjects = () => {
    showObjects.showSearch = false;
    showObjects.showNotifications = false;
    showObjects.showCreate = false;
    showObjects.showMore = false;
  };

  // Function to close the create page modal from its component/ parent
  const handleClose = () => {
    setShowObjects((prev) => (prev.showCreate = false));
  };

  // Use effect to manage sideBar width change and icon-only display on component renders
  useEffect(() => {
    if (showObjects.showSearch || showObjects.showNotifications) {
      sidebarDOM.current.classList.add(sideStyles.minimize);
    }
    if (!showObjects.showSearch && !showObjects.showNotifications) {
      sidebarDOM.current.classList.remove(sideStyles.minimize);
    }
  }, [showObjects, handleClearShowObjects]);

  return (
    <>
      <nav className={sideStyles.sidebar} ref={sidebarDOM}>
        <ul className={sideStyles["nav-items"]}>
          <Link href="/" onClick={handleClearShowObjects}>
            <h1>
              <i className="fa-brands fa-instagram"></i>
              <span>Instagram</span>
            </h1>
          </Link>
          <Link href="/" onClick={handleClearShowObjects}>
            <li>
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </li>
          </Link>
          <li onClick={() => toggleShowObjects("Search")}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
          </li>
          <Link href="/explore" onClick={handleClearShowObjects}>
            <li>
              <i className="fa-regular fa-compass"></i>
              <span>Explore</span>
            </li>
          </Link>
          <Link href="/reels" onClick={handleClearShowObjects}>
            <li>
              <i className="fa-solid fa-film"></i>
              <span>Reels</span>
            </li>
          </Link>
          <Link href="/inbox" onClick={handleClearShowObjects}>
            <li>
              <i className="fa-sharp fa-solid fa-comment-dots"></i>
              <span>Messages</span>
            </li>
          </Link>
          <li onClick={() => toggleShowObjects("Notifications")}>
            <i className="fa-regular fa-heart"></i>
            <span>Notifications</span>
          </li>
          <li onClick={() => toggleShowObjects("Create")}>
            <i className="fa-regular fa-square-plus"></i>
            <span>Create</span>
          </li>
          <Link href="/profile" onClick={handleClearShowObjects}>
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
      {showObjects.showCreate && <Create handleClose={handleClose} />}
      {showObjects.showMore && <MoreNavItems />}
    </>
  );
};

export default Sidebar;
