import React from 'react';
import styles from './styles/RestaurantList.scss';

import {priceRangeFormatter, deliveryTimeFormatter} from './mixins';

export default (props) => {

    const items = props.items;
    const area = props.area;

    return (
        <section className={styles.container} tabIndex="1">
            <h1 className={styles.title}>Restaurants available in {area.name}</h1>

            <ol className={styles.ol}>
                {items.map(function (object, i) {
                    return (
                        <li key={i} className={styles.item}>
                            <h2 className={styles.item_title}>{object.name}</h2>

                            <dl className={styles.dl}>
                                <dt className={styles.dt}>Cuisine</dt>
                                <dd className={styles.dd}>{object.cuisine}</dd>

                                <dt className={styles.dt}>Price range</dt>
                                <dd className={`${styles.dd} ${styles.dtPrice}`}>{priceRangeFormatter.format(object.price_range)}</dd>

                                <dt className={styles.dt}>Delivery time</dt>
                                <dd className={styles.dd}>{deliveryTimeFormatter.format(object.delivery_time)}</dd>
                            </dl>

                            <div>
                                <button className={styles.caret}/>
                            </div>
                        </li>);
                })}
            </ol>
        </section>
    )
}


