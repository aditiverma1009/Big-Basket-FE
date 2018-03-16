import React from 'react';
import PropTypes from 'prop-types';
import './order-block.css';

const OrderBlock = (props) => {
  const { oneorderdetail } = props;


  const ordersetlist = Object.keys(oneorderdetail).map((keyCategoryValue) => {
    const valueOfCategory = oneorderdetail[keyCategoryValue];
    console.log(valueOfCategory);
    return (
      <div>
        <div className="Categorytitlerow">
          {keyCategoryValue}
        </div>
        <div>
          {
              valueOfCategory.map(item => (
                <tr className="simplerow">
                  <td>
                    <span>{item.brand}</span>
                    <span>{item.title}</span>
                    <span>{item.description}</span>
                  </td>
                  <td>
                    {item.orderedcost}
                  </td>
                  <td>
                    {item.orderedquantity}
                  </td>
                  <td>
                    "xxx"
                  </td>
                </tr>))
          }
        </div>
      </div>
    );
  });

  return (
    <div className="OrderBlock">
      <table className="titletable">
        <tr className="headingOfOrderBrief">
          <td>ORDER</td>
          <td>ITEMS</td>
          <td>DATE</td>
          <td>AMOUNT</td>
        </tr>
        <tr className="bodyOfOrderBrief">
          <td>{oneorderdetail.id}</td>
          <td>xxxx</td>
          <td>{oneorderdetail.createdAt}</td>
          <td>$$$$$</td>
        </tr>

      </table>
      {/* <OrderElement orderitems={props.orderitems} /> */}
      <table className="itemtable" >
        <tr className="headingOfOrderItems">
          <td>ITEM DESCRIPTION</td>
          <td>UNIT PRICE</td>
          <td>QUANTITY</td>
          <td>SUBTOTAL</td>
        </tr>

        {ordersetlist}
      </table>
    </div>
  );
};


export default OrderBlock;
