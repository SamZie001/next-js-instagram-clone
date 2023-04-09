import styles from "../styles/Unviewed.module.css";
import Image from "next/image";

function Unviewed({imageSource}) {
  return (
    <div className={styles.plate}>
      <Image
        src={imageSource}
        width={100}
        height={100}
        alt="profile"
      />
    </div>
  );
}

export default Unviewed;
