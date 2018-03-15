import React from 'react';
import ProductBrandTitle from '../ProductBrandTitle/ProductBrandTitle';
import PropTypes from 'prop-types';
import './product-card.css';

const ProductCard = () => (
  <div className="ProductCard">
    <img
      className="productimg"
      src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51VNlzbfpXL._SX331_BO1%2C204%2C203%2C200_.jpg"
      alt="bookCover"
    />
    <ProductBrandTitle />
    <p className="Desc">desc</p>
    <div className="ProductCardAction">
      <p className="mrp">MRP. </p>
      <i className="material-icons add">add_box</i>
      <input type="text" className="counterfield" value="1" />
      <i className="material-icons minus">indeterminate_check_box</i>
    </div>
  </div>
);

ProductCard.propTypes = {
};

export default ProductCard;
