import React from 'react';
import orderStyles from './order.module.css'
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

const Order = ({total}) => {

    return (
        <div className={orderStyles.order}>
            <span className={orderStyles.price}>
                {total}&nbsp;<CurrencyIcon type="primary" />
            </span>
            <Button >Оформить заказ</Button>
        </div>
    )
}
export default Order;

Order.propTypes = {
    total: PropTypes.number.isRequired
}