import React, { useRef } from 'react';
import ingredientStyles from "./ingredient.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteIngredient, moveIngredient } from '../../services/cartSlice';
import { useDrag, useDrop } from 'react-dnd';
import { IngredientPropTypes } from '../../utils/utils';

const Ingredient = ({id, item, index, type }) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    
    //Попадание перетаскиваемого элемента в контейнер-приемник 

    const [{ handlerId }, drop] = useDrop({
        accept: "sort",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
                isOver: monitor.isOver()
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const dropIndex = index;

            if (dragIndex === dropIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < dropIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > dropIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            dispatch(moveIngredient({ dragIndex, dropIndex }));
            item.index = dropIndex;
        },

    });

    const [{ isDragging }, drag] = useDrag({
        type: "sort",
        item: () => {
            return { item, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const handleClose = () => {
        dispatch(deleteIngredient({ id, itemIndex: index }))
    }

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    return (
        <li className={ingredientStyles.list_item} style={{ opacity }} data-handler-id={handlerId} ref={ref}>
            <div className={ingredientStyles.item_container}>
                <DragIcon type="primary" />
                <ConstructorElement
                    type={type}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    handleClose={handleClose}
                />
            </div>
        </li>

    );
}
 
export default Ingredient;


Ingredient.propTypes = {
    item: IngredientPropTypes,
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,

}

