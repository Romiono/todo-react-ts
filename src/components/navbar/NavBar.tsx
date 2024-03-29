import React from 'react';
import {Link, Outlet} from "react-router-dom";
import classes from "./NavBar.module.css"

const NavBar: React.FC = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className={`menu p-4 w-80 min-h-full text-base-content ${classes.nav}`}>
                    {/* Sidebar content here */}
                    <li>
                        <Link  to={'/main'}>Основной</Link>
                    </li>
                    <li>
                        <Link to={'/favorite'}>Избранные</Link>
                    </li>
                    <li>
                        <Link to={'/calender'}>Календарь</Link>
                    </li>
                    <li>
                        <Link to={'/settings'}>Настройки</Link>
                    </li>
                </ul>
            </div>
        </div>
    // <div className={'columns-2 flex w-full'}>
    //     <nav className={`${classes.nav} w-2/12`}>
    //         <ul className={classes.navList}>
    //             <li>
    //                 <Link to={'/main'}>Основной</Link>
    //             </li>
    //             <li>
    //                 <Link to={'/favorite'}>Избранные</Link>
    //             </li>
    //             <li>
    //                 <Link to={'/calender'}>Календарь</Link>
    //             </li>
    //             <li>
    //                 <Link to={'/settings'}>Настройки</Link>
    //             </li>
    //         </ul>
    //     </nav>
    //     <div className={'w-full'} id={'detail'}>
    //         <Outlet/>
    //         </div>
    //     </div>
    );
};

export default NavBar;