import cartReducer from './cartSlice'
import ingredientsReducer from './ingredientsSlice'
import orderReducer from './orderSlice'
import ingredientDetailsReducer from './ingredientDetailsSlice'
import authReducer from './authSlice'
import passwordReducer from './passwordSlice'
import feedReducer from './feedSlice'
import userFeedReducer from './userFeedSlice'

const rootReducer = {
  ingredients: ingredientsReducer,
  cart: cartReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  auth: authReducer,
  password: passwordReducer,
  feed: feedReducer,
  userFeed: userFeedReducer,
}

export default rootReducer