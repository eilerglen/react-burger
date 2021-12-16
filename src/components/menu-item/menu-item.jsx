import styles from './menu-item.module.css'
import Card from '../card/card';
import PropTypes from 'prop-types';
import { IngredientPropTypes } from '../../utils/utils';

const MenuItem = ({title, refs, data, onClick}) => {
    return (
        <>
        <h2 className={styles.title} ref={refs}>{title}</h2>
        <ul className={styles.items}>
            {data && data.map(item => (
                <li key = {Date.now().toString(36) + Math.random().toString(36).substr(2)}>
                     <Card item={item} onClick={onClick}/>
                </li>
            ))}
        </ul>
        </>
    )
}

export default MenuItem;

MenuItem.propTypes = {
    data: PropTypes.arrayOf(IngredientPropTypes).isRequired,
    title: PropTypes.string.isRequired,
    refs: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}