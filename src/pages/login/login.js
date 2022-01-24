import React , {FC} from 'react'
import styles from './login.module.css'
import {Button, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link, Redirect, useLocation} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/hooks'
import CustomInput from '../../components/input/input'
import {login} from '../../services/loginSlice'

const LoginPage = () => {
  const [form, setForm] = React.useState({email: '', password: ''})
  const {isAuthorized} = useAppSelector(store => store.login)
  const location = useLocation()

  const dispatch = useAppDispatch()
  const onChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if(form.email && form.password) {
      dispatch(login(form))
      setForm({email: '', password: ''})
    }
  }
  if(isAuthorized) {
    return <Redirect to = {location.state.from || '/'}/>
  }

  return (
    <div className = {styles.wrapper}>
      <form className={styles.form} onSubmit = {onSubmit}>
        <h1 className={styles.heading}>Вход</h1>
        <CustomInput
        disabled = {false}
        name = 'email'
        type = 'email'
        value = {form.email}
        placeholder = 'E-mail'
        onChange={onChange}
        />
        <PasswordInput name = 'password' value = {form.password} onChange = {onChange} />
        <span className={styles.link}>
          <Button>Войти</Button>  
        </span>
      </form>
      <p className={styles.text}>
        Вы - новый пользователь?&nbsp;
        <Link className = {styles.link} to = {'/forgot-password'}>
          Восстановить пароль
        </Link>
      </p>
    </div>
  )
}

export default LoginPage