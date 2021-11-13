import React from 'react';
import constructorStyles from './burger-constructor.module.css';
import {ConstructorList, Order} from './elements';

export default class BurgerConstructor extends React.Component {

    render() {
        const total = this.props.data.reduce((acc, p) => acc + p.price, 0);
        return (
            <section className={constructorStyles.constructor}>
                <div className = {constructorStyles.scroller}>
                    <ConstructorList data={this.props.data}/>
                </div>    
                <Order total={total}/>
            </section>
        );
    }
}