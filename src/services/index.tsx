import cartReducer from './cartSlice'
import ingredientsReducer from './ingredientsSlice'
import orderReducer from './orderSlice'
import ingredientDetailsViewReducer from './ingredientDetailsViewSlice'

const rootReducer = {
  ingredients: ingredientsReducer,
  cart: cartReducer,
  order: orderReducer,
  ingredientDetailsView: ingredientDetailsViewReducer,
}

export default rootReducer