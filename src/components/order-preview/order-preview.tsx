import styles from './order-preview.module.css'
import FeedCard from '../feed-card/feed-card'
import ScrollContainer from '../scroll-container/scroll-container'
import { TAllOrderList, TOrder } from '../../types/types'
import { FC } from 'react'

interface IOrderPreview {
  orders: TAllOrderList
  fullscreen: boolean
}

const OrderPreview: FC<IOrderPreview> = ({orders, fullscreen}) => {
  const width = fullscreen ? {width: '100%'} : {}

  return (
    <section className={styles.order_list} style={width}>
      <ScrollContainer type='list'>
        {orders
          .map((item: TOrder, index: number) => (
            <li className={styles.list_item} key={index}>
              <FeedCard item={item} />
            </li>
          ))
          .reverse()}
      </ScrollContainer>
    </section>
  )
}
export default OrderPreview