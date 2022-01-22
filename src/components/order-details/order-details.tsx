import orderDetailsStyles from './order-details.module.css';
import { ReactComponent as OrderDone } from '../../images/order-done.svg';
import { useAppSelector } from '../../services/hooks';
import {FC} from 'react';

interface TOrderNumber {
    number: number;
}

const OrderDetails: FC<TOrderNumber> = ({ number }) => {
    const { isLoading } = useAppSelector(store => store.order)
    return (
        <>
            <span className={orderDetailsStyles.order_number}>
               {number}
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