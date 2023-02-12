//css
import styles from './Header.module.css';

//assets
import igniteLogo from '../assets/icon.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo ignite"/>
        </header>
    );
}