import React, { useState, useEffect } from "react";
import { Button,Box } from "@mui/material";
import styles from './testDriveStyles.module.css';
import { Waypoint } from 'react-waypoint';


const TestDrive = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) {
      // Logic to trigger animation when logos come into view
      console.log("Logos are in view!");
    }
  }, [inView]);
  return (
    <div style={{height:"316px", margin:"40px 115px"}}>
      <div style={{display:"flex", justifyContent:"space-between",}}>
        <div>
          <div style={{ fontSize: "36px", fontWeight: 500, width: "50%" }}>
            Want to test drive your dream car?
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 400,
              marginTop: "26px",
              width: "90%",
            }}
          >
            You can now drive your car and mule overall the reasons to buy it
            before making a commitment.
          </div>
        </div>
        <div>
          <Button
            style={{
              height: "44px",
              width: "293px",
              backgroundColor: "#1F1A1C",
              color: "#FFFFFF",
              fontSize: "18px",
              textTransform: "none",
              fontWeight: 500,
              // margin: "46px 0 36px 0",
            }}
          >
            Browse Cars
          </Button>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-between", marginTop:"15px",  width:"auto",}}>
      <Box
          onEnter={() => setInView(true)}
          onLeave={() => setInView(false)}
        />
        <div className={inView ? styles.wavyAnimation : null}><img src="/images/CarsBrandLogos/toyota.svg" alt="toyota-logo" /></div>
        <div className={inView ? styles.wavyAnimation : null}><img src="/images/CarsBrandLogos/audi.svg" alt="audi-logo" /></div>
        <div className={inView ? styles.wavyAnimation : null}><img src="/images/CarsBrandLogos/ferrari.svg" alt="ferrari-logo" /></div>
        <div className={inView ? styles.wavyAnimation : null}><img src="/images/CarsBrandLogos/tesla.svg" alt="tesla-logo" /></div>
        <div className={inView ? styles.wavyAnimation : null}><img src="/images/CarsBrandLogos/bentley.svg" alt="bentley-logo" /></div>
        <div className={inView ? styles.wavyAnimation : null}><img src="/images/CarsBrandLogos/ford.svg" alt="ford-logo" /></div>
        <div className={inView ? styles.wavyAnimation : null}><img src="/images/CarsBrandLogos/lambo.svg" alt="lambo-logo" /></div>
      </div>
    </div>
  );
};

export default TestDrive;
