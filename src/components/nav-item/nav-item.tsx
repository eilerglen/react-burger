import navItemStyles from './nav-item.module.css';
import {FC} from 'react'

type TNavItemProps = {
  text: string
}

const NavItem: FC<TNavItemProps> = ({text, children}) => {
  return (
    <a href="/" className={`${navItemStyles.link} pt-4 pb-4 pl-5 pb-5`}>    
        <span className={navItemStyles.icon}>
          {children}
        </span>
        <p className={`${navItemStyles.text} text text_type_main-default pl-2`}>{text}</p>  
    </a>
  );

}

export default NavItem