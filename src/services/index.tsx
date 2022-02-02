import cartReducer from './cartSlice'
import ingredientsReducer from './ingredientsSlice'
import orderReducer from './orderSlice'
import ingredientDetailsReducer from './ingredientDetailsSlice'
import authReducer from './authSlice'
import passwordReducer from './passwordSlice'
import feedReducer from './feedSlice'

const rootReducer = {
  ingredients: ingredientsReducer,
  cart: cartReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  auth: authReducer,
  password: passwordReducer,
  feed: feedReducer,
}

export default rootReducer