import orderDetailsStyles from './order-details.module.css';
import { ReactComponent as OrderDone } from '../../images/order-done.svg';
import { useAppSelector } from '../../services/hooks';
import { TOrder } from '../../types/types';

const OrderDetails = () => {
    const { order, isLoading } = useAppSelector(store => store.order)
    return (
        <>
            <span className={orderDetailsStyles.order_number}>
               {order as TOrder && (order as TOrder).number}
            </span>
            <span className={orderDetailsStyles.subtitle}>{isLoading ? 'загружаем...' : 'идентификатор заказа'}</span>
            <span className={orderDetailsStyles.icon}>
                <OrderDone />
            </span>
            <p className={orderDetailsStyles.text}>Ваш заказ начали готовить</p>
            <p className={`${orderDetailsStyles.text} ${orderDetailsStyles.text_secondary}`}>Дождитесь готовности на орбитальной станции</p>
        </>
    )
}
export default OrderDetails