import React from "react";
import {NavBar} from './elements';
import headerStyles from "./app-header.module.css";

export default class AppHeader extends React.Component {
    render () {
        return (
            <header className = {headerStyles.header}>
                <NavBar/>
            </header>
        )
    }
}