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
    // const { basket } = this.props;
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
            onClick={() => this.props.onShowAllOrders()}
          >All Orders
          </button>
          <div className="basketBox">
            <i
              className="material-icons shopping_cart"
              onClick={() => this.props.onBasketClick()}
            >shopping_basket
            </i>
            <div className="basketBoxDesc">
              <span>MyBasket</span>
              <span>3 items</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;

