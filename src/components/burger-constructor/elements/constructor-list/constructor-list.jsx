import {ConstructorItem} from "../constructor-item";
import constructorListStyles from './constructor-list.module.css'
import PropTypes from 'prop-types';
const ConstructorList = ({data}) => {
    return (
        <ul className = {constructorListStyles.main_container}>
            {data.map((item, index) =>(
                <ConstructorItem
                    key = {item._id}
                    item = {item}
                    type = {index === 0 ? "top": index === data.length-1 ? "bottom": null}
                />
            ))
            }
       </ul>
    )
}

export default ConstructorList;

ConstructorList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
    }).isRequired).isRequired
}