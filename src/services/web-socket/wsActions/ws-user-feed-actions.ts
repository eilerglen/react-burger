import { 
	wsConnectionSuccess, 
	wsConnectionError, 
	wsConnectionClosed, 
	wsGetMessage } from '../../userFeedSlice'

  const wsUserFeedActions = {
    onOpen: wsConnectionSuccess,
    onError: wsConnectionError,
    onClose: wsConnectionClosed,
    onMessage: wsGetMessage,
  }
  
  export default wsUserFeedActions