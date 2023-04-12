import styles from "../../styles/ProfileStyles/Posts.module.css";
import Link from "next/link";

const Posts = () => {
  return (
    <div className={styles.posts}>
      <i className="fa-solid fa-camera"></i>
      <p className={styles.placeholder}>Share Photos</p>
      <p className={styles.info}>When you share photos, they will appear on your profile.</p>
      <Link href='#'>Share your first photo</Link>
    </div>
  );
};

export default Posts;
