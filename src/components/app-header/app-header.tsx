import NavBar from "../navbar/navbar"
import headerStyles from "./app-header.module.css";
import { FC } from "react";

const AppHeader: FC = () => {
    return (
      <header className={headerStyles.header}>
        <NavBar/>
      </header>
    );
}

export default AppHeader