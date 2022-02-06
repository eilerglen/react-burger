import { 
  wsConnectionSuccess,
   wsConnectionError, 
   wsConnectionClosed, 
   wsGetMessage } from '../../feedSlice'

   const wsFeedActions = {
    onOpen: wsConnectionSuccess,
    onError: wsConnectionError,
    onClose: wsConnectionClosed,
    onMessage: wsGetMessage,
  }
  
  export default wsFeedActions