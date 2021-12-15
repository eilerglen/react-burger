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
    const { bun ,fillers } = useSelector(store => store.cart.sortedCart);
    const dispatch = useDispatch();
    const {isOpen, openingModal, closingModal} = useModal();

    //Вычисляем массив ингредиентов в заказе и мемоизируем 

    const itemsToOrder = useMemo(()=> {
        const itemsArr = fillers.map(elem => elem.item?._id)
        if (bun) {
            itemsArr.push(bun?._id);    
        }
        return itemsArr
    }, [fillers, bun])

    const handleOpenModal = () => {
        if(itemsToOrder) {
            dispatch(setOrder(itemsToOrder))
            openingModal()
        }
        
    };

    const handleCloseModal = () => {
        closingModal()
        dispatch(resetCart())
        dispatch(clearOrder())
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
            <Button onClick={handleOpenModal}>Оформить заказ</Button>
            {isOpen && 
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

