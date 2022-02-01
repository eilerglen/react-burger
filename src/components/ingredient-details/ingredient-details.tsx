import detailsModalStyles from './ingredient-details.module.css';
import NutritionList from '../nutrition-list/nutrition-list';
import { useAppSelector, useAppParams } from '../../services/hooks';
import LoaderSpinner from '../loader/loader';

const IngredientDetails = () => {
    const { id } = useAppParams();
    const { ingredients, isLoading, hasError } = useAppSelector(store => store.ingredients);
    const {ingredientShow} = useAppSelector(store => store.ingredientDetails);
    
    let activeIngredient;
    if (id) {
        activeIngredient = ingredients.find(item => item._id === id)
    } else {
        activeIngredient = ingredientShow
    }
    return (
        <>
            {!isLoading && !hasError && ingredients.length !== 0 ? (
                        <div className={detailsModalStyles.detail}>
                        <picture className={detailsModalStyles.picture}>
                            <source media="(max-width: 768px)" srcSet={activeIngredient?.image_mobile} />
                            <source media="(min-width: 1024px)" srcSet={activeIngredient?.image_large} />
                            <img src={activeIngredient?.image} alt={activeIngredient?.name} className={detailsModalStyles.image} />
                        </picture>
                        <h3 className={detailsModalStyles.title}>{activeIngredient?.name}</h3>
                        <NutritionList {...activeIngredient} />
                    </div>
            ) : (<LoaderSpinner />)
            }
        </>

    )
}
export default IngredientDetails;