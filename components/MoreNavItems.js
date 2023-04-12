import moreStyles from "../styles/NavComponents/MoreNavItems.module.css";

const MoreNavItems = () => {
  return (
    <div className={moreStyles.main}>
      <ul className={moreStyles.child}>
        <div className={moreStyles.list}>
          <li>
            <i className="fa-solid fa-gear"></i>
            <p>Settings</p>
          </li>
          <li>
            <i className="fa-solid fa-greater-than"></i>
          </li>
        </div>
        <div className={moreStyles.list}>
          <li>
            <i className="fa-regular fa-clock"></i>
            <p>Your activity</p>
          </li>
          <li>
            <i className="fa-solid fa-greater-than"></i>
          </li>
        </div>
        <div className={moreStyles.list}>
          <li>
            <i className="fa-regular fa-bookmark"></i>
            <p>Saved</p>
          </li>
          <li>
            <i className="fa-solid fa-greater-than"></i>
          </li>
        </div>
        <div className={moreStyles.list}>
          <li>
            <i className="fa-regular fa-moon"></i>
            <p>Switch appearance</p>
          </li>
          <li>
            <i className="fa-solid fa-greater-than"></i>
          </li>
        </div>
        <div className={moreStyles.list}>
          <li>
            <i className="fa-solid fa-circle-exclamation"></i>
            <p>Report a problem</p>
          </li>
          <li>
            <i className="fa-solid fa-greater-than"></i>
          </li>
        </div>
      </ul>
      <ul className={moreStyles.child}>
        <li className={moreStyles.list}>
          <p>Switch accounts</p>
          <i className="fa-solid fa-greater-than"></i>
        </li>
      </ul>
      <ul className={moreStyles.child}>
        <li className={moreStyles.list}>Logout</li>
      </ul>
    </div>
  );
};

export default MoreNavItems;
