import {BASEURL} from '../utils/utils'
import {
  getCookie,
  setCookie} from '../utils/cookie'
import { TUser } from '../types/types'

const checkResponse = (res: Response)=> {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))

}


// Получить юзверя
export const getUserApi = async () => {
    const response = await fetch(`${BASEURL}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: getCookie('token'),
      },
    })
    return await checkResponse(response)
}

// Регистрация
export const registerRequestApi = async (form: TUser) => {
  try {
    const response = await fetch(`${BASEURL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    const res = await checkResponse(response)
    return res
  } catch (error: any) {
    console.log('Catched error ' + error.message)
    return Promise.reject(error.message)
  }
}
// Получить токен
type TAllowableArgs = 
 | string
 | string[]
 | TUser

export const refreshExpiredTokenApi = async (func?: Function, args?: TAllowableArgs ) => {
  const refreshToken = localStorage.getItem('token');
  try {
    const response = await fetch(`${BASEURL}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: refreshToken,
      }),
    })
    const res = await checkResponse(response)
    if (res && res.success) {
      if (res.refreshToken !== refreshToken) {
        setCookie('token', res.accessToken, {path: '/'})
        localStorage.setItem('token', res.refreshToken)
        console.log('refresh success!')
        if (func) {
          return await func(args)
        }
      }
      return res;
    } 
    throw new Error(res.message)
  } catch (error: any) {
    console.log('Refresh error: ' + error.message)
  }
}
// Залогиниться

export const loginRequestApi = async (form: TUser) => {
  try {
    const response = await fetch(`${BASEURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    return await checkResponse(response)
  } catch (error: any) {
    console.log(error.message)
    return Promise.reject()
  }
}
// Разлогинится
export const logoutRequestApi = async () => {
  try {
    const response = await fetch(`${BASEURL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      }),
    })
    return await checkResponse(response)
  } catch (error: any) {
    return Promise.reject(error.message)
  }
}
// Забыли пароль?

export const forgotPasswordApi = async (email: string) => {
  try {
    let response = await fetch(`${BASEURL}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
    const res = await checkResponse(response)
    if (res && res.success) {
      return res
    } else {
      return Promise.reject(res.message)
    }
  } catch (error: any) {
    console.log('Catched error ' + error.message)
    return Promise.reject(error.message)
  }
}


// Сбросить пароль

export const resetPasswordApi = async ({ password, token }: TUser) => {
  try {
    let response = await fetch(`${BASEURL}/password-reset/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        token,
      }),
    })
    const res = await checkResponse(response)
    if (res && res.success) {
      return res
    } else {
      return Promise.reject(res.message)
    }
  } catch (error: any) {
    console.log('Catched error ' + error.message)
    return Promise.reject(error.message)
  }
}

// Обновить данные пользователя
export const updateUserApi = async({name, email, password}: TUser) => {
  try {
    const response = await fetch(`${BASEURL}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: getCookie('token'),
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
    const res = await checkResponse(response)
    return res
  } catch (error: any) {
    console.log('Update user failed: ', error)
    return Promise.reject(error.message)
  }
}