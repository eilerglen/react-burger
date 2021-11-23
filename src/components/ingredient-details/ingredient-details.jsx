import detailsModalStyles from './ingredient-details.module.css';
import CompositionList from '../composition-list/composition-list';
import { IngredientPropTypes } from '../../utils/utils';

function IngredientDetails({ ingredientToShow }) {
    return (
        <div className={detailsModalStyles.detail}>
            <picture className={detailsModalStyles.picture}>
                <source media="(max-width: 768px)" srcSet={ingredientToShow.image_mobile} />
                <source media="(min-width: 1024px)" srcSet={ingredientToShow.image_large} />
                <img src={ingredientToShow.image} alt={ingredientToShow.name} className={detailsModalStyles.image} />
            </picture>
            <h3 className={detailsModalStyles.title}>{ingredientToShow.name}</h3>
            <CompositionList {...ingredientToShow} />
        </div>
    )

}
export default IngredientDetails;

IngredientDetails.propTypes = {
    ingredientToShow: IngredientPropTypes
}

