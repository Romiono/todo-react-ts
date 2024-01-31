import React from 'react';
import {Link} from "react-router-dom";
import classes from "./NavBar.module.css"

const NavBar: React.FC = () => {
    return (
        <div>
            <nav className={classes.nav}>
                <ul className={classes.navList}>
                    <li>
                        <Link to={'/'}>Основной</Link>
                    </li>
                    <li>
                        <Link to={'/main'}>Избранные</Link>
                    </li>
                    <li>
                        <Link to={'/calender'}>Календарь</Link>
                    </li>
                    <li>
                        <Link to={'/settings'}>Настройки</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;