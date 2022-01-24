import navItemStyles from './nav-item.module.css';
import {FC} from 'react';
import {NavLink} from 'react-router-dom'

type TNavItemProps = {
  text: string
  link: string
  }

const NavItem: FC<TNavItemProps> = ({text, link, children}) => {
  return (
    <NavLink to={link} className={`${navItemStyles.link} pt-4 pb-4 pl-5 pb-5`} exact>    
        <span className={navItemStyles.icon}>
          {children}
        </span>
        <p className={`${navItemStyles.text} text text_type_main-default pl-2`}>{text}</p>  
    </NavLink>
  );

}

export default NavItem