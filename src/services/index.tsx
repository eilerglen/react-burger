import cartReducer from './cartSlice'
import ingredientsReducer from './ingredientsSlice'
import orderReducer from './orderSlice'
import ingredientDetailsReducer from './ingredientDetailsSlice'
import authReducer from './authSlice'
import passwordReducer from './passwordSlice'

const rootReducer = {
  ingredients: ingredientsReducer,
  cart: cartReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  auth: authReducer,
  password: passwordReducer,
}

export default rootReducer