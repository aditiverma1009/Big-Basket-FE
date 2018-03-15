import React from 'react';
import PropTypes from 'prop-types';
import './container.css';

const Container = props => (
  <div className="Container">
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
