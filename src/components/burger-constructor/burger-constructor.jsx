import constructorStyles from './burger-constructor.module.css';
import IngredientsList from '../ingredient-list/ingredient-list';
import Order from '../order/order';
import Bun from '../bun/bun';
import PropTypes from 'prop-types';


export default function BurgerConstructor({ ingredients }) {
    const total = ingredients.reduce((acc, p) => acc + p.price, 0);
    const bun =ingredients.find(item => item.type === 'bun');

    return (
        <section className={constructorStyles.constructor}>
            <Bun position="top"ingredients={bun} />
            <div className={constructorStyles.scroller}>
                <IngredientsList ingredients={ingredients.filter(item => item.type !== 'bun')} />
            </div>
            <Bun position="bottom" ingredients={bun} />
            <Order total={total} />
        </section>
    );

}
BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }).isRequired).isRequired,
}

