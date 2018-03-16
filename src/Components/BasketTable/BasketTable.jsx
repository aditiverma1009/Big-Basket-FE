import React from 'react';
import PropTypes from 'prop-types';
import './basket-table.css';

// const shortensortedBasket = (sortedBasket) => {
//   const shortenedObj = {};
//   Object.keys(sortedBasket).map((categ) => {
//     const eachCate = sortedBasket[categ];
//     eachCate.map((item) => {
//       {
//         itemid: item.itemid,
//         availableQuantity: item.quantity,
//         cost: item.cost,
//       };
//     });
//   });
// };

const BasketTable = (props) => {
  const { sortedBasket } = props;
  // console.log(sortedBasket);
  // const shortened = shortensortedBasket(sortedBasket);
  // console.log(shortened);
  const ordersetlist = Object.keys(sortedBasket).map((oneCategory) => {
    const valueOfCategory = sortedBasket[oneCategory];
    console.log(valueOfCategory);
    return (
      <div>
        <div className="Categorytitlerow">
          {oneCategory}
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
                    {item.cost}
                  </td>
                  <td>
                    {item.availableQuantity}
                  </td>
                  <td>
                    {(item.cost * item.availableQuantity)}
                  </td>
                </tr>))
          }
        </div>
      </div>
    );
  });

  return (
    <div className="BasketTable">
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

      <div className="Checkoutdiv">
        <div>
      TOTAL: xxxxx
        </div>
        <div onClick={() => props.onCheckoutButton()}>
          CHECKOUT
        </div>
      </div>
    </div>
  );
};


export default BasketTable;
