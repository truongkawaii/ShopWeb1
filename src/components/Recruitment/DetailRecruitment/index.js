import React, { useState, useEffect, Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { editJD } from '../../../state/actions';

function DetailRecruitment() {
  const dataJobs = useSelector(state => state.allJobs.dataJobsSort);
  const [jobEditing, setJobEditing] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();
  const param = useParams();

  useEffect(() => {
    if (dataJobs) {
      const dataJob = dataJobs.find(item => item.id === parseInt(param.id));
      setJobEditing({ ...dataJob });
      console.log('dataJob ', dataJob);
    }
  }, [dataJobs, setJobEditing]);
  return <div>HI from DetailRecruitment</div>;
}

export default DetailRecruitment;
