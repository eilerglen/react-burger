import React from "react";
import {useEffect} from 'react';
import ingredientsStyles from "./burger-ingredients.module.css";
import Menu from '../menu/menu';
import Tabs from '../tabs/tabs';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/ingredientsSlice';
import { IngredientPropTypes } from "../../utils/utils";


const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('bun')
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getIngredients())
  },[dispatch])


  return (
    <section className={ingredientsStyles.ingredients}>
      <h1 className={ingredientsStyles.title}>Соберите бургер</h1>
      <Tabs current={current} onClick={setCurrent} />
      <div className={ingredientsStyles.scroller}>
        <Menu current={current} setCurrent={setCurrent} />
      </div>
    </section>
  );
}
export default BurgerIngredients;



