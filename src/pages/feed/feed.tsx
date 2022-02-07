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


const FeedPage: FC = () => {
  const dispatch = useAppDispatch()
  const { orders, wsConnected, hasError } = useAppSelector((state) => state.feed);

  useEffect(() => {
    dispatch(wsInit())
      return () => {
          dispatch(wsActions.onClose);
      };
  }, [dispatch]);
  
  console.log(orders)
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