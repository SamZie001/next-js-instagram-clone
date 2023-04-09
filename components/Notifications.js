import notificationStyles from "../styles/NavComponents/Notifications.module.css";
import { useState } from "react";
import Unviewed from "./Unviewed";

const Notifications = () => {
  const [notification, setNotification] = useState([
    {
      image: "/profile1.png",
      info: "Carlos, who you might know, is on Instagram",
      timeline: "1d",
      following: false,
    },
    {
      image: "/profile2.jpg",
      info: "Cristiano sent you a message",
      timeline: "3d",
      following: true,
    },
    {
      image: "/profile3.png",
      info: "TraversyMedia is on instagram",
      timeline: "1w",
      following: false,
    },
    {
      image: "/profile4.jpg",
      info: "Sashi posted a new reel",
      timeline: "1h",
      following: true,
    },
    {
      image: "/profile5.jpg",
      info: "nifemi_a, who you might know, is on Instagram",
      timeline: "1d",
      following: false,
    },
    {
      image: "/profile6.jpg",
      info: "HBO posted a new story",
      timeline: "2w",
      following: true,
    },
  ]);
  const section2 = notification.slice(1, 3);
  const section3 = notification.slice(3, 6);
  return (
    <div className={notificationStyles["notification-component"]}>
      <h2>Notifications</h2>
      <div className={notificationStyles.sorter}>
        <h3>Yesterday</h3>
        <div className={notificationStyles.details}>
          <Unviewed imageSource={notification[0].image} />
          <p>
            {notification[0].info}. <span>{notification[0].timeline}</span>
          </p>
          <button>{notification[0].following ? "Following" : "Follow"}</button>
        </div>
      </div>
      <div className={notificationStyles.sorter}>
        <h3>This Week</h3>
        {section2.map((item, index) => (
          <div className={notificationStyles.details} key={index}>
            <Unviewed imageSource={item.image} />
            <p>
              {item.info}. <span>{item.timeline}</span>
            </p>
            <button onClick={() => {}}>
              {item.following ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
      <div className={notificationStyles.sorter}>
        <h3>This Month</h3>
        {section3.map((item, index) => (
          <div className={notificationStyles.details} key={index}>
            <Unviewed imageSource={item.image} />
            <p>
              {item.info}. <span>{item.timeline}</span>
            </p>
            <button onClick={() => {}}>
              {item.following ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
