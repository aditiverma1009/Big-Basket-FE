import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import PropTypes from 'prop-types';
import './product-pane.css';

const ProductPane = (props) => {
  const { categoryItems } = props;
  console.log(categoryItems);

  const productList = categoryItems.map(step => (
    <ProductCard
      basket={props.basket}
      itemid={step.itemid}
      category={step.category}
      brand={step.brand}
      title={step.title}
      availableQuantity={step.availableQuantity}
      cost={step.cost}
      description={step.description}
      imageUrl={step.imageUrl}
      onAddItem={itemid => props.onAddItem(itemid)}
      onDeleteItem={itemid => props.onDeleteItem(itemid)}
    />));

  return (
    <div className="ProductPane">
      {productList}
    </div>);
};


ProductPane.propTypes = {
};

export default ProductPane;
