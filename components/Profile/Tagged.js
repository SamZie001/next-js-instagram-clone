import styles from "../../styles/ProfileStyles/Saved.module.css";
import Link from "next/link";

const Tagged = () => {
  return (
    <div className={styles.posts}>
      <i className="fa-solid fa-tag"></i>
      <p className={styles.placeholder}>Tagged posts</p>
      <p className={styles.info}>When you are tagged in, they will appear on your profile.</p>
    </div>
  )
}

export default Tagged