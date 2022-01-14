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
      if (!state.counts[item._id]) {
        state.counts[item._id] = 1;
      } else {
        state.counts[item._id]++;
      }

      // сортируем
      if (item.type === 'bun') {
        const bunId = state.sortedCart.bun?._id;
        state.counts[bunId] && state.counts[bunId]--
        state.sortedCart.bun = item;
      } else {
        const newFillers = [...state.sortedCart.fillers, {item, constructorId: Date.now().toString(36) + Math.random().toString(36).substr(2)}]
        state.sortedCart.fillers = newFillers;
      }
      // добавляем данные для заказа
      state.itemsToOrder = state.sortedCart.bun._id ? state.sortedCart.fillers.map(el => el.item._id).concat([state.sortedCart.bun._id]) : state.sortedCart.fillers.map(el => el.item._id)
    },
    deleteIngredient: (state, action) => {
      const { id, itemIndex } = action.payload;
      const newFillers = [...state.sortedCart.fillers];
      newFillers.splice(itemIndex, 1);
      state.counts[id]--;
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
