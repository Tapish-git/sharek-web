// components/ChooseAccordingNavigator.js
"use client"

// components/Navigator.js

import React, { useState } from 'react';
import styles from './ChoooseAccordingNavigatorStyles.module.css'; // Import CSS module for styling

const ChooseAccordingNavigator = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className={styles.navigator}>
      <button
        className={`${styles.button} ${selectedButton === 1 ? styles.selected : ''}`}
        onClick={() => handleButtonClick(1)}
      >
        Electric
      </button>
      <button
        className={`${styles.button} ${selectedButton === 2 ? styles.selected : ''}`}
        onClick={() => handleButtonClick(2)}
      >
        Performance
      </button>
      <button
        className={`${styles.button} ${selectedButton === 3 ? styles.selected : ''}`}
        onClick={() => handleButtonClick(3)}
      >
       Convertibles
      </button>
      <button
        className={`${styles.button} ${selectedButton === 4 ? styles.selected : ''}`}
        onClick={() => handleButtonClick(4)}
      >
        Pet friendly
      </button>
      <button
        className={`${styles.button} ${selectedButton === 5 ? styles.selected : ''}`}
        onClick={() => handleButtonClick(5)}
      >
        Off-roading
      </button>
      <div className={styles.content}>
        {/* Content for Button {selectedButton} */}
      </div>
    </div>
  );
};

export default ChooseAccordingNavigator;
