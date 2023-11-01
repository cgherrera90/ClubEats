import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './About.module.css';

const About = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.background}>
            </div>
            <p className={styles.about}>All about this wonderful app!</p>
            </div>
    )
}

export default About;