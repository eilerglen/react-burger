import PropTypes from 'prop-types'
import { IngredientPropTypes } from '../../utils/utils';
import cardStyles from './card.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from 'react-redux';
import { useDrag } from "react-dnd";

const Card = ({ item, onClick }) => {
    const { counts } = useSelector(store => store.cart)
    const [, dragRef] = useDrag({
        type: "ingredients",
        item: {item},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })

    return (
        <article className={cardStyles.item} key={item._id} onClick={() => onClick(item)} ref={dragRef}>
            {counts[item._id] > 0 && <Counter count={counts[item._id]} />}
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

Card.propTypes = {
    item: IngredientPropTypes,
    onClick: PropTypes.func.isRequired

}

