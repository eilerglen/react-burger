import orderStyles from './order.module.css'
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import {useModal} from '../../utils/customHooks'
import { clearOrder, setOrder } from '../../services/orderSlice';
import { resetCart } from '../../services/cartSlice';

const Order = () => {
    const { total, itemsToOrder } = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const {isOpen, openingModal, closingModal} = useModal();

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
    return (
        <div className={orderStyles.order}>
            <span className={orderStyles.price}>
                {total}&nbsp;<CurrencyIcon type="primary" />
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

