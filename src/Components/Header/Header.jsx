import React from 'react';
import './header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const { inventory } = this.props;
    const { basket } = this.props;
    return (
      <div className="Header">
        <div className="RightHeader">
          <i className="material-icons logo">shopping_cart</i>
          <span className="websitename">E-Shopper</span>
        </div>
        <div className="LeftHeader">
          <button
            className="AllOrdersBtn"
            type="submit"
            value="submit"
            onClick={() =>
              this.props.onShowAllOrders()}
          >All Orders
          </button>
          <div
            className="basketBox"
            onClick={() =>
              this.props.onBasketClick()}
          >
            <i

              className="material-icons shopping_cart"
            >shopping_basket
            </i>
            <div className="basketBoxDesc">
              <span>MyBasket</span>
              <span>{this.props.counter} items</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;

