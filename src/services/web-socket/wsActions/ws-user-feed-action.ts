import {
  wsConnectionSuccess, 
  wsConnectionClosed, 
  wsGetMessage, 
  wsConnectionError
} from '../../feedSlice'

const wsUserFeedActions = {
  onOpen: wsConnectionSuccess,
  onError: wsConnectionError,
  onClose: wsConnectionClosed,
  onMessage: wsGetMessage
}

export default wsUserFeedActions