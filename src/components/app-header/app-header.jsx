import NavBar from "../navbar/navbar"
import headerStyles from "./app-header.module.css";

const AppHeader = () => {
    return (
      <header className={headerStyles.header}>
        <NavBar/>
      </header>
    );
}

export default AppHeader