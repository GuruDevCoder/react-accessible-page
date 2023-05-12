import React from 'react';
import classnames from 'classnames';
import styles from './styles/Nav.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
    }

    click() {
        this.setState({active: !this.state.active});
    }

    render() {
        let classes = classnames(styles.topnav, {[styles.responsive]: this.state.active});

        return (<nav>
            <ul className={classes}>
                <li className={styles.navitem}>
                    <a href="/" className={styles.link}>Home</a>
                </li>
                <li className={styles.navitem}>
                    <a href="/search" className={styles.link}>Search</a>
                </li>
                <li className={styles.navitem}>
                    <a href="/profile/account" className={styles.link}>£8.55</a>
                </li>
                <li className={styles.navitem}>
                    <a href="/profile" className={styles.link}>Simon Rohrbach</a>
                </li>
                <li className={`${styles.navitem} ${styles.icon}`}>
                    <button  className={styles.button} onClick={this.click.bind(this)}>&#9776;</button>
                </li>
            </ul>
        </nav>);

    }
}

export default Button;
