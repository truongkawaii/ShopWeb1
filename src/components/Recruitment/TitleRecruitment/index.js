import React from 'react';
import './TitleRecruitment.scss';

function TitleRecruitment() {
  return (
    <div className="list-detail-job row">
      <div className="col-md-2">
        <h3>Jobs</h3>
      </div>
      <div className="col-md-2">
        <h3>Vị trí làm việc</h3>
      </div>
      <div className="col-md-3">
        <h3>Kĩ năng yêu cầu</h3>
      </div>
      <div className="col-md-2">
        <h3>Địa chỉ</h3>
      </div>
      <div className="col-md-2">
        <h3>Trạng thái</h3>
      </div>
      <div className="col-md-1">
        <h3>Chỉnh sửa</h3>
      </div>
    </div>
  );
}

export default TitleRecruitment;
