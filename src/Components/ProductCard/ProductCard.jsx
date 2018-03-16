import React from 'react';
import ProductBrandTitle from '../ProductBrandTitle/ProductBrandTitle';
import PropTypes from 'prop-types';
import './product-card.css';

const ProductCard = (props) => {
  const availableQuantity = props.availableQuantity;
  const itemid = props.itemid;
  return (
    <div className="ProductCard">
      <img
        className="productimg"
        src={props.imageUrl}
        alt="bookCover"
      />

      <ProductBrandTitle title={props.title} brand={props.brand} />
      <p className="Desc">{props.description}</p>
      <div className="ProductCardAction">
        <p className="mrp">MRP. {props.cost}</p>
        <i
          className="material-icons add"
          onClick={itemid => props.onAddItem(props.itemid)}
        >add_box
        </i>
        <input type="text" className="counterfield" value="1" />
        <i
          className="material-icons minus"
          onClick={itemid => props.onDeleteItem(props.itemid)}
        >indeterminate_check_box
        </i>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
};

export default ProductCard;
