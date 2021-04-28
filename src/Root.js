import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

Root.propTypes = {
  children: PropTypes.object.isRequired,
};

export default function Root({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
