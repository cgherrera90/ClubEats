import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Business.module.css';

//This component represents how each business restaurant is formatted & styled
const Business = ({ business }) => {

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
                <h1><Link to="/businesses/id">{business.name}</Link></h1>
                <p className={styles.address}>{business.address}</p>
                <p className={styles.address}>{business.address2}</p>
                <p>Phone: {business.phone}</p>
                <p>Price: {business.price}</p>
                <p>Category: {business.category}</p>
                <p>Rating: {business.rating}</p>
                <p>Review Count: {business.reviewCount}</p>
                </div>
            </div>
    );
};

export default Business;