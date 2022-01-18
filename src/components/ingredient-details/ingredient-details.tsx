import detailsModalStyles from './ingredient-details.module.css';
import CompositionList from '../composition-list/composition-list';
import { useAppSelector } from '../../services/hooks';

const IngredientDetails: FC = () =>{
    const ingredientToShow = useAppSelector(store => store.ingredientDetailsView.ingredientDetailsView)
    return (
        <div className={detailsModalStyles.detail}>
            <picture className={detailsModalStyles.picture}>
                <source media="(max-width: 768px)" srcSet={ingredientToShow.image_mobile} />
                <source media="(min-width: 1024px)" srcSet={ingredientToShow.image_large} />
                <img src={ingredientToShow.image} alt={ingredientToShow.name} className={detailsModalStyles.image} />
            </picture>
            <h3 className={detailsModalStyles.title}>{ingredientToShow.name}</h3>
            <CompositionList />
        </div>
    )

}
export default IngredientDetails;

