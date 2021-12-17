import Ingredient from "../ingredient/ingredient";
import ingredientsListStyles from './ingredient-list.module.css';
import { useSelector } from 'react-redux';

const IngredientsList = () => {
    const { fillers } = useSelector(store => store.cart.sortedCart);
    return (
        <ul className={ingredientsListStyles.main_container}>
               {fillers && fillers.map((elem, index) =>
                <Ingredient
                    key={elem.constructorId || elem.item._id}
                    item={elem.item}
                    id={elem.item._id}
                    type={elem.item.type}
                    index={index}
                />
                )
            }
        </ul>
    );
}

export default IngredientsList;
