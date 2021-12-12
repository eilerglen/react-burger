import React from "react";
import navItemStyles from './nav-item.module.css';
import PropTypes from 'prop-types';

export default class NavItem extends React.Component {

  render() {
    return (
      <a href="/" className={`${navItemStyles.link} pt-4 pb-4 pl-5 pb-5`}>    
        <span className={navItemStyles.icon}>
          {this.props.children}
        </span>
        <p className={`${navItemStyles.text} text text_type_main-default pl-2`}>{this.props.text}</p>  
      </a>
    );
  }
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}