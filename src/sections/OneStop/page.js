import React, { useEffect, useState } from "react";
import styles from './OneStopStyles.module.css';

const FindPerfectCarComponent = () => {

  return (
    <div
      style={{
        padding: "0 14.93px",
        backgroundColor: "#FAFCFF",
        borderRadius: "8px",
        width: "25%",
        height: "347px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        animation: `${styles.moveIn} 1s forwards`, // Apply animation
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            height: "40px",
            backgroundColor: "black",
            borderRadius: "50%",
            color: "white",
            fontSize: "21.85px",
            fontWeight: 500,
            marginTop: "27px",
          }}
        >
          01
        </div>
      </div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "42px",
          marginTop: "26px",
        }}
      >
        Find the perfect car for your next staycation
      </div>
      <div
        style={{
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "24px",
          marginTop: "26px",
        }}
      >
        Whether you have a team of 2 or 200, our shared team inboxes keep
        everyone on the same page and in the loop.
      </div>
    </div>
  );
};


const OneStop = () => {

  const [cardNumber, setCardNumber]  = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCardNumber(prev => prev + 1); // Increment cardNumber
    }, 200);
  
    // Clean up the interval when the component unmounts or when cardNumber changes
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array for running effect once
  

  return (
    <div
      style={{
        width: "81.25%",
        height: "661px",
        backgroundColor: "#FFFFFF",
        padding: "36px 63px",
        borderRadius: "20px",
        position: "relative",
        textAlign: "center",
        fontSize: "36px",
        fontWeight: 500
      }}
    >
      <div
        style={{
          backgroundColor: "#EAF2F7",
          width: "481.72px",
          height: "36px",
          position: "absolute",
          top: "40px",
          left: "280px"
        }}
      />
      <div style={{ position: 'relative' }}>One stop for all your automobile needs</div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: 400,
          textAlign: "center",
          marginTop: "26px"
        }}
      >
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "22px",
          justifyContent: "space-between"
        }}
      >
        {cardNumber >= 0 && <FindPerfectCarComponent />}
        {cardNumber >= 1 && <FindPerfectCarComponent />}
        {cardNumber >= 2 && <FindPerfectCarComponent />}
        {/* Repeat this div block for other items */}

      </div>
      {cardNumber >= 4 && <div style={{ textAlign: "center", marginTop: "36px"}} className={styles.fadeInFromBottom}>
        <button
          style={{
            height: "44px",
            width: "293px",
            backgroundColor: "#1F1A1C",
            color: "#FFFFFF",
            fontSize: "18px",
            textTransform: "none",
            fontWeight: 500,
            margin: "46px 0 36px 0",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Browse Cars
        </button>
      </div>}
    </div>
  );
};

export default OneStop;
