"use client";
import Layout from "@/components/Layout";
import XplStyles from "../styles/Explore.module.css";
import Loader from "@/components/Loader";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from "react";
import { exploreData } from "@/lib/staticdata";

const explore = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => setLoader(false), 1000);

  const batch1 = exploreData.slice(0, 4);
  const batch2 = exploreData.slice(5, 9);
  const batch3 = exploreData.slice(10, 14);
  return (
    <Layout>
      <main>
        {loader && <Loader />}
        
      </main>
      <Footer />
    </Layout>
  );
};

export default explore;
