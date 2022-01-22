import styles from './burger-constructor.module.css';
import IngredientsList from '../ingredient-list/ingredient-list';
import Order from '../order/order';
import Bun from '../bun/bun';
import { useAppDispatch } from '../../services/hooks';
import { useDrop } from "react-dnd";
import { addIngredient } from '../../services/cartSlice';
import { FC } from 'react';

const BurgerConstructor: FC = () => {
    const dispatch = useAppDispatch()
  
    const [{ isHover }, dropRef] = useDrop({
      accept: 'ingredients',
      collect: (monitor) => ({
        isHover: monitor.isOver(),
      }),
      drop(item) {
        dispatch(addIngredient(item))
      },
    })
  
    const border = isHover ? '2px dashed green' : 'none'
  
    return (
      <section className={styles.container} ref={dropRef} style={{ border }}>
        <Bun position='top' />
        <div className={styles.scroller}>
          <IngredientsList />
        </div>
        <Bun position='bottom' />
        <Order />
      </section>
    )
  }
  export default BurgerConstructor