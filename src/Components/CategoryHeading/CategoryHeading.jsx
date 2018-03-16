import React from 'react';
import PropTypes from 'prop-types';
import './category-heading.css';

const CategoryHeading = props => (
  <div className="CategoryHeading">
    {props.categoryName}
  </div>
);

CategoryHeading.propTypes = {
};

export default CategoryHeading;
