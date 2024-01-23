import React from 'react';
import styles from './Home.module.css';

//This component displays Home page details
const Home = () => {
    return(
      <div className={styles.Home}>
        <h1>Club Eats</h1>
        <p>Your home for all good food</p>
      </div>
    )
};

export default Home;