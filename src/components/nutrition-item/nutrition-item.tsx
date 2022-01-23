import NutritionItemStyles from './nutrition-item.module.css'
import {FC} from 'react'

interface INutrition {
    title: string;
    value: number;
}
const NutritionItem: FC<INutrition> = ({ title, value }) => {
    return (
        <li className={NutritionItemStyles.nutrition_item}>
            <p className={NutritionItemStyles.text}>{title}</p>
            <p className={NutritionItemStyles.value}>{value}</p>
        </li>
    )
}

export default NutritionItem ;

