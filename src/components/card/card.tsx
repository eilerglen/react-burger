import cardStyles from './card.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { TIngredient } from '../../types/types';
import {FC} from 'react';
import {  useAppSelector } from '../../services/hooks';
import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom';

interface ICard {
    item: TIngredient;
    onClick: (item: TIngredient) => void
}
const Card: FC<ICard>= ({ item, onClick }) => {
    const { bun } = useAppSelector((store) => store.cart.sortedCart);
    const { fillers } = useAppSelector((store) => store.cart.sortedCart);
    const location = useLocation()
    
    const [, dragRef] = useDrag({
        type: "ingredients",
        item: { item },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })
    const count = useMemo(() => {
        if( item?.type === 'bun') {
          if(bun?._id && item?._id === bun._id) {
            return 2
          }
        }
        return fillers.reduce((acc, el) => el.item._id === item._id ? acc + 1 : acc, 0)
      },[bun, fillers, item])
    
      return (
          <Link className={cardStyles.item} to={{
              pathname: `/ingredients/${item._id}`,
              state: {from: location.pathname, pushLocation: location}
          }}>
        <article className={cardStyles.item} key={item._id} onClick={() => onClick(item)} ref={dragRef}>
            {count > 0 && <Counter count={count} size={'default'}/>}
            <picture className={cardStyles.picture}>
                <source media="(max-width: 767px)" srcSet={item.image_mobile} />
                <source media="(min-width: 768px)" srcSet={item.image_large} />
                <img className={cardStyles.image} src={item.image} alt={item.name} />
            </picture>
            <span className={cardStyles.price}>{item.price}&nbsp;<CurrencyIcon type="primary" /></span>
            <p className={cardStyles.text}>{item.name}</p>
        </article>
        </Link>
    )
}
export default Card;