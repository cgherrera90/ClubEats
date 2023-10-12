import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Explore.module.css';

const Explore = () => {
    return (
        <div className={styles.Explore}>
            <Navbar />
            <div className={styles.searchBar}>
              <SearchBar />
            </div>
            <h2>Try one of these restaurants near you!</h2>
            <p>Here will be a list of randomized suggested restaurants</p>
        </div>
    )
}

export default Explore;