import React from 'react';

import CategoryHeading from '../CategoryHeading/CategoryHeading';

import ProductPane from '../ProductPane/ProductPane';
import PropTypes from 'prop-types';
import './category-block.css';

const CategoryBlock = () => (
  <div className="CategoryBlock">
    <CategoryHeading />
    <ProductPane />
  </div>
);

CategoryBlock.propTypes = {
};

export default CategoryBlock;
