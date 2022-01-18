import cardStyles from './card.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { TIngredient } from '../../types/types';
import {FC} from 'react';
import {  useAppSelector } from '../../services/hooks';

interface ICard {
    item: TIngredient;
    onClick: (item: TIngredient) => void

}

const Card: FC<ICard> = ({ item, onClick }) => {
    const { counts } = useAppSelector(store => store.cart)

    //Реализация возможности перетаскивания ингредиента
    
    const [, dragRef] = useDrag({
        type: "ingredients",
        item: {item},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })

    return (
        <article className={cardStyles.item} key={item._id} onClick={() => onClick(item)} ref={dragRef}>
              {counts[item._id] > 0 && <Counter count={item.type === 'bun' ? counts[item._id] + 1 : counts[item._id]} />}
            <picture className={cardStyles.picture}>
                <source media="(max-width: 767px)" srcSet={item.image_mobile} />
                <source media="(min-width: 768px)" srcSet={item.image_large} />
                <img className={cardStyles.image} src={item.image} alt={item.name} />
            </picture>
            <span className={cardStyles.price}>{item.price}&nbsp;<CurrencyIcon type="primary" /></span>
            <p className={cardStyles.text}>{item.name}</p>
        </article>
    )
}

export default Card;

