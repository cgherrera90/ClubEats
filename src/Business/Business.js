import React from 'react';
import styles from './Business.module.css';

//This component represents how each business restaurant is formatted & styled using the info returned from Yelp API (determined in Yelp component in utils)
const Business = ({ business }) => {

    //Function to handle businesses with no phone number listed to prevent empty spaces
    const phoneNumber = () => {
        if (business.phone === "") return "N/A";
        return business.phone;
    }

    //Function to handle businesses with no price listed to prevent empty spaces
    const priceListed = () => {
        if (!business.price) return "N/A";
        return business.price;
    }

    //Function to shorten ice cream category name
    const category = () => {
        if (business.category === "Ice Cream & Frozen Yogurt") return "Desserts";
        return business.category;
    }

    return (
        <div className={styles.Business}>
            <div className={styles.imageSection}>
              <img src= {business.imageSrc} alt= '' />
            </div>
            <div className={styles.card}>
                <h1>{business.name}</h1>

                <h4 className={styles.address}>{business.address}</h4>

                <h4 className={styles.address}>{business.address2}</h4>

                <div className={styles.info}>
                    <p><span className={styles.accent}>Phone: </span>{phoneNumber()}</p>

                    <p><span className={styles.accent}>Price: </span> {priceListed()}</p>

                    <p><span className={styles.accent}>Category: </span>{category()}</p>

                    <p><span className={styles.accent}>Rating: </span>{business.rating}</p>

                    <p><span className={styles.accent}>Review Count: </span>{business.reviewCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Business;