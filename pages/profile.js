"use client";
import Layout from "@/components/Layout";
import Meta from "@/components/Meta";
import profileStyles from "../styles/Profile.module.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Posts from "@/components/Profile/Posts";
import Saved from "@/components/Profile/Saved";
import Tagged from "@/components/Profile/Tagged";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const profile = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => setLoader(false), 1000);
  const postDOM = useRef();
  const saveDOM = useRef();
  const tagDOM = useRef();

  const [showObjects, setShowObjects] = useState({
    showPosts: true,
    showSaved: false,
    showTagged: false,
  });

  const toggleActive = (property) => {
    setShowObjects({
      showPosts: property === "posts" ? true : null,
      showSaved: property === "saved" ? true : null,
      showTagged: property === "tagged" ? true : null,
    });
  };
  useEffect(() => {
    if (showObjects.showPosts) {
      postDOM.current.classList.add(profileStyles.active);
    } else {
      postDOM.current.classList.remove(profileStyles.active);
    }
    if (showObjects.showSaved) {
      saveDOM.current.classList.add(profileStyles.active);
    } else {
      saveDOM.current.classList.remove(profileStyles.active);
    }
    if (showObjects.showTagged) {
      tagDOM.current.classList.add(profileStyles.active);
    } else {
      tagDOM.current.classList.remove(profileStyles.active);
    }
  }, [showObjects]);

  return (
    <Layout>
      <Meta title={"Jonathan Doe (@john_doe) | Instagram"} />
      <main className={profileStyles.main}>
        {loader && <Loader />}
        <div className={profileStyles.summary}>
          <div className={profileStyles["profile-picture"]}>
            <Image
              src="/no-profile.png"
              width={100}
              height={100}
              alt="profile-picture"
              priority
            />
          </div>
          <div className={profileStyles.stats}>
            <div className={profileStyles.stat}>
              <p>john_doe</p>
              <button>Edit profile</button>
              <i className="fa-solid fa-gear"></i>
            </div>
            <div className={profileStyles.stat}>
              <p>0 posts</p>
              <p>111 followers</p>
              <p>91 following</p>
            </div>
            <div className={profileStyles.stat}>
              <p>Jonathan Doe</p>
              <span>Hello World, i am a developer !</span>
            </div>
          </div>
        </div>
        <ul className={profileStyles.posts}>
          <li onClick={() => toggleActive("posts")} ref={postDOM}>
            <i className="fa-solid fa-boxes-stacked"></i>POSTS
          </li>
          <li onClick={() => toggleActive("saved")} ref={saveDOM}>
            <i className="fa-regular fa-bookmark"></i>SAVED
          </li>
          <li onClick={() => toggleActive("tagged")} ref={tagDOM}>
            <i className="fa-solid fa-id-card-clip"></i>TAGGED
          </li>
        </ul>
        {showObjects.showPosts && <Posts />}
        {showObjects.showSaved && <Saved />}
        {showObjects.showTagged && <Tagged />}
      </main>
      <Footer />
    </Layout>
  );
};

export default profile;
