import { createSlice } from '@reduxjs/toolkit';
import { TIngredient, TFiller } from '../types/types';

interface IinitialState {
  sortedCart: {
    bun: TIngredient | null,
    fillers: Array<TFiller>,
  },
  counts: {},
}

export const initialState: IinitialState = {
  sortedCart: {
    bun: null,
    fillers: [],
  },
  counts: {},
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addIngredient: (state, action) => {
      const {item} = action.payload;
      // управляем счетчиком ингридиентов
      
      // сортируем
      if (item.type === 'bun') {
        state.sortedCart.bun = item;
      } else {
        const newFillers = [...state.sortedCart.fillers, {item, constructorId: Date.now().toString(36) + Math.random().toString(36).substr(2)}]
        state.sortedCart.fillers = newFillers;
      }
      // добавляем данные для заказа
     
    },
    deleteIngredient: (state, action) => {
      const { id, itemIndex } = action.payload;
      const newFillers = [...state.sortedCart.fillers];
      newFillers.splice(itemIndex, 1);

      state.sortedCart.fillers = newFillers;
      // обновляем данные для заказа
    },
    resetCart: (state) => state = initialState,
    moveIngredient: (state, action) => {

      const { dragIndex, dropIndex } = action.payload;
      [state.sortedCart.fillers[dragIndex], state.sortedCart.fillers[dropIndex]] = [state.sortedCart.fillers[dropIndex], state.sortedCart.fillers[dragIndex]];

    },
    
  },
})

export const { addIngredient, deleteIngredient, resetCart, moveIngredient  } = cartSlice.actions;

export default cartSlice.reducer;
