import compositionStyles from './composition-item.module.css'
import PropTypes from 'prop-types';
import {FC} from 'react'

interface INutrition {
    title: string;
    value: number;
}
const CompositionItem: FC<INutrition> = ({ title, value }) => {
    return (
        <li className={compositionStyles.nutrition_item}>
            <p className={compositionStyles.text}>{title}</p>
            <p className={compositionStyles.value}>{value}</p>
        </li>
    )
}

export default CompositionItem ;

CompositionItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}