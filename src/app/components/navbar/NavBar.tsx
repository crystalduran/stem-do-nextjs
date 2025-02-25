'use client'

import { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

export default function NavBar() {
    const [isDark, setIsDark] = useState<boolean>(false);
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <Image
                src="/stemdo.svg"
                width={262}
                height={75}
                alt="stem do logo"
                priority
            />

            <ul className={styles.list}>
                <li>
                    <Link href="#" className={`${pathname === "/" ? styles.navLinkActive : styles.navLink}`}>
                        <Image src="/home.png" width={18} height={18} alt="home icon" />
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="#" className={`${pathname === "/careers" ? styles.navLinkActive : styles.navLink}`}>
                        <Image src="/careers.png" width={18} height={18} alt="career icon" />
                        <p>Carreras</p>
                    </Link>
                </li>
                <li>
                    <Link href="#" className={`${pathname === "/about" ? styles.navLinkActive : styles.navLink}`}>
                        <Image src="/about.png" width={18} height={18} alt="about icon" />
                        <p>Sobre</p>
                    </Link>
                </li>
            </ul>
            {/* <button className={styles.languageBtn}></button> */}
            <label htmlFor="themeButton" className={styles.switch}>
                <input type="checkbox" id="themeButton" className={styles.themeCheckbox} checked={isDark} onChange={() => setIsDark(!isDark)} />
                <span className={styles.sliderRound}>
                    <div className={styles.ball}>
                        {isDark ? <FaMoon color="black" /> : <FaSun color="orange" />}
                    </div>
                </span>
            </label>
        </nav>
    );
}
