import React from 'react';
import styles from './TitleAndHeading.module.css';

const TitleAndHeading = ({ Title, Heading }) => {
  return (
    <div className={styles.ContainerTitleAndHeading}>
      <div className={styles.ContainerTitle}>
        <div className={styles.rectangle18}></div>
        <div className={styles.Title}>
          <p>{Title}</p>
        </div>
      </div>
      <div className={styles.Heading}>
        <p>{Heading}</p>
      </div>
    </div>
  );
};

export default TitleAndHeading;
