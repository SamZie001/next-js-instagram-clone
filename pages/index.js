import styles from "@/styles/Home.module.css";
import Meta from "@/components/Meta";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div className={styles.p}>
      <Meta />
      <Layout>
        <p>This is home</p>
      </Layout>
    </div>
  );
}
