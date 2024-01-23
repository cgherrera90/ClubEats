import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './About.module.css';

//This component displays About page regarding the developer of the app
const About = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.background}> 
            </div> 
            <p className={styles.about}>Club Eats App created by: Carla Herrera, Front-End Developer</p>
            {/* Add link to portfolio site */}
        </div>     
    )
}

export default About;