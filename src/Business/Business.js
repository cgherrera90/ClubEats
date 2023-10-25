import React, { useState } from 'react';
import styles from './Business.module.css';

//This component represents how each business restaurant is formatted & styled
const Business = ({ business }) => {

    // const [ favorite, setFavorite ] = useState([]);
    const [ text, setText ] = useState("♡");

    const addToFavorites = () => {
        setText(text === "♡" ? "❤️" : "♡");
    }

    return (
        <div className={styles.Business}>
            <button className={styles.favoriteButton} onClick={addToFavorites}>{text}</button>
            <div className={styles.imageSection}>
              <img src= {business.imageSrc} alt= '' />
            </div>
            <div className={styles.card}>
                <h1>{business.name}</h1>
                <p className={styles.address}>{business.address}, {business.city}, {business.state} {business.zipcode}</p>
                <p>Category: {business.category}</p>
                <p>Rating: {business.rating}</p>
                <p>Review Count: {business.reviewCount}</p>
                </div>
            </div>
    );
};

//"♡" ? "❤️" : "♡"

export default Business;