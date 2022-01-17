import React from "react";
import {useEffect} from 'react';
import ingredientsStyles from "./burger-ingredients.module.css";
import Menu from '../menu/menu';
import Tabs from '../tabs/tabs';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/ingredientsSlice';
import { setIngredientDetailsView,
        resetIngredientDetailsView } from '../../services/ingredientDetailsViewSlice';
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal"
import { useModal } from "../../utils/customHooks"
import { FC } from "react";
import {  useAppDispatch } from '../../services/hooks';
import { TIngredient } from "../../types/types";

const BurgerIngredients: FC = () => {
  const [current, setCurrent] = React.useState('bun')
  const dispatch = useAppDispatch();
  const {isOpen, openingModal, closingModal} = useModal();

// Монтирование 

  useEffect(() => {
    dispatch(getIngredients())
  },[dispatch])
// Крупный показ карточки ингредиента

  const handleOpenModal = (item: TIngredient) => {
    dispatch(setIngredientDetailsView(item))
    openingModal()
  }
// Закрытие крупного показа  карточки ингредиента

  const handleClose = (e) => {
    e.stopPropagation();
    closingModal()
    dispatch(resetIngredientDetailsView())
  };

  return (
    <section className={ingredientsStyles.ingredients}>
      <h1 className={ingredientsStyles.title}>Соберите бургер</h1>
      <Tabs current={current} onClick={setCurrent} />
      <Menu current={current} setCurrent={setCurrent} onClick={handleOpenModal}/>
      {isOpen && (
        <Modal name = "Details" title ="Детали ингредиента" onClose = {handleClose}>
          <IngredientDetails />
        </Modal>
        )
      }
    </section>
  );
}
export default BurgerIngredients;


