import CustomInput from "../input/input"
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import React from "react"
import styles from './profile-form.module.css'
import { useAppDispatch, useAppSelector } from "../../services/hooks"
import { updateUser } from '../../services/authSlice';
import { FC } from 'react'

const ProfileForm: FC = () => {
  const { name, email } = useAppSelector(store => store.auth.user)
  const [form, setForm] = React.useState({ name: name, email: email, password: '' })
  const [isEdited, setEdited] = React.useState(false)
  const onChange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
      if (!isEdited) { setEdited(true) }
  };
  const dispatch = useAppDispatch();

  const onSubmit = (event) => {
      event.preventDefault()
      if (form.name && form.email) {
          dispatch(updateUser(form))
          setEdited(false)
      }
  }

  const onCancel = () => {
      setForm({
          name: name,
          email: email,
          password: ''
      }
      );
      setEdited(false);
  }

  return (
      <form className={styles.user_info} onSubmit={onSubmit}>
          <CustomInput icon={'EditIcon'} name="name" type="text" value={form.name} placeholder="Имя" onChange={onChange} />
          <CustomInput icon={'EditIcon'} name="email" type="email" value={form.email} placeholder="Логин" onChange={onChange} />
          <CustomInput icon={'EditIcon'} name="password" type="password" value={form.password} placeholder="Пароль" onChange={onChange} />
          {isEdited && (
              <span className={styles.button}>
                  <Button>Сохранить</Button>
                  <Button onClick={onCancel} size='medium' type='secondary'>Отмена</Button>
              </span>
          )}
      </form>
  );
}

export default ProfileForm;