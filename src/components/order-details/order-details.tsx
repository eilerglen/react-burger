import orderDetailsStyles from './order-details.module.css';
import { ReactComponent as OrderDone } from '../../images/order-done.svg';
import LoaderSpinner from '../loader/loader';
import {FC} from 'react';

interface TOrderNumber {
    number: number;
}

const OrderDetails: FC<TOrderNumber> = ({ number }) => {
    return (
        <>
            <span className={orderDetailsStyles.order_number}>
               {number}
            </span>
            <span className={orderDetailsStyles.subtitle}>Идентификатор заказа</span>
            <span className={orderDetailsStyles.icon}>
            {!number ? <LoaderSpinner type="light" /> : <OrderDone />}
            </span>
            <p className={orderDetailsStyles.text}>Ваш заказ начали готовить</p>
            <p className={`${orderDetailsStyles.text} ${orderDetailsStyles.text_secondary}`}>Дождитесь готовности на орбитальной станции</p>
           
        </>
    )
}
export default OrderDetails