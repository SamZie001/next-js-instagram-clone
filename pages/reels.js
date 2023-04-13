import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import Meta from "@/components/Meta";
import { useEffect, useState } from "react";
import { reelsData } from "@/lib/staticdata";
import styles from "../styles/Reels.module.css";
import ReelVideo from "@/components/ReelVideo";

const reels = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => setLoader(false), 1000);
  useEffect(() => {
    console.log(reelsData);
  }, []);

  return (
    <Layout>
      <Meta />
      {loader && <Loader />}
      <main className={styles.container}>
        <div className={styles["video-container"]}>
          {reelsData.map((reel, index) => (
            <ReelVideo
              key={index}
              name={reel.name}
              videoSrc={reel.src}
              profilePic={reel.image}
              likes={reel.likes}
              comments={reel.comments}
              description={reel.description}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default reels;
