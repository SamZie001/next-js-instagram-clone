import styles from "../../styles/ProfileStyles/Saved.module.css";
import Link from "next/link";

const Saved = () => {
  return (
    <div className={styles.posts}>
      <i className="fa-solid fa-bookmark"></i>
      <p className={styles.placeholder}>Save Posts</p>
      <p className={styles.info}>When you save posts, they will appear on your profile.</p>
    </div>
  )
}

export default Saved