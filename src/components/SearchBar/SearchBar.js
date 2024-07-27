import React, { useState } from 'react';
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
    // search bar needs to keep track of user input
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        /// here might be where we make the api fetch call with the e.target.value
        setSearch(e.target.value);
    };

    return (
        <div className={styles.SearchBar}>
        <input
          placeholder="Enter A Song, Album, or Artist"
        />
        <button className={styles.SearchButton} >
          SEARCH
        </button>
      </div>
    );
};

export default SearchBar;
