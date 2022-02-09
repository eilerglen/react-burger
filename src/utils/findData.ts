import { TIngredientList } from "../types/types";

type TfindData = (ids: string[], ingredients: TIngredientList) => TIngredientList

export const findData: TfindData = (ids, ingredients) => {
  let arr =  []
  for (let index = 0; index < ids.length; index++) {
    const element = ids[index]
    const ingr = ingredients.find((item) => item._id === element)
    if(ingr) arr.push(ingr)
  }
  return arr
}