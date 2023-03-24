import styles from '@/styles/Planet.module.css'
import { Antonio, League_Spartan } from '@next/font/google'
import Link from 'next/link'
import { useState } from 'react'


const antonio = Antonio({
    subsets: ['latin'],
    weight: ['400']
  })
const spartan = League_Spartan({
    subsets: ['latin']
})


export default function Header(props) {



    const [isActive, setIsActive] = useState(false)

    function handleChange() {
        setIsActive(isActive => !isActive)
    }

    return(
        <>
            <nav className={`${styles.nav} ${antonio.className}`}>
                <h1>The Planets</h1>
                <button className={styles.hamburger} onClick={handleChange}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                <div className={`${isActive ? styles.planetNavActive : styles.planetNav}`}>
                    <Link className={styles.planetLink} href={"/"}>Mercury</Link>
                    <Link className={styles.planetLink} href={"/Venus"}>Venus</Link>
                    <Link className={styles.planetLink} href={"/Earth"}>Earth</Link>
                    <Link className={styles.planetLink} href={"/Mars"}>Mars</Link>
                    <Link className={styles.planetLink} href={"/Jupiter"}>Jupiter</Link>
                    <Link className={styles.planetLink} href={"/Saturn"}>Saturn</Link>
                    <Link className={styles.planetLink} href={"/Uranus"}>Uranus</Link>
                    <Link className={styles.planetLink} href={"/Neptune"}>Neptune</Link>
                </div>
            </nav>
        </>
    )
}