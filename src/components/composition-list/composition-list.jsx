import compositionListStyles from './composition-list.module.css';
import CompositionItem  from '../composition-item/composition-item'
import PropTypes from 'prop-types';


const CompositionList = ({ calories, proteins, fat, carbohydrates }) => {

    return (
        <ul className={compositionListStyles.nutrition}>
            <CompositionItem title='Калории,ккал' value={calories} />
            <CompositionItem title='Белки, г' value={proteins} />
            <CompositionItem title='Жиры, г' value={fat} />
            <CompositionItem title='Углеводы, г' value={carbohydrates} />
        </ul>
    )
}
export default CompositionList;

CompositionList.propTypes = {
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
}