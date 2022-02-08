import React, { FC } from 'react';
import styles from './profile-orders.module.css';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { useLocation, Redirect } from 'react-router-dom';
import ProfileNav from '../../components/profile-nav/profile-nav';
import OrderPreview from '../../components/order-preview/order-preview';
import { useEffect } from 'react';
import LoaderSpinner from '../../components/loader/loader';
import { TLocationState } from '../../types/types';
import { getUserOrders }  from '../../services/orderSlice'
import {wsActionsAuth, wsAuthInit} from '../../services/userFeedSlice';


const ProfileOrders: FC = () => {
  const {isAuthorized} = useAppSelector(store => store.auth)
  const location = useLocation<TLocationState>();
  const dispatch = useAppDispatch();
  // const  {userOrders} = useAppSelector((state) => state.order)
  const  { ordersAuth } = useAppSelector((state) => state.userFeed)


  useEffect(() => { 
    // dispatch(getUserOrders())
    dispatch(wsAuthInit())
    return () => {
      dispatch(wsActionsAuth.onClose);
  };

    }, [dispatch])

  if(!isAuthorized ) {
    console.log('in name', location.state)
    const { from } = location.state || {from: {pathname: '/'}}
    return (
      <Redirect to = {from}/>
    )

  }
  return (
    <>
      <section className={styles.wrapper}>
          <ProfileNav text='В этом разделе вы можете просмотреть свою историю заказов' />
          <OrderPreview orders={ ordersAuth } fullscreen />
      </section>
    
    </>
  ) 
} 
export default ProfileOrders