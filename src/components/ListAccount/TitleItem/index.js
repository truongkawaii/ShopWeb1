import React from 'react';
import './ItemTitle.scss';

function TitleItem() {
  return (
    <div className="list-detail-job row">
      <div className="col-md-2">
        <h3>Tên</h3>
      </div>
      <div className="col-md-2">
        <h3>Số điện thoại</h3>
      </div>
      <div className="col-md-3">
        <h3>Email</h3>
      </div>
      <div className="col-md-2">
        <h3>Trạng thái</h3>
      </div>
      <div className="col-md-1">
        <h3>Quyền</h3>
      </div>
      <div className="col-md-2">
        <h3>Tùy chỉnh</h3>
      </div>
    </div>
  );
}

export default TitleItem;
