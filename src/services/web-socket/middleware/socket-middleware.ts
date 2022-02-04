import wsActions from "../wsActions";
import { refreshExpiredTokenApi } from "../../api";
import { setCookie } from "../../../utils/cookie";
import {Dispatch, AnyAction, MiddlewareAPI} from 'redux'

const socketMiddleware = () => {
  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null = null
    let socketName: string = ''

    return (next: Dispatch<AnyAction>) => (action: AnyAction) => {
      const {dispatch} = store
      const {type, payload} = action
      if(type === wsActions.connect.wsConnectionInit.toString()) {
        socketName = payload
        
      }

      if(type === wsActions.connect.wsConnectionClose.toString()) {
       
      }
      
    }
  }
}