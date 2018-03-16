import React from 'react';
import PropTypes from 'prop-types';
import './basket.css';
import BasketTable from '../BasketTable/BasketTable';

const sortBy = (data) => {
  const itemByCategory = {};
  data.forEach((eachitem) => {
    if (eachitem.category in itemByCategory) {
      // console.log(`if not exist${item.category}`);
      itemByCategory[eachitem.category].push(eachitem);
    } else {
      const { category } = eachitem;
      itemByCategory[category] = [];
      itemByCategory[category].push(eachitem);
    }
  });

  return itemByCategory;
};
class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorterBasket: {},
    };
  }

  onComponentDidMount() {
    const { basket } = this.props;
    const sortedBasket = sortBy(basket);
    this.setState({
      sortedBasket,
    });
  }


  render() {
    console.log(this.props.basket);
    const sortedBasket = sortBy(this.props.basket);
    return (
      <div className="Basket" >
        <BasketTable
          sortedBasket={sortedBasket}
          onCheckoutButton={() => this.props.onCheckoutButton()}
        />
      </div>
    );
  }
}
Basket.propTypes = {
};

export default Basket;
