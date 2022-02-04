import React, {FC} from 'react'
import styles from './order-dashboard.module.css'
import { useAppSelector } from '../../services/hooks'

export const OrderDashboard: FC =() => {
  const {orders, total, totalToday} = useAppSelector(store => store.feed)
  const  {allOrders} = useAppSelector((state) => state.order)

  const readyOrders = allOrders && allOrders.filter(item => item.status === 'done').slice(0, 21);
  const inProgressOrders =allOrders && allOrders.filter(item => item.status === 'pending').slice(0, 21);

  return (
    <section className={styles.dashboard}>
          <article className={styles.orders}>
                <div className={styles.content}>
                    <div className={styles.content_item}>
                        <header className={styles.row__title}>Готовы: </header>
                        <ul className={styles.list}>
                            {readyOrders.map((item) => (
                                <li key={item._id} className={styles.ready}>{item.number}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.content_item}>
                        <header className={styles.row__title}>В работе: </header>
                        <ul className={styles.list}>
                            {inProgressOrders.map(item => (
                                <li key={item._id} className={styles.inprogress}>{item.number}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.row}>
                    <header className={styles.row__title}>Выполнено за все время:</header>
                    <p className={styles.row__content}>{total}</p>
                </div>
                <div className={styles.row}>
                    <header className={styles.row__title}>Выполнено за сегодня:</header>
                    <p className={styles.row__content}>{totalToday}</p>
                </div>
            </article>
     </section>  

  )
}
export default OrderDashboard