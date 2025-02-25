'use client'
// import { useState } from "react";
import Image from "next/image";
import styles from "./search-bar.module.css";

export default function SearchBar() {
    // const [searchTerm, setSearchTerm] = useState("");

    // const handleChange = (event) => {
    //   setSearchTerm(event.target.value);
    // };
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   console.log("Searching for:", searchTerm);
    // };
    
    return (
        <form className={styles.searchBar}>
            <Image src="/search.png" width={20} height={20} alt="search icon"/>
            <input
                type="text"
                placeholder="Título de la carrera o palabra clave..."
                className={styles.search}
            />
            <button type="submit">Search</button>
        </form>
    );
}