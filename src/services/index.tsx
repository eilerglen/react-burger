import cartReducer from './cartSlice'
import ingredientsReducer from './ingredientsSlice'
import orderReducer from './orderSlice'
import ingredientDetailsReducer from './ingredientDetailsSlice'

const rootReducer = {
  ingredients: ingredientsReducer,
  cart: cartReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
}

export default rootReducer