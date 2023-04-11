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
import { suggestionsData, storyData, feedData } from "@/lib/staticdata";

export default function Home() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => setLoader(false), 1000);
  return (
    <>
      <Meta />
      <Layout>
        <main className={styles.home}>
          {loader && <Loader />}

          {/* Feed */}
          <div className={styles.feed}>
            <div className={styles.stories}>
              {storyData.slice(0, 8).map((story, index) => (
                <div key={index} className={styles.story}>
                  <Unviewed imageSource={story.image} compWidth={66} />
                  <p>
                    {story.name.length >= 12
                      ? `${story.name.slice(0, 9)}...`
                      : story.name}
                  </p>
                </div>
              ))}
            </div>
            <div className={styles.posts}>
              {feedData.map((post, index) => (
                <div key={index} className={styles["single-post"]}>
                  <div className={styles["post-top"]}>
                    <div className={styles.left}>
                      <Unviewed imageSource={post.image} compWidth={42} />
                      <p>
                        <strong>{post.name}</strong>
                        {post.verified && <i class="fa fa-check-circle"></i>}
                        <span>
                          <i class="fa-solid fa-period">.</i>
                          <span> {post.timeline}</span>
                        </span>
                      </p>
                    </div>
                    <div className={styles.right}>
                      <i className="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>

                  <div className={styles["post-main"]}>
                    {post.contentSrc.endsWith(".mp4") && (
                      <video src={post.contentSrc} controls></video>
                    )}
                    {post.contentSrc.endsWith(".jpg") && (
                      <Image
                        src={post.contentSrc}
                        width={100}
                        height={100}
                        alt="post-content"
                        priority
                      />
                    )}
                  </div>

                  <div className={styles["post-interact"]}>
                    <div className={styles.left}>
                      <i className="fa-regular fa-heart" id="heart"></i>
                      <i className="fa-regular fa-comment"></i>
                      <i class='fa fa-send'></i>
                    </div>
                    <div className={styles.right}>
                      <i className="fa-regular fa-bookmark"></i>
                    </div>
                  </div>

                  <div className={styles["post-stats"]}>
                    <strong>{post.likes} likes</strong>
                    <p>
                      <strong>{post.name}</strong>&nbsp;{post.description}
                    </p>
                    <span>View all comments</span>
                    <input type="text" placeholder="Add a comment..." />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Suggestions */}
          <div className={styles.suggestions}>
            <div className={styles.details}>
              <Image
                src="/no-profile.png"
                width={54}
                height={54}
                alt="profile"
              />
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
                  alt="profile"
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
