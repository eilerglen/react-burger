import styles from '../register/register.module.css'
import React, {FormEvent} from 'react'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/hooks'
import { forgotPassword } from '../../services/passwordSlice'
import { FC } from 'react'
import { TLocationState } from '../../types/types';



const ForgotPassword: FC = () => {
    const [email, setEmail] = React.useState<string>("");
    const dispatch = useAppDispatch();
    const location = useLocation<TLocationState>();
    const { isAuthorized } = useAppSelector(store => store.auth)
    const { isLoading, isEmailSuccess } = useAppSelector(store => store.password)
   
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(forgotPassword(email))
        setEmail("");
    }
    if (isAuthorized) {
        console.log('location state ', location.state)
        const { from } = location.state || { from: { pathname: '/' } }
        return (
            <Redirect to={from} />
        )
    }

    if (!isLoading && isEmailSuccess ) {
        return (
            <Redirect to={{ pathname: '/reset-password' 
        }} />)
    }
    
    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h1 className = "text text_type_main-medium mb-6">Восстановление пароля</h1>
                <Input
                    type="email"
                    placeholder="Укажите e-mail"
                    name="email"
                    value={email}
                    onChange={onChange}
                />

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

export default ForgotPassword;