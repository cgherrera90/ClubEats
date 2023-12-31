import React from 'react';
import styles from './Business.module.css';

//This component represents how each business restaurant is formatted & styled
const Business = ({ business }) => {
    return (
        <div className={styles.Business}>
            <div className={styles.imageSection}>
              <img src= {business.imageSrc} alt= '' />
            </div>
            <div className={styles.card}>
                <h1>{business.name}</h1>
                <p className={styles.address}>{business.address}, {business.city}, {business.state} {business.zipcode}</p>
                <p>Category: {business.category}</p>
                <p>Rating: {business.rating}</p>
                <p>Review Count: {business.reviewCount}</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.favoriteButton}>♡</button>
                </div>
            </div>
        </div>
    );
};

export default Business;

// ❤️