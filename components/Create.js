import createStyles from "../styles/NavComponents/Create.module.css";

const Create = ({ handleClose }) => {
  return (
    <div className={createStyles.create}>
      <i onClick={handleClose} className="fa-solid fa-xmark"></i>
      <div className={createStyles["create-modal"]}>
        <h4>Create new post</h4>
        <div className={createStyles["modal-div"]}>
          <>
            <i className="fa-sharp fa-regular fa-image"></i>
            <i className="fa-brands fa-youtube"></i>
          </>
          <p>Drag photos and videos here</p>
          <button>Select from computer</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
