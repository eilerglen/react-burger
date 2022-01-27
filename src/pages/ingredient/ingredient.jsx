import styles from './ingredient.module.css'
import IngredientDetails from '../../components/ingredient-details/ingredient-details'

const IngredientPage = () => {
  return (
    <div className= {styles.wrapper}>
      <h2 className={styles.title}> Детали ингредиента </h2>
      <IngredientDetails/>
    </div>
  )
}

export default IngredientPage