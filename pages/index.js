"use client";
import styles from "../styles/Home.module.css";
import Meta from "@/components/Meta";
import Layout from "@/components/Layout";
import { useState } from "react";
import Loader from "@/components/Loader";
import Unviewed from "@/components/Unviewed";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => setLoader(false), 1000);

  const [suggestionsData] = useState([
    {
      name: "nusi",
      image: undefined,
      info: "Followed by sashi + 9 more",
    },
    {
      name: "dave_plays",
      image: "/profile1.png",
      info: "Followed by ceoGroup1",
    },
    {
      name: "reo_okoli",
      image: undefined,
      info: "Followed by sashi + 19 more",
    },
    {
      name: "elephantgate",
      image: "/profile4.jpg",
      info: "Followed by HBO + 1 more",
    },
    {
      name: "b_breadStores_ng",
      image: "/profile5.jpg",
      info: "Followed by insta_blog + 24 more",
    },
  ]);
  const [storyData] = useState([
    {
      image: "/profile1.png",
      name: "nifebimbo",
    },
    {
      image: "/profile2.jpg",
      name: "joyyyeeee",
    },
    {
      image: "/profile8.png",
      name: "js_hub",
    },
    {
      image: "/profile3.png",
      name: "feyi0",
    },
    {
      image: "/profile4.jpg",
      name: "cello",
    },
    {
      image: "/profile10.jpg",
      name: "ai_merchant",
    },
    {
      image: "/profile5.jpg",
      name: "xander.szn",
    },
    {
      image: "/profile6.jpg",
      name: "hbo_fanpage",
    },
    {
      image: "/profile7.jpg",
      name: "nexttrends",
    },
    {
      image: "/profile9.jpg",
      name: "css3_tips",
    },
  ]);

  return (
    <>
      <Meta />
      <Layout>
        <main className={styles.home}>
          {loader && <Loader />}

          {/* Feed */}
          <div className={styles.feed}>
            <div className={styles.stories}>
              {storyData.slice(0,8).map((story, index) => (
                <div key={index} className={styles.story}>
                  <Unviewed imageSource={story.image} compWidth={66}/>
                  <p>{story.name.length>=12 ?`${story.name.slice(0,9)}...`: story.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className={styles.suggestions}>
            <div className={styles.details}>
              <Image src="/no-profile.png" width={54} height={54} />
              <span>
                <strong>JD_J01</strong>
                <p>John Doe</p>
              </span>
              <Link href="#">Switch</Link>
            </div>

            <div className={styles["see-more"]}>
              <h3>Suggestions for you</h3>
              <Link href="#">See all</Link>
            </div>

            {suggestionsData.map((det, index) => (
              <div className={styles["sug-details"]} key={index}>
                <Image
                  src={det.image ? det.image : "/no-profile.png"}
                  width={40}
                  height={40}
                />
                <span>
                  <strong>{det.name}</strong>
                  <p>{det.info}</p>
                </span>
                <Link href="#">Follow</Link>
              </div>
            ))}

            <Footer />
          </div>
        </main>
      </Layout>
    </>
  );
}
