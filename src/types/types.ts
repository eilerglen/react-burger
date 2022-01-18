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
  __v: number;
}

export type TFiller = TIngredient & {constructorId: string;}

// **тип заказа**
export type TOrder = {
  ingredients: Array<string>;
  number: number;
  _id: string;
  name: string;
  price: number;
}

export type TIngredientList = Array<TIngredient>
export type TConstructorIngredient = TIngredient & {
  constructorId: string
}



