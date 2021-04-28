import React, { useEffect } from 'react';
import './ItemRecruitment.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Skills from '../Skills';
import RecruitmentAddress from '../RecruitmentAddress';

ItemRecruitment.propTypes = {
  dataJob: PropTypes.object.isRequired,
};

function ItemRecruitment({ dataJob }) {
  console.log('dataJob ', dataJob);
  const history = useHistory();

  const positionData = dataJob.positions.map(item => (
    <h3 key={item.id}>{item.name}</h3>
  ));

  useEffect(() => {
    console.log(dataJob, 'dataJob');
  }, []);

  return (
    <div className="list-show-job row">
      <div className="col-md-2">
        <h3 className="name-job">
          {dataJob.title}
          <span
            onClick={() => {
              history.push(`/detail-job/${dataJob.id}`);
              // setUserEdit({
              //   phone: admin.phone || '',
              //   status: admin.status,
              // });
              // setShowModal(true);
            }}
          >
            <i className="fas fa-folder" />
          </span>
        </h3>
      </div>
      <div className="col-md-2">
        <div className="position-item">{positionData}</div>
      </div>
      <div className="col-md-3">
        <div className="skill-list">
          <Skills allSkill={dataJob.skills} />
        </div>
      </div>
      <div className="col-md-2">
        <div className="address-item">
          <RecruitmentAddress listAddress={dataJob.address} />
        </div>
      </div>
      <div className="col-md-2">
        {dataJob.status === '20' ? (
          <h3 className="status-inactive">inActive</h3>
        ) : (
          <h3 className="status-active">Active</h3>
        )}
      </div>
      <div className="col-md-1">
        <div className="option-item2">
          <span
            onClick={() => {
              history.push(`/editjob/${dataJob.id}`);
              // setUserEdit({
              //   phone: admin.phone || '',
              //   status: admin.status,
              // });
              // setShowModal(true);
            }}
            className="edit-btn"
          >
            <i className="fas fa-edit" />
          </span>
          <span className="edit-btn">
            {true ? (
              <i className="fas fa-toggle-off" />
            ) : (
              <i className="fas fa-toggle-on" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ItemRecruitment;
