import compositionListStyles from './composition-list.module.css';
import CompositionItem  from '../composition-item/composition-item'
import PropTypes from 'prop-types';


const CompositionList = () => {
    const { calories, proteins, fat, carbohydrates } = useSelector(store => store.ingredients.ingredientToShow)
    return (
        <ul className={compositionListStyles.composition}>
            <CompositionItem title='Калории,ккал' value={calories} />
            <CompositionItem title='Белки, г' value={proteins} />
            <CompositionItem title='Жиры, г' value={fat} />
            <CompositionItem title='Углеводы, г' value={carbohydrates} />
        </ul>
    )
}
export default CompositionList;
