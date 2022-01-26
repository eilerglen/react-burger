import React from 'react';
import styles from './reset-password.module.css';
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from 'react-router-dom';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { resetPassword } from '../../services/passwordSlice';
import { useEffect } from 'react';


const ResetPassword = () => {
  const [form, setForm] = React.useState({ password: '', token: '' });
  const [isVisible, setVisible] = React.useState(false)
  const [error, setError] = React.useState(false);
  const dispatch = useAppDispatch();
  const { success, isLoading, hasError, errorMessage } = useAppSelector(store => store.password)

  useEffect(() => {
      setError(hasError)
  }, [hasError])

  const onChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
      setError(false)
  };
  const onSubmit = (e) => {
      e.preventDefault();
      dispatch(resetPassword(form))
      setForm({ password: '', token: '' })
  }

  if (success) {
      localStorage.removeItem('emailConfirmationSended')
      return (<Redirect to={{ pathname: '/login' }} />)
  }
  return (
      <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={onSubmit}>
              <h1 className={styles.heading}>Восстановление пароля</h1>

              <Input
                  type={isVisible ? 'text' : "password"}
                  placeholder="Введите новый пароль"
                  name="password"
                  icon={isVisible ? 'ShowIcon' : 'HideIcon'}
                  value={form.password}
                  onChange={onChange}
                  onIconClick={() => setVisible(!isVisible)}
                  error={error}
                  success={success}
              />
              <Input
                  type="text"
                  placeholder="Введите код из письма"
                  name="token"
                  value={form.token}
                  onChange={onChange}
                  error={error}
                  success={success}
              />
              {error && <span className={styles.error}>{errorMessage}</span>}
              <span className={styles.button}>
                  <Button>Восстановить</Button>
              </span>
          </form>
          <p className={styles.text}>
              Вспомнили пароль?&nbsp;
              <Link className={styles.link} to={'/login'}>
                  Войти
              </Link>
          </p>
      </div>

  );
}

export default ResetPassword;