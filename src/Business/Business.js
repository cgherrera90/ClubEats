import React from 'react';
import styles from './Business.module.css';

//This component represents how each business restaurant is formatted & styled using the info returned from Yelp API (determined in Yelp component in utils)
const Business = ({ business }) => {

    return (
        <div className={styles.Business}>
            <div className={styles.imageSection}>
              <img src= {business.imageSrc} alt= '' />
            </div>
            <div className={styles.card}>
                <h1>{business.name}</h1>
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