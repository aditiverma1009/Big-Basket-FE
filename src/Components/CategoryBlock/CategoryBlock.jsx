import React from 'react';

import CategoryHeading from '../CategoryHeading/CategoryHeading';

import ProductPane from '../ProductPane/ProductPane';
import PropTypes from 'prop-types';
import './category-block.css';

const CategoryBlock = props => (
  <div className="CategoryBlock">
    <CategoryHeading categoryName={props.categoryName} />
    <ProductPane
      categoryItems={props.categoryItems}
      onAddItem={itemid => props.onAddItem(itemid)}
      onDeleteItem={itemid => props.onDeleteItem(itemid)}
    />
  </div>
);

CategoryBlock.propTypes = {
};

export default CategoryBlock;
