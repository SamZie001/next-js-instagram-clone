"use client";
import Layout from "@/components/Layout";
import XplStyles from "../styles/Explore.module.css";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import { useState } from "react";
import { exploreData } from "@/lib/staticdata";
import { PostBrief } from "@/components/PostBrief";

const explore = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => setLoader(false), 1000);

  const batch1 = exploreData.slice(0, 4);
  const batch2 = exploreData.slice(6, 10);
  const batch3 = exploreData.slice(10, 14);

  return (
    <Layout>
      {loader && <Loader />}
      <main className={XplStyles.container}>
        {/* Batch 1 */}
        <div className={XplStyles.batch}>
          <div className={XplStyles.sub}>
            {batch1.map((item, index) => (
              <div className={XplStyles.box}>
                <PostBrief
                  key={index}
                  imageSrc={item.image}
                  likes={item.likes}
                  comments={item.comments}
                  bundle={item.bundle ? item.bundle : undefined}
                  video={item.video ? item.video : undefined}
                />
              </div>
            ))}
          </div>
          <div className={XplStyles.main}>
            <PostBrief
              imageSrc={exploreData[4].image}
              likes={exploreData[4].likes}
              comments={exploreData[4].comments}
              bundle={exploreData[4].bundle ? exploreData[4].bundle : undefined}
              video={exploreData[14].video ? exploreData[5].video : undefined}
            />
          </div>
        </div>

        {/* Batch 2 */}
        <div className={XplStyles.batch}>
          <div className={XplStyles.main}>
            <PostBrief
              imageSrc={exploreData[5].image}
              likes={exploreData[5].likes}
              comments={exploreData[5].comments}
              bundle={exploreData[5].bundle ? exploreData[5].bundle : undefined}
              video={exploreData[5].video ? exploreData[5].video : undefined}
            />
          </div>
          <div className={XplStyles.sub}>
            {batch2.map((item, index) => (
              <div className={XplStyles.box}>
                <PostBrief
                  key={index}
                  imageSrc={item.image}
                  likes={item.likes}
                  comments={item.comments}
                  bundle={item.bundle ? item.bundle : undefined}
                  video={item.video ? item.video : undefined}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Batch 3 */}
        <div className={XplStyles.batch}>
          <div className={XplStyles.sub}>
            {batch3.map((item, index) => (
              <div
                className={XplStyles.box}
                style={{ background: `url(${item.image})` }}
              >
                <PostBrief
                  key={index}
                  imageSrc={item.image}
                  likes={item.likes}
                  comments={item.comments}
                  bundle={item.bundle ? item.bundle : undefined}
                  video={item.video ? item.video : undefined}
                />
              </div>
            ))}
          </div>
          <div className={XplStyles.main}>
            <PostBrief
              imageSrc={exploreData[14].image}
              likes={exploreData[14].likes}
              comments={exploreData[14].comments}
              bundle={
                exploreData[14].bundle ? exploreData[14].bundle : undefined
              }
              video={exploreData[14].video ? exploreData[14].video : undefined}
            />
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default explore;
