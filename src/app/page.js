import styles from "./page.module.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import HeroSection from "@/sections/HeroSection/page";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerSection}>
        <Header />
      </div>
      <div className={styles.heroSection}>
        <HeroSection />
      </div>
      <div className={styles.footerSection}>
        <Footer />
      </div>
    </div>
  );
}
