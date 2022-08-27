import React from 'react';
import Style from '../../Styles/Card.module.scss';

const Card = ({ children, className }) => {
  return <div className={`${Style.Card} ${className}`}>{children}</div>;
};

export default Card;
