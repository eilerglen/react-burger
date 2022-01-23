import compositionListStyles from './nutrition-list.module.css';
import NutritionItem from '../nutrition-item/nutrition-item'
import {FC} from 'react'

interface INutritionList {
    calories?: number;
    proteins?: number; 
    fat?: number;
    carbohydrates?: number;
}

const CompositionList: FC<INutritionList> = ({ calories, proteins, fat, carbohydrates }) => {
    // Данные ингредиента
    return (
        <ul className={compositionListStyles.composition}>
            <NutritionItem title='Калории,ккал' value={(calories as number)} />
            <NutritionItem title='Белки, г' value={(proteins as number)} />
            <NutritionItem title='Жиры, г' value={(fat as number)} />
            <NutritionItem title='Углеводы, г' value={(carbohydrates as number)} />
        </ul>
    )
}
export default CompositionList;
