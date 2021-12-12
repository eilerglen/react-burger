import React from 'react';
import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngridients from '../burger-ingredients/burger-ingredients';
import { DnDProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const INGREDIENTS_URL = "https://norma.nomoreparties.space/api/ingredients";


function App() {
  const [ingredients, setIngredients] = React.useState([])

  return (
    <>
      <AppHeader />
      <div className={appStyles.wrapper}>
        <DnDProvider backend = {HTML5Backend}>
          <BurgerIngridients ingredients={ingredients} />
          <BurgerConstructor ingredients={ingredients} />
        </DnDProvider>  
      </div>
    </>
  );
}

export default App;