import RocketSvg from '../assets/rocket.svg';

import styles from './css/Header.module.css';

export default function Header() {
    return (
        <header className={styles.headerComponent}>
            <img className={styles.rocket} src={RocketSvg} />
            <span className={styles.to}>to</span>
            <span className={styles.do}>do</span>
        </header>
    )
}