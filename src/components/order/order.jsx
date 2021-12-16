import orderStyles from './order.module.css'
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import { useMemo } from 'react';
import {useModal} from '../../utils/customHooks'
import { clearOrder, setOrder } from '../../services/orderSlice';
import { resetCart } from '../../services/cartSlice';

const Order = () => {
    const { order } = useSelector(store => store.order)
    const { bun ,fillers } = useSelector(store => store.cart.sortedCart);
    const dispatch = useDispatch();
    const { openingModal, closingModal} = useModal();
    const orderNumber = order && order.order && order.order.number
    //Вычисляем массив ингредиентов в заказе и мемоизируем 

    const idArray = useMemo(()=> {
        const itemsArr = fillers.map(elem => elem.item._id)
        if (bun) {
            itemsArr.push(bun._id);    
        }
        return itemsArr
    }, [fillers, bun])

    const isDisabled = bun._id && idArray.length > 1 ? true : false;

    function handleOpenModal() {
        if (idArray) {
            dispatch(setOrder(idArray));
            openingModal();
        }

    }

    const handleCloseModal = () => {
        closingModal()
        dispatch(resetCart())
        dispatch(clearOrder())
        console.log(order.order.number)
      };

    //Вычисляем стоимость и мемоизируем  
   
    const countTotal = useMemo(() =>{
        const total = bun.price 
        ? (fillers.reduce((acc, p) => acc + p.item.price, 0) + bun.price * 2)
        : (fillers.reduce((acc, p) => acc + p.item.price, 0));
        return total
    }, [bun, fillers])
    
    return (
        <div className={orderStyles.order}>
            <span className={orderStyles.price}>
                {countTotal}&nbsp;<CurrencyIcon type="primary" />
            </span>
            <Button disabled = {!isDisabled ? "disabled" : ""} onClick={handleOpenModal}>Оформить заказ</Button>
            { orderNumber && 
                (
                    <Modal name="Order" onClose={handleCloseModal}>
                        <OrderDetails/>
                    </Modal>
                )
            }
        </div>
    )
}
export default Order;

