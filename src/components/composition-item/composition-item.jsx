import compositionStyles from './composition-item.module.css'
import PropTypes from 'prop-types';

const CompositionItem = ({ title, value }) => {
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