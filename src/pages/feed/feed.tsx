import React, { FC } from 'react'
import styles from './feed.module.css'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../services/hooks'
import LoaderSpinner from '../../components/loader/loader'
import FeedCard from '../../components/feed-card/feed-card'
import ScrollContainer from '../../components/scroll-container/scroll-container'
import { OrderDashboard } from '../../components/order-dashboard/order-dashboard'
import { getOrders }  from '../../services/orderSlice'
import {wsActions, wsInit} from '../../services/feedSlice';
import { getCookie } from '../../utils/cookie';
import { WS_URL_AUTH } from '../../utils/config'


const FeedPage: FC = () => {
  const dispatch = useAppDispatch()
  const { orders, total, totalToday, wsConnected, hasError } = useAppSelector((state) => state.feed);

  useEffect(() => {
    dispatch(wsInit())
    dispatch(getOrders())
      return () => {
          dispatch(wsActions.onClose);
      };
  }, [dispatch]);
  

 
  const token = getCookie('token') 
  console.log(token)

  // Вырезал bearer из токена
  const ws = new WebSocket(`${WS_URL_AUTH}?token=${getCookie('token').split(' ')[1]}`)

  console.log(ws)

  console.log(orders)
  console.log(total, totalToday)
  console.log(wsConnected)
  return (
    <>
      {!wsConnected && !hasError && <LoaderSpinner />}
      { (
        <>
          <section className={styles.wrapper}>
            <section className={styles.order_list}>
              <h1 className={styles.heading}>Лента заказов</h1>
              <ScrollContainer type='list' height='680px'>
                {orders.map((item, index) => (
                  <li className={styles.list_item} key={index}>
                    <FeedCard item={item} />
                  </li>
                ))}
              </ScrollContainer>
            </section>

            <OrderDashboard />
          </section>
        </>
      )}
    </>
  )
}
export default FeedPage