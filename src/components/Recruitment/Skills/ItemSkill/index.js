import React from 'react';
import PropTypes from 'prop-types';
import './ItemSkill.scss';

ItemSkill.propTypes = {
  itemSkill: PropTypes.object.isRequired,
};

function ItemSkill({ itemSkill }) {
  return <h3>{itemSkill.name}</h3>;
}

export default ItemSkill;
