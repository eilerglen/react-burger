import React, { FC } from 'react'
import styles from './feed.module.css'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../services/hooks'
import LoaderSpinner from '../../components/loader/loader'
import ScrollContainer from '../../components/scroll-container/scroll-container'

const FeedPage: FC = () => {
  const dispatch = useAppDispatch()
  const { orders, wsConnected, hasError } = useAppSelector((state) => state.feed)

  return (
    <>
      {!wsConnected && !hasError && <LoaderSpinner />}
      {wsConnected && !hasError && (
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

           
          </section>
        </>
      )}
    </>
  )
}
export default FeedPage