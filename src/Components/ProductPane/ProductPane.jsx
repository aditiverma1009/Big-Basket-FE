import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import PropTypes from 'prop-types';
import './product-pane.css';

const ProductPane = () => (
  <div className="ProductPane">
    <ProductCard />
  </div>
);

ProductPane.propTypes = {
};

export default ProductPane;
