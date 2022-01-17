import orderStyles from './order.module.css'
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import { useMemo } from 'react';
import {useModal} from '../../utils/customHooks'
import { clearOrder, setOrder } from '../../services/orderSlice';
import { resetCart } from '../../services/cartSlice';
import { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../services/hooks';

const Order: FC = () => {
    const { order } = useAppSelector(store => store.order)
    const { bun ,fillers } = useAppSelector(store => store.cart.sortedCart);
    const dispatch = useAppDispatch();
    const { openingModal, closingModal} = useModal();
    const orderNumber = order && order?.order && order?.order?.number
    //Вычисляем массив ингредиентов в заказе и мемоизируем 

    const idArray = useMemo(()=> {
        const orderItems= fillers.map(elem => elem.item?._id)
        if (bun) {
            orderItems.push(bun._id);    
        }
        return orderItems
    }, [fillers, bun])

    //Делаем кнопку активной в зависимости от ингредиентов в конструкторе
    const isDisabled = bun?._id && idArray.length > 1 ? true : false;

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
      };

    //Вычисляем стоимость и мемоизируем  
   
    const countTotal = useMemo(() =>{
        const total = bun?.price 
        ? (fillers?.reduce((acc, p) => acc + p?.item?.price, 0) + bun.price * 2)
        : (fillers?.reduce((acc, p) => acc + p?.item.price, 0));
        return total
    }, [bun, fillers])
    
    return (
        <div className={orderStyles.order}>
            <span className={orderStyles.price}>
                {countTotal}&nbsp;<CurrencyIcon type="primary" />
            </span>
            <Button onClick={handleOpenModal}>Оформить заказ</Button>
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
