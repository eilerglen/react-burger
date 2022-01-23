import detailsModalStyles from './ingredient-details.module.css';
import NutritionList from '../nutrition-list/nutrition-list';
import { useAppSelector } from '../../services/hooks';
import Spinner from '../spinner/spinner'
import {FC} from 'react'

const IngredientDetails: FC = () => {
    const  { ingredientShow } = useAppSelector(store => store.ingredientDetails)
    const { isLoading, hasError} = useAppSelector(store => store.ingredients)

    return (
        <>
            {!isLoading && !hasError && ingredientShow !== null ? (
            <div className={detailsModalStyles.detail}>
            <picture className={detailsModalStyles.picture}>
                <source media="(max-width: 768px)" srcSet={ingredientShow.image_mobile} />
                <source media="(min-width: 1024px)" srcSet={ingredientShow.image_large} />
                <img src={ingredientShow.image} alt={ingredientShow.name} className={detailsModalStyles.image} />
            </picture>
            <h3 className={detailsModalStyles.title}>{ingredientShow.name}</h3>
            <NutritionList {...ingredientShow} />
            </div>
            ) : (<Spinner />)
            }
        </>
        )
    }
export default IngredientDetails;


