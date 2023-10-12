import React, { useState } from 'react';
import styles from './SearchBar.module.css';


const sortOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

const SearchBar = ({ searchYelp }) => {
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sort_by, setSortBy] = useState("best_match");

    function sortStyle(sortOption) {
      if (sort_by === sortOption) {
        return styles.active;
      }
      return "";
    }
    

    function handleSort(sortOption) {
      setSortBy(sortOption);
    }

    function handleSearchInput(e) {
      setTerm(e.target.value);
    }

    function handleLocation(e) {
      setLocation(e.target.value);
    }

    function totalSearch(e) {
      e.preventDefault();
      searchYelp(term, location, sort_by);
    }

    //The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names
    const sortOptionsBar = () => {
        return Object.keys(sortOptions).map((sortOption) => {
          let sortOptionValue = sortOptions[sortOption];
          return <li className={sortStyle(sortOptionValue)}
                    key={sortOptionValue}
                    onClick={() => {handleSort(sortOptionValue)
                    }}>{sortOption}</li>;
        });
      };

    return (
        <div className={styles.SearchBar}>
            <div className={styles.sortOptions}>
                <ul>{sortOptionsBar()}</ul>
            </div>
            <form className={styles.form} onSubmit={totalSearch}>
                <input className={styles.search} type="text" placeholder="Enter Search Term" onChange={handleSearchInput} />
                <input className={styles.location} type="text" placeholder="Enter Location" onChange={handleLocation} />
                <button className="search-button">🔍</button>
            </form>
        </div>
    )
};

export default SearchBar;