import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components"
import {Link} from 'react-router-dom'
import React, { FC, FormEvent, useState } from 'react';
import styles from './register.module.css';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { register } from '../../services/loginSlice';
import { useLocation, Redirect, useHistory } from 'react-router-dom';
import { TLocationState } from '../../types/types';

const RegisterPage = () => {
  const [isAuthorised, isLoading, hasError] = useAppSelector(store => store.login)
  console.log(isAuthorised, isLoading)
  const location = useLocation()
  const history = useHistory()
  const [isVisible, setVisible] = React.useState(false)
  const [form, setForm] = React.useState({ name: '', email: '', password: '' });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    let res = await dispatch(register(form))
    console.log(res)
    if (!isLoading && !hasError) {
        setForm({ name: '', email: '', password: '' })
        return history.replace('/login');
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    let res = await dispatch(register(form))
    console.log(res)
    if (!isLoading && !hasError) {
        setForm({ name: '', email: '', password: '' })
        return history.replace('/login');
    }
}

}
export default RegisterPage