import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavItem from "../nav-item/nav-item";
import navbarStyles from "./navbar.module.css";
import { Link } from 'react-router-dom';
import { FC } from "react";
import { useAppSelector } from "../../services/hooks";

 const NavBar: FC = () => {
  const name = useAppSelector((store) => store.auth.user.name) 
  return (
    <nav className={navbarStyles.navbar}>
      <ul className={navbarStyles.nav_menu}>
        <li>
          <div className={navbarStyles.item_wrapper}>
            <NavItem text="Конструктор" link={'/'}>
               <BurgerIcon type = "primary"/>
            </NavItem>
            <NavItem text="Лента заказов" link ={'/feed'}>
               <ListIcon type = "primary"/>
            </NavItem>
          </div>
        </li>
        <li className={navbarStyles.logo}>
          <Link to= {'/'} className = {navbarStyles.link}>
            <Logo />
          </Link>
          
        </li>
        <li >
          <NavItem text={ name ? name : "Личный кабинет"} link ={'/profile'}>
            <ProfileIcon type = "primary" />
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar