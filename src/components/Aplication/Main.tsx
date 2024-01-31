import React from 'react';
import NavBar from "../navbar/NavBar.tsx";
import classes from './Main.module.css'

const Main: React.FC = () => {
    return (
        <div className={classes.main}>
            <NavBar/>
        </div>
    );
};

export default Main;