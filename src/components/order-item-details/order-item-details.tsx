import React, { FC } from 'react'
import Modal from '../modal/modal'
import { useAppSelector } from '../../services/hooks'
import styles from './order-item-details.module.css'
import { formatOrderDate } from '../../utils/formatDate'
import OrderTitle  from '../../components/order-title/order-title'
import OrderContent  from '../../components/order-content/order-content'
import OrderFooter from '../../components/order-footer/order-footer'
import { TIngredientList, TOrder } from '../../types/types'
import calculatePrice from '../../utils/calculatePrice'

interface IOrderItemDetails {
  onClose: () => void
}
const OrderItemDetails: FC<IOrderItemDetails> = ({ onClose }) => {
  const { ingredients } = useAppSelector((store) => store.ingredients)
  const { orderToShow } = useAppSelector((store) => store.order)
  const { name, status, number, createdAt } = orderToShow as TOrder

  const orderIngredients =
    ingredients &&
    orderToShow &&
    (orderToShow as TOrder).ingredients.map((id) => ingredients.find((item) => item._id === id))
    
  const date = orderToShow && formatOrderDate(createdAt)

  const orderPrice =
    orderIngredients &&
    ingredients &&
    calculatePrice(orderIngredients as TIngredientList);

  return (
    <Modal title={`#${number}`} onClose={onClose} >
      <article className={styles.card}>
        <OrderTitle name={name} status={status} />
        <OrderContent ingredients={(orderIngredients as TIngredientList)} />
        <OrderFooter datetime={(date as string)} price={(orderPrice as number)} />
      </article>
    </Modal>
  )
}

export default OrderItemDetails