import React from 'react';
import PropTypes from 'prop-types';
import './order-element.css';

const OrderElement = (props) => {
  const now = props.now;
  console.log('now', now);
  const listitems = now.map(step => (<div>{step}</div>));


  return (
    <div className="OrderElement" >
      {listitems}
    </div>
  );
};

OrderElement.propTypes = {

};

export default OrderElement;
