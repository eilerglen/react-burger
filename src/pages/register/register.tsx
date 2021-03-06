import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components"
import {Link} from 'react-router-dom'
import React, { FC, FormEvent, useState } from 'react';
import styles from './register.module.css';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { register } from '../../services/authSlice';
import { useLocation, Redirect, useHistory } from 'react-router-dom';
import { TLocationState } from '../../types/types';
import LoaderSpinner from "../../components/loader/loader";

type TForm = {
    name: string;
    email: string;
    password: string;
}

const RegisterPage: FC = () => {
    const { isAuthorized, isLoading, hasError } = useAppSelector(store => store.auth)
    const location = useLocation<TLocationState>();
    const history = useHistory()

    const [isVisible, setVisible] = React.useState<boolean>(false)
    const [form, setForm] = React.useState<TForm>({ name: '', email: '', password: '' });
    const dispatch = useAppDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        let res = await dispatch(register(form))
        console.log(res)
        if (!isLoading && !hasError) {
            setForm({ name: '', email: '', password: '' })
            return history.replace('/login');
        }
    }
    if (isAuthorized) {
        console.log('in name ', location.state)
        const { from } = location.state || { from: { pathname: '/' } }
        return (
            <Redirect to={from} />
        )
    }
    return (
        <>
        {isLoading && <LoaderSpinner/>}
        {!isLoading && (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h1 className = "text text_type_main-medium mb-6">Регистрация</h1>
                <Input
                    type="text"
                    placeholder="Имя"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                />

                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                />

                <Input
                    type={isVisible ? 'text' : "password"}
                    placeholder="Пароль"
                    name="password"
                    icon={isVisible ? 'ShowIcon' : 'HideIcon'}
                    value={form.password}
                    onChange={onChange}
                    onIconClick={() => setVisible(!isVisible)}
                />

                <span className={styles.button}>
                    <Button>Зарегистрироваться</Button>
                </span>
            </form>
            <p className={styles.text}>
                Уже зарегистрированы?&nbsp;
                <Link className={styles.link} to={'/login'}>
                    Войти
                </Link>
            </p>
        </div>
        )}
    </>
    );
}

export default RegisterPage;
