import { 
  wsConnectionSuccess, 
  wsConnectionClosed, 
  wsGetMessage, 
  wsConnectionError } from "../../feedSlice";

const wsFeedActions = {
  onOpen: wsConnectionSuccess,
  onError: wsConnectionError,
  onClose: wsConnectionClosed,
  onMessage: wsGetMessage,
}

export default wsFeedActions