import React from 'react';
import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngridients from '../burger-ingredients/burger-ingredients';
/*import {productsData}  from "../../utils/constants";*/

const API_URL = "https://norma.nomoreparties.space/api/ingredients";


function App() {
  const [ingredients, setIngredients] = React.useState([])

  React.useEffect(() => {
    const getIngredients = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error("Response error");
        }
        const ingredientsData = await res.json();
        setIngredients(ingredientsData.data);
      }
      catch (err) {
        console.log('Catched error: ', err.message);
      }
    };
    getIngredients();
  }, []);

  return (
    <>
      <AppHeader />
      <div className={appStyles.wrapper}>
        <BurgerIngridients data={ingredients} />
        <BurgerConstructor data={ingredients} />
      </div>
    </>
  );
}

export default App;