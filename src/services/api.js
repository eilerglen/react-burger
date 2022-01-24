import {BASEURL} from '../utils/utils'
import {setCookie} from '../utils/cookie'

const checkResponse = (res)=> {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))

}

export const refreshExpiredTokenApi = async(func, args = null) => {
  const refreshToken = localStorage.getItem('token');
  try {
    const response = await fetch(`${BASEURL}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify({
        token: refreshToken
      }),
    })
    const res = await checkResponse(response)
    if (res && res.success) {
      if(res.refreshToken !== refreshToken) {
        setCookie('token', res.accessToken, {path:'/'})
        localStorage.setItem('token', res. refreshToken)
        console.log('refresh success')
        if(func) {
          return await func(args)
        }
      }
    }
  }
  catch (error) {
    console.log('Refresh error: ' + error.message)
  }
}

export const loginRequestApi = async(form) => {
  try {
    const response = await fetch(`${BASEURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-type':'application/json',

      },
      body: JSON.stringify(form),
     
    })
    return await checkResponse(response)
  }
  catch(error) {
    console.log(error.message)
    return Promise.reject(error.message)
  }
}

export const registerRequestApi = async(form) => {
try {
  let response = await fetch(`${BASEURL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-type':'application/json',

    },
    body: JSON.stringify(form),
  })
  const res = await checkResponse(response)
  return res

}
catch (error) {
  console.log('Catched error' + error.message)
  return Promise.reject(error.message)
}

}