import { div, Typography } from "@mui/material";
import React from "react";
import CarouselCars from "@/components/CarouselCars/page";
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import styles from './WhatsSpecialStyles.module.css';

const images = [
    {
      imgPath: "/images/CarsImages/car1.svg",
      label: "Image 1",
    },
    {
      imgPath: "/images/CarsImages/car1.svg",
      label: "Image 2",
    },
    {
      imgPath: "/images/CarsImages/car1.svg",
      label: "Image 3",
    },
    {
      imgPath: "/images/CarsImages/car1.svg",
      label: "Image 4",
    },
  ];


const WhatsSpecial = () => {
  return (
    <div style={{ height: "529px", backgroundColor: "#EAF2F7" }}>
      <div style={{fontSize:"36px", fontWeight:500, padding:"30px", textAlign:"center",}} className={styles.fadeInFromBottom}>
        What’s special about sharek?
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
        <div style={{width:"282px",height:"211px", backgroundColor:"#FFFFFF",margin:"5px", borderRadius:"8px", alignSelf:"end", animation: `${styles.moveIn} 1s forwards`,}}>
          <div style={{height:"9.35px",backgroundColor:"#3D0025",width:"159px", margin:"23.78px 14px 11.86px 14px"}}></div>
          <div style={{margin:"0 15.36px", fontSize:"20px"}}>Your next rental is just a few taps away. Enjoy a smooth, hassle-free experience tailored to your schedule.</div>
        </div>
        <div style={{width:"343px",height:"358px", backgroundColor:"#FFFFFF",margin:"5px", borderRadius:"8px", animation: `${styles.moveIn} 1s forwards`,}}>
          <div style={{height:"228px"}} ><CarouselCars/></div>
          <div><Typography style={{fontSize:'20px', marginLeft: '13px', marginTop: '14.5px', fontWeight: 500}}>
          2020 Lexus LS 500h
          </Typography>
          <div style={{fontSize:'16px', width:'13.75px', height:'15px', marginLeft: '11px', marginTop: '14.5px', fontWeight: 400, display:"flex", alignItems:'center'}}>
          <LocalGasStationOutlinedIcon style={{color: "#9D8D92"}}/> <span style={{margin:"0 4px"}}>61%</span> <SpeedOutlinedIcon style={{marginLeft:'12px', color: "#9D8D92"}}/> <span style={{margin:"0 4px"}}>12,800</span>
          </div>
          <div style={{textAlign: 'right', marginTop:'10px', marginRight:'20px'}}><span style={{margin:"0 4px", fontWeight: 700, fontSize:'20px'}}>AED 600 <span style={{fontWeight:450, color:'#827379'}} >per day</span></span></div>
          </div>
        </div>
        <div style={{width:"282px",height:"211px", backgroundColor:"#FFFFFF",margin:"5px", borderRadius:"8px",alignSelf:"baseline", animation: `${styles.moveIn} 1s forwards`,}}>
            <div style={{height:"9.35px",backgroundColor:"#3D0025",width:"159px", margin:"23.78px 14px 11.86px 14px"}}></div>
            <div style={{margin:"0 15.36px", fontSize:"20px"}}>Drive with confidence with our thorough vehicle and user verification, creating a trusted community. </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsSpecial;
