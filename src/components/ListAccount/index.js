import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './ListAccount.scss';
import AdminItem from './AdminItem';
import TitleItem from './TitleItem';

ListAccount.propTypes = {
  listData: PropTypes.array.isRequired,
};

function ListAccount({ listData }) {
  let listAdmin = _.map(listData, item => (
    <AdminItem key={item.id} admin={item} />
  ));

  return (
    <div>
      <TitleItem />
      {listAdmin}
    </div>
  );
}

export default ListAccount;
