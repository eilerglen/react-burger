import styles from './profile-nav.module.css'
import { NavLink, useHistory } from 'react-router-dom'
import { useAppDispatch } from '../../services/hooks'
import { logout } from '../../services/authSlice'
import { FC } from 'react'

interface IProfileNav {
  text: string
}
const ProfileNav: FC<IProfileNav> =  ({ text }) => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const onClick = async () => {
    await dispatch(logout())
    history.replace({ pathname: '/login' })
  }

  return (
    <div className={styles.navmenu}>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>
          <NavLink to={'/profile'} exact className={styles.link} activeClassName={styles.active}>
            Профиль
          </NavLink>
        </li>
        <li className={styles.menu_item}>
          <NavLink to={{ pathname: `/profile/orders` }} exact className={styles.link} activeClassName={styles.active}>
            История заказов
          </NavLink>
        </li>
        <li className={styles.menu_item}>
          <NavLink to={{ pathname: '/login' }} exact className={styles.link} activeClassName={styles.active} onClick={onClick}>
            Выход
          </NavLink>
        </li>
      </ul>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default ProfileNav