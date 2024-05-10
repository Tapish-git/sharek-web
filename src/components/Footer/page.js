import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./footerStyles.module.css";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#1F1A1C",
          height: "316px",
          width: "100%",
          padding: "64px 80px 48px 80px",
          display: "flex",
        }}
      >
        <Box marginLeft={"32px"}>
          <Image src="/images/Logo.svg" alt="logo" width={150} height={80} />
        </Box>
        <Box marginLeft={"62px"} display={"flex"} flexDirection={"column"}>
          <Link href="/" className={styles.link}>
            Services
          </Link>
          <Link href="/" className={styles.link}>
            Terms and Conditions
          </Link>
          <Link href="/" className={styles.link}>
            Privacy
          </Link>
          <Link href="/" className={styles.link}>
            Contact Us
          </Link>
        </Box>
        <Box marginLeft={"62px"} display={"flex"} flexDirection={"column"}>
          <Link href="/" className={styles.link}>
            Twitter
          </Link>
          <Link href="/" className={styles.link}>
            LinkedIn
          </Link>
          <Link href="/" className={styles.link}>
            Facebook
          </Link>
          <Link href="/" className={styles.link}>
            GitHub
          </Link>
          <Link href="/" className={styles.link}>
            AngelList
          </Link>
          <Link href="/" className={styles.link}>
            Dribble
          </Link>
        </Box>
        <Box
          marginLeft={"62px"}
          width={"283px"}
          height={"40px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <img src="/images/DownloadImages/appleStore.png" alt="" />
          <img src="/images/DownloadImages/playstore.png" alt="" />
        </Box>
      </div>
      <Box height={"234px"}></Box>
    </div>
  );
};

export default Footer;
