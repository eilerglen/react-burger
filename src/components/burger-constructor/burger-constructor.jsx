import constructorStyles from './burger-constructor.module.css';
import IngredientsList from '../ingredient-list/ingredient-list';
import Order from '../order/order';
import Bun from '../bun/bun';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from "react-dnd";
import { addIngredient } from '../../services/cartSlice';

export default function BurgerConstructor() {
    const { bun } = useSelector(store => store.cart.sortedCart);

    const dispatch = useDispatch();
    const [{ isHover }, dropRef] = useDrop({
        accept: "ingredients",
        collect: (monitor) => ({
            isHover: monitor.isOver(),
        }),
        drop(item) {
            dispatch(addIngredient(item));
        },
    });

    const border = isHover ? '2px dashed green' : 'none';

    return (

        <section className={constructorStyles.constructor} ref={dropRef} style={{ border }} >
            <Bun position="top" data={bun} />
            <div className={constructorStyles.scroller}>
                <IngredientsList />
            </div>
            <Bun position="bottom" data={bun} />
            <Order />
        </section >


    );

}