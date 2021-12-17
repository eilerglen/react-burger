import { ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import bunStyles from './bun.module.css'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Bun = ({ position }) => {
    const { bun } = useSelector(store => store.cart.sortedCart);
    const isEmpty = !bun._id
    const positionText = position === 'top' ? '(верх)' : '(низ)';

    return ( 
         <div className={isEmpty ? bunStyles.bun_empty : bunStyles.bun}>
            {!isEmpty 
                ? <ConstructorElement
                    type={position}
                    isLocked={true}
                    text={`${bun.name} ${positionText}`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
                :
                <ConstructorElement
                    type={position}
                    text={"Место для аппетитной булки"}
                />

            }
        </div>
     );
}
Bun.propTypes = {
    position: PropTypes.string.isRequired,
} 
export default Bun;
