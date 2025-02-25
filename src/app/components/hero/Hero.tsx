import styles from "./hero.module.css";
import SearchBar from "../search-bar/SearchBar";

export default function Hero() {
    return (
        <div className={styles.background}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>Descubre Tu Carrera Soñada</h1>
                <p>Encuentra la carrera en ciencia, tecnología o ingeniería ideal para ti en <span>República Dominicana</span>.</p>
                <SearchBar/>
            </div>
        </div>
    );
}