import styles from '@/styles/Earth.module.css'
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



    const [isActive, setIsActive] = useState(true)

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
                <div className={`${isActive ? styles.planetNav : styles.planetNav.active}`}>
                    <Link href={"/"}>Mercury</Link>
                    <Link href={"/Venus"}>Venus</Link>
                    <Link href={"/Earth"}>Earth</Link>
                    <Link href={"/Mars"}>Mars</Link>
                    <Link href={"/Jupiter"}>Jupiter</Link>
                    <Link href={"/Saturn"}>Saturn</Link>
                    <Link href={"/Uranus"}>Uranus</Link>
                    <Link href={"/Neptune"}>Neptune</Link>
                </div>
            </nav>
        </>
    )
}