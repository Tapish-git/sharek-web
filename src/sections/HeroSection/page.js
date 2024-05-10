"use client";
import React, { useState } from "react";
import styles from "./heroSectionStyles.module.css";
import OneStop from "../OneStop/page";
import WhatsSpecial from "../WhatsSpecial/page";
import FindCars from "../FindCars/page";
import ChooseAccordingly from "../ChooseAccordingly/page";
import TestDrive from "../TestDrive/page";
import HostYourCar from "../HostYourCar/page";
import { Waypoint } from "react-waypoint";

export default function HeroSection() {
  const [sectionNumber, setSectionNumber] = useState(0);
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div
        style={{
          alignItems: "center",
          width: "100%",
          height: "auto",
          zIndex: 3,
          backgroundColor: "#EBE0E2",
          paddingBottom: "10vh",
        }}
      >
        <div>
          <img
            src="images/HeroImages/Rectangle 6724.png"
            alt="rectangle"
            style={{
              position: "absolute",
              top: "80px",
              right: "0px",
              zIndex: 1,
              width: "100%",
              height: "auto",
            }}
          />
          <div style={{ display: "flex" }}>
            <img
              src="/images/HeroImages/Polygon 4.png"
              alt="Layover Image"
              style={{
                position: "absolute",
                top: "0px",
                right: "29.94px",
                zIndex: 1,
                opacity: 0.2,
              }}
            />
            <img
              src="/images/HeroImages/sharek.png"
              alt="sharek"
              style={{
                position: "absolute",
                top: "0px",
                right: "0",
                zIndex: 1,
                opacity: 0.2,
              }}
            />
            <img
              src="/images/HeroImages/Kkkk.png"
              alt="kkk"
              style={{
                position: "absolute",
                top: "80px",
                right: "0",
                height: "845.27px",
                zIndex: 0,
                opacity: 0.2,
              }}
            />
          </div>
        </div>
        <div
          style={{
            zIndex: 3,
            position: "relative",
            display: "flex",
          }}
        >
          <div style={{ width: "40%", padding: "100px" }}>
            <div
              variant="h6"
              style={{
                color: "white",
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "5vh",
              }}
              className={styles.fadeInFromBottom}
            >
              Rent the perfect car for every occasion!
            </div>{" "}
            <div
              variant="h6"
              style={{
                color: "white",
                fontSize: "24px",
                marginBottom: "5vh",
              }}
              className={styles.fadeInFromBottom}
            >
              Rent the Perfect Car for Every Ocassion!
            </div>{" "}
            <br />
            <div
              style={{ alignItems: "center", color: "white", width: "300px" }}
            >
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className={styles.fadeInFromBottom}
              >
                <img
                  src="/images/DownloadImages/appleStore.png"
                  alt="screen-view"
                />
                <img
                  src="/images/DownloadImages/playStore.png"
                  alt="screen-view"
                  style={{ paddingLeft: "5px" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <br />
                <div
                  style={{ alignSelf: "center" }}
                  className={styles.fadeInFromBottom}
                >
                  Or
                </div>
                <br />
                <div
                  style={{ alignSelf: "center" }}
                  className={styles.fadeInFromBottom}
                >
                  Scan to Download
                </div>
                <br />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/images/DownloadImages/scan.svg"
                  alt="scanner"
                  style={{}}
                  className={styles.fadeInFromBottom}
                />
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "30px" , marginLeft:"170px"}}>
            <img
              src="/images/HeroImages/iPhone.png"
              alt="screen-view"
              style={{}}
              className={styles.moveIn}
            />
          </div>
        </div>
      </div>
      <div>
        <div style={{ height: "383px", backgroundColor: "#EBE0E2" }}></div>
        <div
          style={{
            height: "377px",
            position: "relative",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Waypoint onEnter={() => setSectionNumber(1)} bottomOffset={-300}>
              {sectionNumber >= 1 && <OneStop />}
            </Waypoint>
          </div>
        </div>
      </div>
      <div style={{marginTop:"20px"}}>
      <Waypoint onEnter={() => setSectionNumber(2)} bottomOffset={-500}>
          {sectionNumber >= 2 && <WhatsSpecial />}
        </Waypoint>
      </div>
      <div>
        <FindCars />
      </div>
      <div>
      <Waypoint onEnter={() => setSectionNumber(4)} bottomOffset={-300}>
        {sectionNumber >= 4 && <ChooseAccordingly />}
      </Waypoint>
        {/* <ChooseAccordingly /> */}
      </div>
      
      <div>
      <Waypoint onEnter={() => setSectionNumber(5)} bottomOffset={-300}>
      {sectionNumber >= 5 && <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}><TestDrive /></div>}
      </Waypoint>
        
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <Waypoint onEnter={() => setSectionNumber(6)} bottomOffset={-300}>
      {sectionNumber >= 6 && <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}><HostYourCar /></div>}
      </Waypoint>
      </div>
    </div>
  );
}
