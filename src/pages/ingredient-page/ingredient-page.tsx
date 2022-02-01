import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import styles from './ingredient-page.module.css';
import { FC } from 'react'

const IngredientPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Детали ингредиента</h2>
      <IngredientDetails />
    </div>
  );
}

export default IngredientPage;