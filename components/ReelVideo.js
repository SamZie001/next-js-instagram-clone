import Image from "next/image";
import reelStyles from "../styles/ReelVideo.module.css";

const ReelVideo = ({
  profilePic,
  videoSrc,
  name,
  description,
  likes,
}) => {
  return (
    <div className={reelStyles["video-card"]}>
      <video
        className={reelStyles["video-player"]}
        src={videoSrc}
        loop
        autoPlay
        muted
      />
      <div className={reelStyles["video-details"]}>
        <div className={reelStyles.flat}>
          <p>
            <Image src={profilePic} width={35} height={35} alt="profile-pic" />
            {name} . Follow
          </p>
          <p>{description}</p>
          <p>
            <i className="fa-sharp fa-solid fa-music"></i> {name} . Original
            audio
          </p>
        </div>
        <ul className={reelStyles.side}>
          <li>
            <i className="fa-regular fa-heart"></i>
            <p>{likes}</p>
          </li>
          <li>
            <i className="fa-regular fa-comment"></i>
            <p>{likes}</p>
          </li>
          <li>
            <i className="fa-regular fa-paper-plane"></i>
          </li>
          <li>
            <i className="fa-regular fa-bookmark"></i>
          </li>
          <li>
            <i className="fa-solid fa-ellipsis"></i>
          </li>
          <Image width={24} height={24} src={profilePic} alt="profile-pic" />
        </ul>
      </div>
    </div>
  );
};

export default ReelVideo;
