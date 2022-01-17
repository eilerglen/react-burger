import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { FC } from 'react';

const App: FC = () => {
  return (
    <>
      <AppHeader />
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