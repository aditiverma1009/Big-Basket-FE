import React from 'react';

import axios from 'axios';

import CategoryBlock from '../CategoryBlock/CategoryBlock';
import PropTypes from 'prop-types';
import './display-page.css';


const DisplayPage = (props) => {
  const { inventory } = props;
  const categorisedItems = Object.keys(inventory).map(eachCategory => (
    <CategoryBlock
      basket={props.basket}
      categoryName={eachCategory}
      categoryItems={inventory[eachCategory]}
      onAddItem={itemid => props.onAddItem(itemid)}
      onDeleteItem={itemid => props.onDeleteItem(itemid)}
    />
  ));

  return (
    <div className="DisplayPage">
      {categorisedItems}
    </div>);
};


DisplayPage.propTypes = {
};

export default DisplayPage;
