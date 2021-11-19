
import Ingridient from "../ingridient/ingridient";
import ingridientsListStyles from './ingridient-list.module.css';
import PropTypes from 'prop-types';

const IngridientsList = ({ data, type }) => {
    return (
        <ul className={ingridientsListStyles.main_container}>
            {data.map((item) => (
                <li className={ingridientsListStyles.list_item} key={item._id}>
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

export default IngridientsList;

IngridientsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
    }).isRequired).isRequired
}