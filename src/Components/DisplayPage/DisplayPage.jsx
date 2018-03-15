import React from 'react';

import axios from 'axios';

import CategoryBlock from '../CategoryBlock/CategoryBlock';
import PropTypes from 'prop-types';
import './display-page.css';


const DisplayPage = (props) => {
  const inventory = props.inventory;
  const categorisedItems = Object.keys(inventory).map(eachCategory => (
    <CategoryBlock
      categoryName={eachCategory}
      categoryItems={inventory[eachCategory]}
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
