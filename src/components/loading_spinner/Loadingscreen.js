import React from 'react';
import styles from '../../Includes/css/custom/loading.module.css';

const LoadingScreen = (props) => {

    const {text,colorGiven='white',error=false } = props

return (
    <>
        <div className={styles.background}>
        {!error &&
            <div className={styles.loader}>
            <div className={`${styles.inner} ${styles.one}`}></div>
            <div className={`${styles.inner} ${styles.two}`}></div>
            <div className={`${styles.inner} ${styles.three}`}></div>
            </div>
        }
        <div className={styles.text} dangerouslySetInnerHTML={{__html:text}} style={{color:colorGiven}}></div>
        </div>
    </>)}

export default LoadingScreen