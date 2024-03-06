import React from 'react';
import {Link, Outlet} from "react-router-dom";
import classes from "./NavBar.module.css"

const NavBar: React.FC = () => {
    return (
        <div className={'columns-2 flex w-full'}>
            <nav className={`${classes.nav} w-2/12`}>
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
            <div className={'flex justify-center items-center w-full'} id={'detail'}>
                <Outlet />
            </div>
        </div>
    );
};

export default NavBar;