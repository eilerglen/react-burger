import React from "react";
import ingredientsStyles from "./burger-ingredients.module.css";
import Menu from '../menu/menu';
import Tabs from '../tabs/tabs';
import PropTypes from 'prop-types';
import { IngredientPropTypes } from "../../utils/utils";


const BurgerIngridients = ({data}) => {
  const [current, setCurrent] = React.useState('bun')

  return (
    <section className={ingredientsStyles.ingredients}>
      <h1 className={ingredientsStyles.title}>Соберите бургер</h1>
      <Tabs current={current} onClick={setCurrent} />
      <div className={ingredientsStyles.scroller}>
        <Menu data={data} current={current} />
      </div>
    </section>
  );
}
export default BurgerIngridients;

BurgerIngridients.propTypes = {
  data: PropTypes.arrayOf(IngredientPropTypes).isRequired
}

