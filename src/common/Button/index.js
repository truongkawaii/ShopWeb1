import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

Button.propTypes = {
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

function Button({ name, bgColor, color, click, type }) {
  let style = {
    color: color || 'white',
    backgroundColor: bgColor || 'red',
    border: '1px solid #ccc',
    marginLeft: '5px',
  };
  return (
    <span onClick={click} style={style} className="button-ui">
      {type === 'plus' ? <i className="fa fa-plus" /> : null} {name}
    </span>
  );
}

export default Button;
