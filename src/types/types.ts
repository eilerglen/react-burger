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

export type TFiller = {
  item: TIngredient;
  constructorId: string;
}