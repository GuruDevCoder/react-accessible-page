import React from 'react';
import NavComponent from './Nav';
import styles from './styles/Header.scss';

export default (props) => (
    <header className={styles.header}>
        <a href="#main" className={styles.skipLink}>Skip to main content</a>

        <div className={styles.head_top}>
            <a href="/" title="Go to Homepage">
                <img src="./assets/logo.png" alt="Deliveroo logo" className={styles.logo}/>
                <img src="./assets/logo-small.png" alt="Deliveroo logo" className={styles.logoSmall}/>
            </a>
            <div className={styles.navWrapper}>
                <NavComponent />
            </div>

        </div>

        <section className={styles.head_bottom}>
            <h1 className={styles.title}>
                <span className={styles.delivering}>{props.item_count} Restaurants delivering to</span>
                <span className={styles.zone}>{props.area.name}</span>
            </h1>
            <p className={styles.paragraph}>{props.area.info}</p>
        </section>


    </header>
)

