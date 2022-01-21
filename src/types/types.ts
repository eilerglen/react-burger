export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v?: number;

}

export type TIngredientList = Array<TIngredient>

export type TFiller = {
  item: TIngredient;
  constructorId: string;
}


// **тип заказа**
export type TOrder = {
  success: boolean;
  ingredients: Array<string>;
  number: number;
  _id: string;
  name: string;
}


export type TConstructorIngredient = TIngredient & {
  constructorId: string
}

export type TIcons =
    | 'CurrencyIcon'
    | 'BurgerIcon'
    | 'LockIcon'
    | 'DragIcon'
    | 'DeleteIcon'
    | 'ArrowUpIcon'
    | 'MenuIcon'
    | 'CloseIcon'
    | 'CheckMarkIcon'
    | 'ListIcon'
    | 'ProfileIcon'
    | 'EditIcon'
    | 'InfoIcon'
    | 'ShowIcon'
    | 'HideIcon'
    | 'LogoutIcon'

