import { ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import bunStyles from './bun.module.css'
import PropTypes from 'prop-types';

const Bun = ({ingredients, position}) => {
    const positionText = position === 'top' ? '(верх)' : '(низ)';
    return ( 
        <div className={bunStyles.bun}>
            {ingredients &&
            <ConstructorElement
                type={position}
                isLocked={true}
                text={`${ingredients.name} ${positionText}`}
                price={ingredients.price}
                thumbnail={ingredients.image}
            />
            }
        </div>
     );
}
 
export default Bun;

Bun.propTypes = {
    ingredients: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }),
    position: PropTypes.string.isRequired,
}