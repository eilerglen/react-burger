import {BASEURL} from '../utils/utils'
import {
  getCookie,
  setCookie} from '../utils/cookie'


const checkResponse = (res)=> {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))

}

// Получить юзверя
export const getUserApi = async () => {
  try {
    const response = await fetch(`${BASEURL}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: getCookie('token'),
      },
    })
    return await checkResponse(response)
  } catch (err) {
    return await Promise.reject(err)
  }
}

export const refreshExpiredTokenApi = async (func, args = null) => {
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
  } catch (error) {
    console.log('Refresh error: ' + error.message)
  }
}

export const loginRequestApi = async (form) => {
  try {
    const response = await fetch(`${BASEURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    return await checkResponse(response)
  } catch (error) {
    console.log(error.message)
    return Promise.reject(error.message)
  }
}


export const forgotPasswordApi = async(email) => {
  try {
    let response = await fetch(`${BASEURL}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
    const res = await checkResponse(response)
    if(res && res.success) {
      return res
    } else {
      return Promise.reject(res.message)
    }
  }
  catch(error) {
    console.log('Catched error' + error.message)
    return Promise.reject(error.message)
  }
}

export const resetPasswordApi = async({password, token}) => {
  try {
    let response = await fetch(`${BASEURL}/password-reset/reset`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        password,
        token,
      }),
    })
    const res = await checkResponse(response)
    if(res && res.success) {
      return res
    } else {
      return Promise.reject(res.message)
    }
  }
  catch(error) {
    console.log('Catched error' + error.message)
    return Promise.reject(error.message)
  }
}
export const updateUserApi = async({name, email, password}) => {
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
  } catch (error) {
    console.log('Update user failed: ', error)
    return Promise.reject(error)
  }
}
export const registerRequestApi = async (form) => {
  try {
    const response = await fetch(`${BASEURL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    const res = await checkResponse(response)
    console.log(res)
    return res 
  } catch (error) {
    console.log('Catched error ' + error.message)
    return Promise.reject(error.message)
  }
}