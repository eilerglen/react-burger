import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import rootReducer from './index'
import { ActionCreator, AnyAction, configureStore, Dispatch } from '@reduxjs/toolkit'
import { socketMiddleware } from '../services/web-socket/middleware/socket-middleware'
import { WS_URL, WS_URL_AUTH } from '../utils/config'
import { wsActions } from '../services/feedSlice'
import { wsActionsAuth } from '../services/userFeedSlice'


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = Dispatch<AnyAction> & ThunkDispatch<RootState, null, AnyAction>
export type AppThunk<ReturnType = void | Promise<Response>> = ActionCreator<ThunkAction<ReturnType, RootState, unknown, AnyAction>>
export const history = createBrowserHistory()

export const store = configureStore({
  reducer: {
    ...rootReducer,
    router: connectRouter(history),
  },
  middleware: [
    thunk,
    routerMiddleware(history),
    socketMiddleware(WS_URL, wsActions, false),
    socketMiddleware(WS_URL_AUTH, wsActionsAuth, true),
  ],
})