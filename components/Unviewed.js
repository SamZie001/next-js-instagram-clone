import styles from "../styles/Unviewed.module.css";
import Image from "next/image";

function Unviewed({ imageSource, compWidth }) {
  return (
    <div
      className={styles.plate}
      style={{ width: compWidth, height: compWidth }}
    >
      <Image
        src={imageSource ? imageSource : "/no-profile.png"}
        width={500}
        height={500}
        alt="profile"
        priority
      />
    </div>
  );
}

export default Unviewed;
