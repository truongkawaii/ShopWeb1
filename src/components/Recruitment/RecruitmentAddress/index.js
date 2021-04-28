import React, { Fragment } from 'react';
import './RecruitmentAddress.scss';
import PropTypes from 'prop-types';
import ItemAddress from './ItemAddress';

RecruitmentAddress.propTypes = {
  listAddress: PropTypes.array.isRequired,
};

function RecruitmentAddress({ listAddress }) {
  const showListAddress = listAddress.map(item => (
    <ItemAddress key={item.id} itemAddress={item} />
  ));
  return <Fragment>{showListAddress}</Fragment>;
}

export default RecruitmentAddress;
