import React, { FC, useEffect, useState } from 'react'
import styles from './order-info.module.css'
import { useAppParams, useAppDispatch, useAppSelector } from '../../services/hooks'
import { ORDER_STATUS } from '../../utils/utils'

import LoaderSpinner from '../../components/loader/loader'
import { getOrderByIdApi } from '../../services/api'
import { TIngredientList, TOrder } from '../../types/types'


const OrderInfo: FC = () => {
  const[order, setOrder] = useState<TOrder | undefined>()
  const dispatch = useAppDispatch()
  const {id} = useAppParams()
  const {ingredients, isLoading} = useAppSelector((store) => store.ingredients)
  const orderIngredients = 
    ingredients && order && order.ingredients.map((id) => ingredients.find((item) => 
    item._id === id))
  useEffect(() => {
   getOrderByIdApi(id)
   .then((res) => {
     console.log(res)
     setOrder(res.orders[0])
   })
   .catch((error) => {
     console.log(error)
   })
  },[id, dispatch])  

  return (
    <>
      {!isLoading && order ? (
        <article className={styles.card}>
          <p className={styles.id}>#{order.number}</p>
          <section className={styles.header}>
            <h2 className={styles.title}>{order.name}</h2>
            <p className={styles.status}>{ORDER_STATUS[order.status]}</p>
          </section>
          
          <footer className={styles.footer}>
            <p className={styles.wrapper}>
             </p>
          </footer>
        </article>
      ) : (
        <LoaderSpinner />
      )}
    </>
  )

}
export default OrderInfo

