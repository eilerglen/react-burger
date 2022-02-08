import { getCookie } from '../../../utils/cookie'
import { ISocketActions } from '../../feedSlice'
import { AnyAction, MiddlewareAPI } from '@reduxjs/toolkit'

export const socketMiddleware = (wsUrl: string, wsActions: ISocketActions, auth: boolean) => {
  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null = null
    let connected = false

    return (next: (i: AnyAction) => void) => (action: AnyAction) => {
      const { dispatch } = store
      const { type, payload } = action
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions
      const token = auth ? getCookie('token') : null
      if (type === wsInit.toString()) {
        socket = token 
        ? new WebSocket(`${wsUrl}?token=${token}`) 
        : new WebSocket(`${wsUrl}`)
      }
      if (socket) {
        connected = true;
        socket.onopen = () => {
          dispatch(onOpen())
        }
        socket.onerror = () => {
          dispatch(onError('Error'))
        }
        socket.onmessage = event => {
          const { data } = event
          const parsedData = JSON.parse(data)
          const { success, ...restParsedData } = parsedData
          dispatch(onMessage(restParsedData))
        }
        
        socket.onclose = (event) => {
          dispatch({type: onClose, payload: event})
          console.log('socket closed with code: ', event.code)
          if(!connected) {
            setTimeout(() => {dispatch({type: wsInit})}, 1000)
          }
        }

        if (type === wsSendMessage.toString()) {
          const message = token ? { ...payload, token } : { ...payload }
          socket.send(JSON.stringify(message))
        }
      }

      next(action)
    }
  }
}