import styles from "../styles/PostBrief.module.css";
import Image from "next/image";

export const PostBrief = ({ imageSrc, likes, comments, bundle, video }) => {
  return (
    <div className={styles.container}>
      <div className={styles.type}>
        {bundle && <i className="fa-solid fa-layer-group"></i>}
        {video && <i className="fa-solid fa-film"></i>}
      </div>
      <div className={styles.picture}>
        <Image src={imageSrc} width={100} height={100} alt="post" priority />
        <p className={styles.brief}>
          <span>
            <i className="fa-solid fa-heart"></i> {likes}
          </span>
          <span>
            <i className="fa-sharp fa-solid fa-comment"></i> {comments}
          </span>
        </p>
      </div>
    </div>
  );
};
