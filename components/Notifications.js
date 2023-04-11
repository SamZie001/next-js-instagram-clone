"use client";
import notificationStyles from "../styles/NavComponents/Notifications.module.css";
import { useState } from "react";
import Unviewed from "./Unviewed";
import { notificationData } from "@/lib/staticdata";

const Notifications = () => {
  const [yesterdayStats, setYesterdayStats] = useState(notificationData[0]);
  const [weekStats, setWeekStats] = useState(notificationData.slice(1, 3));
  const [monthStats, setMonthStats] = useState(notificationData.slice(3, 6));

  return (
    <div className={notificationStyles["notification-component"]}>
      <h2>Notifications</h2>
      <div className={notificationStyles.sorter}>
        <h3>Yesterday</h3>
        <div className={notificationStyles.details}>
          <Unviewed imageSource={yesterdayStats.image} compWidth={"54px"} />
          <p>
            {yesterdayStats.info}. <span>{yesterdayStats.timeline}</span>
          </p>
          <button>{yesterdayStats.following ? "Following" : "Follow"}</button>
        </div>
      </div>
      <div className={notificationStyles.sorter}>
        <h3>This Week</h3>
        {weekStats.map((item, index) => (
          <div className={notificationStyles.details} key={index}>
            <Unviewed imageSource={item.image} compWidth={"54px"} />
            <p>
              {item.info}. <span>{item.timeline}</span>
            </p>
            <button>{item.following ? "Following" : "Follow"}</button>
          </div>
        ))}
      </div>
      <div className={notificationStyles.sorter}>
        <h3>This Month</h3>
        {monthStats.map((item, index) => (
          <div className={notificationStyles.details} key={index}>
            <Unviewed imageSource={item.image} compWidth={"54px"} />
            <p>
              {item.info}. <span>{item.timeline}</span>
            </p>
            <button>{item.following ? "Following" : "Follow"}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
