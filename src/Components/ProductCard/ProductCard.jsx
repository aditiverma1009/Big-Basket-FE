import React from 'react';
import ProductBrandTitle from '../ProductBrandTitle/ProductBrandTitle';
import PropTypes from 'prop-types';
import './product-card.css';


const findOrderQuantity = (basket, id) => basket.map((step) => {
  if (step.itemid === id) { return step.availableQuantity; }
});

const ProductCard = (props) => {
  const basket = props.basket;
  const quantityinCart = findOrderQuantity(basket, props.itemid);
  console.log(quantityinCart);
  const availableQuantity = props.availableQuantity;
  const itemid = props.itemid;
  let check = 0;

  if (quantityinCart < 0) {
    check = 1;
  }


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
        <input type="text" className="counterfield" value={quantityinCart} placeholder="0" />
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
