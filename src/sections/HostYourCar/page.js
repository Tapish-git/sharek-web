import React, { useEffect, useState } from "react";
import styles from './hostYourCarStyles.module.css'

const EarnPassiveIncomeCard = () => {
  return <div
    style={{
      padding: "0 14.93px",
      backgroundColor: "#FAFCFF",
      borderRadius: "8px",
      width: "25%",
      height: "347px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    }}
    className={styles.moveIn}
  >
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          marginTop: "27px",
        }}
      >
        <img src="/images/HeroImages/Featured icon.svg" alt="Featured-icon-sharek" />
      </div>
    </div>
    <div
      style={{
        fontSize: "20px",
        fontWeight: 700,
        lineHeight: "42px",
        marginTop: "26px",
        textAlign: "center",
      }}
    >
      Earn Passive Income
    </div>
    <div
      style={{
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        marginTop: "26px",
        textAlign: "center",
      }}
    >
      Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
    </div>
  </div>
}

const HostYourCar = () => {


  const [cardNumber, setCardNumber] = useState(0)

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
        backgroundColor: "#EAF2F7",
        padding: "36px 63px",
        borderRadius: "20px",
      }}
    >
      <div style={{ fontSize: "36px", fontWeight: 500, textAlign: "center" }} className={styles.fadeInFromBottom}>
        <div>How can you Host your Car on Sharek ?</div>
      </div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: 400,
          textAlign: "center",
          marginTop: "26px",
        }}
        className={styles.fadeInFromBottom}
      >
        Sharek was built to empower everyone to make side income
      </div>
      <div style={{ display: "flex", marginTop: "22px", justifyContent: "space-between" }}>
        {cardNumber >= 0 && <EarnPassiveIncomeCard />}
        {cardNumber >= 1 && <EarnPassiveIncomeCard />}
        {cardNumber >= 2 && <EarnPassiveIncomeCard />}
      </div>
      {cardNumber >= 3 && <div style={{ textAlign: "center", marginTop: "30px" }}>
        <div
          style={{
            fontSize: "20px",
            fontWeight: 400,
            textAlign: "center",
            marginTop: "30px",
          }}
          className={styles.fadeInFromBottom}
        >
          Download our App for the best experience
        </div>
        <div style={{ width: "292.5px", display: "flex", justifyContent: "center", width: '100%', margin: "20px", columnGap: '2vw' }} className={styles.fadeInFromBottom}>
          <img src="/images/DownloadImages/appleStore.png" alt="apple-store-img" />
          <img src="/images/DownloadImages/playStore.png" alt="play-store-img" />
        </div>
      </div>}
    </div>
  );
};

export default HostYourCar;









// import React from "react";
// import { Box, Button } from "@mui/material";

// const HostYourCar = () => {
//   return (
//     <div
//       style={{
//         width: "81.25%",
//         height: "661px",
//         backgroundColor: "#EAF2F7",
//         padding: "36px 63px",
//         // margin: "20px",
//         borderRadius: "20px",
//         // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
//       }}
//     >
//       <div style={{ fontSize: "36px", fontWeight: 500, textAlign: "center" }}>
//         <div>How can you Host your Car on Sharek ?</div>
//       </div>
//       <div
//         style={{
//           fontSize: "20px",
//           fontWeight: 400,
//           textAlign: "center",
//           marginTop: "26px",
//         }}
//       >
//         Sharek was built to empower everyone to make side income
//       </div>
//       <div display={"flex"} marginTop={"22px"} justifyContent={"space-between"}>
//         <div
//           style={{
//             p: "0 14.93px",
//             backgroundColor: "#FAFCFF",
//             borderRadius: "8px",
//             width: "25%",
//             height: "347px",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
//           }}
//         >
//           <div display={"flex"} justifyContent={"center"}>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: "40px",
//                 height: "40px",
//                 marginTop: "27px",
//               }}
//             >
//               <img src="/images/HeroImages/Featured icon.svg" alt="Featured-icon-sharek" />
//             </div>
//           </div>
//           <div
//             style={{
//               fontSize: "20px",
//               fontWeight: 700,
//               lineHeight: "42px",
//               marginTop: "26px",
//               textAlign:"center"
//             }}
//           >
//             Earn Passive Income
//           </div>
//           <div
//             style={{
//               fontSize: "16px",
//               fontWeight: 400,
//               lineHeight: "24px",
//               marginTop: "26px",
//               textAlign:"center"
//             }}
//           >
//             Measure what matters with Untitled’s easy-to-use reports. You can
//             filter, export, and drilldown on the data in a couple clicks.
//           </div>
//         </div>
//         <div
//           style={{
//             p: "0 14.93px",
//             backgroundColor: "#FAFCFF",
//             borderRadius: "8px",
//             width: "25%",
//             height: "347px",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
//           }}
//         >
//           <div display={"flex"} justifyContent={"center"}>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: "40px",
//                 height: "40px",
//                 marginTop: "27px",
//               }}
//             >
//               <img src="/images/HeroImages/Featured icon.svg" alt="Featured-icon-sharek" />
//             </div>
//           </div>
//           <div
//             style={{
//               fontSize: "20px",
//               fontWeight: 700,
//               lineHeight: "42px",
//               marginTop: "26px",
//               textAlign:"center"
//             }}
//           >
//             Earn Passive Income{" "}
//           </div>
//           <div
//             style={{
//               fontSize: "16px",
//               fontWeight: 400,
//               lineHeight: "24px",
//               marginTop: "26px",
//               textAlign:"center"
//             }}
//           >
//             Measure what matters with Untitled’s easy-to-use reports. You can
//             filter, export, and drilldown on the data in a couple clicks.
//           </div>
//         </div>
//         <div
//           style={{
//             p: "0 14.93px",
//             backgroundColor: "#FAFCFF",
//             borderRadius: "8px",
//             width: "25%",
//             height: "347px",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
//           }}
//         >
//           <div display={"flex"} justifyContent={"center"}>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: "40px",
//                 height: "40px",
//                 marginTop: "27px",
//               }}
//             >
//               <img src="/images/HeroImages/Featured icon.svg" alt="Featured-icon-sharek" />
//             </div>
//           </div>
//           <div
//             style={{
//               fontSize: "20px",
//               fontWeight: 700,
//               lineHeight: "42px",
//               marginTop: "26px",
//               textAlign:"center"
//             }}
//           >
//             Earn Passive Income
//           </div>
//           <div
//             style={{
//               fontSize: "16px",
//               fontWeight: 400,
//               lineHeight: "24px",
//               marginTop: "26px",
//               textAlign:"center"
//             }}
//           >
//             Measure what matters with Untitled’s easy-to-use reports. You can
//             filter, export, and drilldown on the data in a couple clicks.
//           </div>
//         </div>
//       </div>
//       <div align={"center"}>
//         <div
//           style={{
//             fontSize: "20px",
//             fontWeight: 400,
//             textAlign: "center",
//             marginTop: "30px",
//           }}
//         >
//           Download our App for the best experience
//         </div>
//         <div width={"292.5px"} display={"flex"} justifyContent={"space-around"} margin={"20px"}>
//             <img src="/images/DownloadImages/appleStore.png" alt="apple-store-img"/>
//             <img src="/images/DownloadImages/playStore.png" alt="play-store-img"/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HostYourCar;
