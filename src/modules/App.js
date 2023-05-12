import React from 'react';
import HeaderComponent from './Header';
import RestaurantList from './RestaurantList';
import styles from './styles/App.scss';
import dummyData from '../data/restaurant-list.json';

export default () => (
    <div className={styles.container}>
        <HeaderComponent area={dummyData.area} item_count={dummyData.item_count}/>
        <main id="main">
            <RestaurantList items={dummyData.items} area={dummyData.area}/>
        </main>
    </div>
)
