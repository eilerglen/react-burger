import NavBar from "../navbar/navbar"
import headerStyles from "./app-header.module.css";

export default function AppHeader() {
    return (
      <header className={headerStyles.header}>
        <NavBar/>
      </header>
    );
}