import React from 'react';
import './ItemAddress.scss';
import PropTypes from 'prop-types';

ItemAddress.propTypes = {
  itemAddress: PropTypes.object.isRequired,
};

function ItemAddress({ itemAddress }) {
  return <h3>{itemAddress.name}</h3>;
}

export default ItemAddress;
