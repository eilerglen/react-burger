import Ingredient from "../ingredient/ingredient";
import { FC } from "react";
import { useAppSelector } from '../../services/hooks';
import ingredientsListStyles from './ingredient-list.module.css'

const IngredientsList: FC = () => {
    const { fillers } =  useAppSelector(store => store.cart.sortedCart);
    return (
        <ul className={ingredientsListStyles.main_container}>
               {fillers && fillers.map((elem, index) =>
                <Ingredient
                    key={elem.constructorId || elem.item._id}
                    item={elem.item}
                    index={index}
                />
                )
            }
        </ul>
    );
}

export default IngredientsList;
