import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import Meta from "@/components/Meta";
import { useState } from "react";
import { inboxData } from "@/lib/staticdata";
import styles from "../styles/Inbox.module.css";
import Image from "next/image";

const inbox = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => setLoader(false), 1000);

  return (
    <Layout>
      <Meta title="Inbox . Chats" />
      {loader && <Loader />}
      <main className={styles.inbox}>
        <div className={styles.container}>
          <div className={styles.messages}>
            <div className={styles.header}>
              <p>
                john_doe <i class="fa-solid fa-chevron-down"></i>
              </p>
              <i class="fa-regular fa-pen-to-square"></i>
            </div>
            <ul className={styles.overview}>
              {inboxData.map((msg) => (
                <li>
                  <Image
                    src={msg.image}
                    width={56}
                    height={56}
                    alt="user-photo"
                  />
                  {msg.info.includes("Active now") && (
                    <div className={styles["active-box"]}>
                      <div className={styles.active}></div>
                    </div>
                  )}
                  <div className={styles.info}>
                    <strong>{msg.name}</strong>
                    <p>
                      {msg.info}
                      {msg.timeline ? ` . ${msg.timeline}` : ""}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["your-messages"]}>
            <i class="fa-regular fa-paper-plane"></i>
            <h2>Your Messages</h2>
            <p>Send private photos and messages to a friend or group.</p>
            <button>Send Messages</button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default inbox;
