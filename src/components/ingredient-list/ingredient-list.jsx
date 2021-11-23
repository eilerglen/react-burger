import Ingridient from "../ingredient/ingredient";
import ingredientsListStyles from './ingredient-list.module.css';
import PropTypes from 'prop-types';

const IngredientsList = ({ ingredients, type }) => {
    return (
        <ul className={ingredientsListStyles.main_container}>
            {ingredients.map((item) => (
                <li className={ingredientsListStyles.list_item} key={item._id}>
                    <Ingridient
                        item={item}
                        type={type}
                    />
                </li>
            ))
            }
        </ul>
    );
}

export default IngredientsList;

IngredientsList.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
    }).isRequired).isRequired
}