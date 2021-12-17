import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavItem from "../nav-item/nav-item";
import navbarStyles from "./navbar.module.css";

 const NavBar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <ul className={navbarStyles.nav_menu}>
        <li>
          <div className={navbarStyles.item_wrapper}>
            <NavItem text="Конструктор">
               <BurgerIcon />
            </NavItem>
            <NavItem text="Лента заказов">
               <ListIcon />
            </NavItem>
          </div>
        </li>
        <li className={navbarStyles.logo}>
          <Logo />
        </li>
        <li >
          <NavItem text="Личный кабинет">
            <ProfileIcon />
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar