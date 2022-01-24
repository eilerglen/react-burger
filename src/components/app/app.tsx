import HomePage from '../../pages/home-page/home-page'
import LoginPage from '../../pages/login/login'
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import {Route, Switch, useLocation, useHistory} from 'react-router-dom'
import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { FC } from 'react';
import { TLocationState } from '../../types/types';


const App: FC = () => {
  const dispatch = useAppDispatch()
  const location = useLocation<TLocationState>()
  const history = useHistory()
  const isPush = history.action === 'PUSH'
  let pushLocation = isPush && location.state && location.state.pushLocation

  return (
    <>
      <AppHeader />
      <Switch location = {pushLocation || location }/>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/login' exact>
          <LoginPage />
        </Route>
      <div className={appStyles.wrapper}>
        <DndProvider backend = {HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>  
      </div>
    </>
  );
}

export default App;