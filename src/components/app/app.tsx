import HomePage from '../../pages/home-page/home-page'
import AuthPage from '../../pages/auth/auth'
import RegisterPage from '../../pages/register/register'
import NotFound404 from '../../pages/not-found-404/not-found-404'
import Profile from '../../pages/profile/profile'
import ForgotPassword from '../../pages/forgot-password/forgot-password'
import ResetPassword from '../../pages/reset-password/reset-password'
import IngredientPage from '../../pages/ingredient-page/ingredient-page'
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import {Route, Switch, useLocation, useHistory} from 'react-router-dom'
import AppHeader from '../app-header/app-header';
import { FC, useEffect } from 'react';
import ProtectedRoute from '../protected-route/protected-route'
import ProtectedAuthorizedRoute from '../protected-authorized-route/protected-authorized-route'
import ProtectedRouteWithReset from '../protected-reset-password/protected-reset-password'
import { TLocationState } from '../../types/types';
import { getUser } from '../../services/authSlice'
import { getIngredients } from '../../services/ingredientsSlice';

import Spinner from '../spinner/spinner'


const App: FC = () => {
  const dispatch = useAppDispatch()
  const location = useLocation<TLocationState>()
  const history = useHistory()
  const { isLoading } = useAppSelector(store => store.auth)
  const isPush = history.action === 'PUSH'
  let pushLocation = isPush && location.state && location.state.pushLocation

  useEffect(() => {
    dispatch(getIngredients())
    dispatch(getUser())
  }, [dispatch])

  
  return (
   
    <>
     {isLoading && <Spinner />}
       <AppHeader />
      <Switch location = {pushLocation || location }>
        <Route path='/' exact = {true}>
          <HomePage />
        </Route>
        <ProtectedAuthorizedRoute path='/login' exact = {true} >
          <AuthPage />
        </ProtectedAuthorizedRoute>
        <ProtectedAuthorizedRoute path='/register' exact = {true}>
          <RegisterPage />
        </ProtectedAuthorizedRoute>
        <ProtectedRoute path='/profile' exact = {true}>
          <Profile />
        </ProtectedRoute>
        <Route path='/forgot-password' exact>
          <ForgotPassword />
        </Route>
        <Route path='/reset-password' exact = {true}>
          <ResetPassword />
        </Route>
        <Route path='/ingredients/:id' exact>
          <IngredientPage />
        </Route>
        {/* <Route>
          <NotFound404 />
        </Route> */}
      </Switch> 
      {/* {pushLocation && (
        <Route path='/ingredients/:id'>
          <Modal title='Детали ингредиента' onClose={closeModal}>
            <IngredientDetails />
          </Modal>
        </Route>
      )} */}
    </>
  )
   
}

export default App;