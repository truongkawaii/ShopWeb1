import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TitleRecruitment from './TitleRecruitment';
import ItemRecruitment from './ItemRecruitment';
import './Recruitment.scss';

Recruitment.propTypes = {
  dataRecruitment: PropTypes.array.isRequired,
};

function Recruitment({ dataRecruitment }) {
  const showRecruitment = _.map(dataRecruitment, job => (
    <ItemRecruitment key={job.id} dataJob={job} />
  ));

  return (
    <div className="list-job">
      <TitleRecruitment />
      {showRecruitment}
    </div>
  );
}

export default Recruitment;
