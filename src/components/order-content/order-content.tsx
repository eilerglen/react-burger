import ScrollContainer from '../../components/scroll-container/scroll-container'
import styles from './order-content.module.css'
import OrderItem from '../order-item/order-item'
import { TIngredientList } from '../../types/types'
import { FC } from 'react'

interface IOrderContent {
  ingredients: TIngredientList
}

const OrderContent: FC<IOrderContent> = ({ ingredients }) => {
//  

  return (
    <>
      <h3 className={styles.ingredients_title}>Состав:</h3>
      <ScrollContainer height='300px'>
        <ul className={styles.list}>
          {ingredients.map((item, index) => (
            <li className={styles.item} key={index}>
              <OrderItem ingredient={item} price={item.price} />
            </li>
          ))}
        </ul>
      </ScrollContainer>
    </>
  )
}

export default OrderContent