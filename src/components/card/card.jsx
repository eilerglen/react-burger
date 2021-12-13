import React from 'react';
import cardStyles from './card.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientPropTypes } from '../../utils/utils';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { resetIngredientToShow } from 'services/ingredientsSlice';
import { useDrag } from "react-dnd";
import { closeDetailsModal, openDetailsModal } from 'services/modalSlice';

export const Card = ({ item }) => {
    const dispatch = useDispatch();
    const {isDetailsModalOpen} = useSelector(store =>store.modal)
    const {counts}  = useSelector(store => store.cart)

    const [isIngModalOpen, setIsIngModalOpen] = React.useState(false)
    const [ingredientToShow, setIngredientToShow] = React.useState({})

    const openIngModal = React.useCallback(
        (item) => {
            dispatch(setIngredientToShow(item))
            dispatch(openDetailsModal())
        },
        [dispatch]
    );

    const handleClose = (e) => {
        e.stopPropagation();
        dispatch(resetIngredientToShow())
        dispatch(closeDetailsModal())
    };

    const [, dragRef] = useDrag({
        type: "ingredients",
        item: {item},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })

    return (
        <article className={cardStyles.item} key={item._id} onClick={() => openIngModal(item)} ref={dragRef}>
            {counts[item._id]> 0 && <Counter count={counts[item._id]} />}
            <picture className={cardStyles.picture}>
                <source media="(max-width: 767px)" srcSet={item.image_mobile} />
                <source media="(min-width: 768px)" srcSet={item.image_large} />
                <img className={cardStyles.image} src={item.image} alt={item.name} />
            </picture>
            <span className={cardStyles.price}>{item.price}&nbsp;<CurrencyIcon type="primary" /></span>
            <p className={cardStyles.text}>{item.name}</p>
            {isDetailsModalOpen && (
                <Modal name='Details' title='Детали ингредиента' isOpen={isIngModalOpen} onClose={handleClose}>
                    <IngredientDetails item={item} />
                </Modal>)
            }
        </article>
    )
}

export default Card;

Card.propTypes = {
    item: IngredientPropTypes
}
