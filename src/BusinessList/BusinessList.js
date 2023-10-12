import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css'

//Component that will render a list of businesses
const BusinessList = ({ businesses}) => {
    return (
        <div className={styles.BusinessList}>
            {businesses.map((business) => {
                let businessId = businesses[business];
                return (
                    <Business business={business} key={businessId} />
                    )})}
        </div>
    );
};

export default BusinessList;
