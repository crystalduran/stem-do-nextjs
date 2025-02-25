import styles from "./page.module.css";
import Hero from "./components/hero/Hero"

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero/>
    </div>
  );
}
