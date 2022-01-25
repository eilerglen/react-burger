import { useAppSelector } from "../../services/hooks";
import { useLocation, Redirect } from "react-router-dom";
import styles from './profile.module.css'
import ProfileNav from "../../components/profile-nav/profile-nav";

const Profile = () => {
  const {isAuthorized} = useAppSelector((store) => store.auth)
  const location = useLocation()

  if(!isAuthorized) {
    const {from} = location.state || {from: {pathname: '/login' }}
    return <Redirect to = {from}/>
  }
  return (
    <section className={styles.wrapper}>
      <ProfileNav text='В этом разделе вы можете изменить свои персональные данные'/>

    </section>
  )
}
export default Profile