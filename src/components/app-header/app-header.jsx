import React from "react";
import {NavBar} from '.elements';
import headerStyles from "./app-header.module.css";

export default class AppHeader extends React.Compoennt {
    render () {
        return (
            <header className = {headerStyles.header}>
                <Navbar/>
            </header>
        )
    }
}