import searchStyles from "../styles/NavComponents/Search.module.css";
import { useState } from "react";

const Search = () => {
  const [searchString, setSearchString] = useState("");

  return (
    <div className={searchStyles["search-component"]}>
      <div className={searchStyles["search-space"]}>
        <h2>Search </h2>
        <i
          
          nput
          type="text"
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Search"
          value={searchString}
        />
        {searchString.length > 0 && (
          <i
            
            onClick={() => setSearchString("")}
            className="fa-sharp fa-solid fa-circle-xmark"
          ></i>
        )}
      </div>
      <div className={searchStyles["search-results"]}>
        <h3>Recent</h3>
        <p>No recent searches.</p>
      </div>
    </div>
  );
};

export default Search;
