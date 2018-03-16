import React from 'react';
import PropTypes from 'prop-types';
import './all-order-page.css';
import CategoryHeading from '../CategoryHeading/CategoryHeading';
import OrderBlock from '../OrderBlock/OrderBlock';


const AllOrdersPage = (props) => {
  const { allOrder } = props;
  //   console.log(allOrder);
  const allOrderList = allOrder.map(step => (<OrderBlock oneorderdetail={step} />));
  return (
    <div className="AllOrdersPage" >
      <CategoryHeading categoryName="All Orders" />
      {allOrderList}
    </div>
  );
};
AllOrdersPage.propTypes = {
};

export default AllOrdersPage;
