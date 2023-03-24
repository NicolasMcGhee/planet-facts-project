import styles from '@/styles/Planet.module.css'
import { Antonio, Fascinate_Inline, League_Spartan } from 'next/font/google'
import Image from "next/image";
import { useState } from 'react';

const antonio = Antonio({
    subsets: ['latin'],
    weight: ['400']
  })
const spartan = League_Spartan({
    subsets: ['latin']
})



export default function Planet(props){
    
    const [toggleState, setToggleState] = useState(1)
    function toggleTab(index) {
        setToggleState(index)
    }

    return(
        <>
          <section className={styles.container}>
                <div>
                    <ul className={`${styles.listMoble} ${spartan.className}`}>
                        <li  onClick={() => toggleTab(1)} className={`${toggleState === 1 ? styles.focusedTabMobile : ""}`} >OVERVIEW</li>
                        <li  onClick={() => toggleTab(2)} className={`${toggleState === 2 ? styles.focusedTabMobile : ""}`} >STRUCTURE</li>
                        <li  onClick={() => toggleTab(3)} className={`${toggleState === 3 ? styles.focusedTabMobile : ""}`} >SURFACE</li>
                    </ul>
                </div>
                <div className={`${styles.flex} ${styles.planetDetails}`}>
                    <Image src={props.Image} className={`${toggleState === 1 ? styles.main_image : toggleState === 2 ? styles.main_image : styles.removetabs}`}/>
                    <Image src={props.Internal} className={`${toggleState === 3 ? styles.main_image : styles.removetabs}`}/>
                    <div className={styles.description}>
                        <div className={styles.planetFacts}>
                            <h1 className={antonio.className}>{props.planetName}</h1>
                            <p className={`${spartan.className} ${toggleState === 1 ? styles.activeTabs : styles.removetabs}`}>{props.overview}</p>
                            <p className={`${spartan.className} ${toggleState === 2 ? styles.activeTabs : styles.removetabs}`}>{props.surfaceGeo}</p>
                            <p className={`${spartan.className} ${toggleState === 3 ? styles.activeTabs : styles.removetabs}`}>{props.interalStr}</p>
                            <p className={`${styles.link} ${spartan.className}`}>Source: <a href={props.planetLink} target="_blank"><strong>Wikipedia</strong></a></p>
                        </div>
                        <div className={`${styles.list} ${spartan.className}`}>
                            <ul>
                                <li onClick={() => toggleTab(1)} className={`${toggleState === 1 ? styles.focusedTab : ""}`} >01 OVERVIEW</li>
                                <li onClick={() => toggleTab(2)} className={`${toggleState === 2 ? styles.focusedTab : ""}`} >02 SURFACE GEOLOGY</li>
                                <li onClick={() => toggleTab(3)} className={`${toggleState === 3 ? styles.focusedTab : ""}`} >03 INTERNAL STRUCTURE</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className={`${styles.flex} ${styles.stats}`}>
                        <li className={styles.statsCol}>
                            <h3 className={spartan.className}>
                                ROTATION TIME
                            </h3>
                            <p className={antonio.className}>{props.rotation}</p>
                        </li>
                        <li className={styles.statsCol}>
                            <h3 className={spartan.className}>
                            REVOLUTION TIME
                            </h3>
                            <p className={antonio.className}>{props.revolution}</p>
                        </li>
                        <li className={styles.statsCol}>
                            <h3 className={spartan.className}>
                            RADIUS
                            </h3>
                            <p className={antonio.className}>{props.radius}</p>
                        </li>
                        <li className={styles.statsCol}>
                            <h3 className={spartan.className}>
                            AVERAGE TEMP.
                            </h3>
                            <p className={antonio.className}>{props.averageTemp}</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}