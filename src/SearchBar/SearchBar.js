import React, { useState } from 'react';
import styles from './SearchBar.module.css';

//Object containing sort options that user can choose to sort their search inputs (based on options allowed by Yelp API)
const sortOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

//Component handles all search and sort functionality that determines which businesses are returned from API and displays search bar
const SearchBar = ({ searchYelp }) => {
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sort_by, setSortBy] = useState("best_match");

//Determines styling based on which sort option is selected on page, so selected option is easier to see
    function sortStyle(sortOption) {
      if (sort_by === sortOption) {
        return styles.active;
      }
      return "";
    }
    
//Function sets new state based on which sort option is selected by user
    function handleSort(sortOption) {
      setSortBy(sortOption);
    }
//Function sets new state based on search term that is inputted by user
    function handleSearchInput(e) {
      setTerm(e.target.value);
    }
//Function sets new state based on location that is inputted by user
    function handleLocation(e) {
      setLocation(e.target.value);
    }

    //Function uses prop passed down to handle user's search criteria, which will then use that criteria to request info from Yelp API 
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