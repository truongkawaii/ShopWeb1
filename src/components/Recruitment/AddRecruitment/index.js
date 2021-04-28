/* eslint-disable no-sequences */
import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import { useHistory } from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import PropTypes from 'prop-types';
import * as Yup from 'yup';
import './CustomeRecruitment.scss';
import { addNewJD } from '../../../state/actions';

function AddRecruitment() {
  const position = useSelector(state => state.positionState.dataSort);
  const skills = useSelector(state => state.allSkillState.dataSort);
  const address = useSelector(state => state.addressState.data);

  const history = useHistory();
  const dispatch = useDispatch();
  const [jobDesc, setJobDesc] = useState({
    description: '',
    requirement: '',
    benefit: '',
  });

  const [validation, setValidation] = useState({
    errorSkill: null,
    errorPosition: null,
    checkDone: true,
  });

  const [dataPosition, setDataPosition] = useState(null);
  const [dataSkill, setDataSkill] = useState(null);
  const [dataAddress, setDataAddress] = useState(null);

  useEffect(() => {
    if (position) {
      let data = position.map(item => (
        <option value={parseInt(item.id)} key={item.id}>
          {item.name}
        </option>
      ));
      setDataPosition(data);
    }

    if (address) {
      let data = address.map(item => (
        <div className="wayworking" key={item.id}>
          <Field type="checkbox" name="address" value={item.id.toString()} />
          <h5>{item.name}</h5>
        </div>
      ));
      setDataAddress(data);
    }

    if (skills) {
      let data = skills.map(item => (
        <option value={parseInt(item.id)} key={item.id}>
          {item.name}
        </option>
      ));
      setDataSkill(data);
    }
  }, [position, skills, address]);

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Quá ngắn!')
      .max(50, 'Quá dài!')
      .required('Không được để trống!'),
  });
  // validation Form
  // created_at: dateFormat(new Date(), 'dddd, d - m - yyyy, h:MM:ss TT'),
  // updated_at: 'Chưa từng cập nhật',
  return (
    <Fragment>
      <Formik
        initialValues={{
          title: '',
          status: '1',
          type_working: ['1'],
          requirement: '',
          address: ['1'],
          skills: [{ exp: '', id: '', note: '' }],
          positions: [{ id: '', working_time: '' }],
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values, 'values');

          // handler conver skills arr to obj keys
          const updatedSkills = values.skills
            .filter(item => item.id !== '')
            .map(item => ({ ...item, id: parseInt(item.id) }))
            .reduce(
              // eslint-disable-next-line no-return-assign
              (currentItem, nextItem, index) => (
                (currentItem[index] = nextItem), currentItem
              ),
              {},
            );
          // handler conver positions arr to obj keys
          const updatedPositions = values.positions
            .filter(item => item.id !== '')
            .map(item => ({
              ...item,
              id: parseInt(item.id),
            }))
            .reduce(
              // eslint-disable-next-line no-return-assign
              (currentItem, nextItem, index) => (
                (currentItem[index] = nextItem), currentItem
              ),
              {},
            );

          // console.log(updatedSkills, 'updatedSkills');
          const newValue = {
            ...values,
            skills: updatedSkills,
            positions: updatedPositions,
          };
          const updatedValue = { ...newValue, ...jobDesc };
          console.log('updatedValue ', updatedValue);

          dispatch(addNewJD(updatedValue));
          history.push('/dashboard');
        }}
        // enableReinitialize
      >
        {({ errors, touched, values }) => (
          <Form>
            <div className="add-job">
              <div className="container">
                <div className="add-job-title">
                  <h1>Tạo Job</h1>
                </div>

                <div className="long-input">
                  <h4>Tên job</h4>
                  <Field name="title" />
                  {errors.title && touched.title ? (
                    <div className="notice-err">{errors.title}</div>
                  ) : null}
                </div>

                <div className="long-input">
                  <h4>Hình thức làm việc</h4>
                  <div className="wayworking">
                    <Field type="checkbox" name="type_working" value="1" />
                    <h5>Fulltime</h5>
                  </div>
                  <div className="wayworking">
                    <Field type="checkbox" name="type_working" value="2" />
                    <h5>Parttime</h5>
                  </div>
                </div>

                <div className="long-input">
                  <h4>Địa chỉ làm việc</h4>
                  {dataAddress}
                </div>

                <div className="editor-input">
                  <h2>Yêu cầu công việc</h2>
                  <CKEditor
                    editor={ClassicEditor}
                    data={jobDesc.requirement}
                    onChange={(e, editor) => {
                      const data = editor.getData();
                      setJobDesc({ ...jobDesc, requirement: data });
                    }}
                  />
                </div>

                <div className="editor-input">
                  <h2>Mô tả công việc</h2>
                  <CKEditor
                    editor={ClassicEditor}
                    data={jobDesc.description}
                    onChange={(e, editor) => {
                      const data = editor.getData();
                      setJobDesc({ ...jobDesc, description: data });
                    }}
                  />
                </div>

                <div className="editor-input">
                  <h2>Lợi ích</h2>
                  <CKEditor
                    editor={ClassicEditor}
                    data={jobDesc.benefit}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setJobDesc({ ...jobDesc, benefit: data });
                    }}
                  />
                </div>

                <div className="editor-input">
                  <h2>Kĩ năng cần có</h2>
                </div>

                <FieldArray
                  name="skills"
                  render={arrayHelpers => (
                    <div>
                      {values.skills.map((skill, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div className="form-add-skill" key={index}>
                          {/** both these conventions do the same */}
                          <Field
                            name={`skills[${index}].id`}
                            component="select"
                          >
                            <option defaultValue>Chọn kĩ năng yêu cầu</option>
                            {dataSkill}
                          </Field>

                          <Field
                            type="number"
                            placeholder="3 năm"
                            name={`skills.${index}.exp`}
                          />
                          <button
                            className="btn-remove"
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            <span>
                              <i className="fas fa-times " />
                            </span>
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn-add-skill"
                        onClick={() =>
                          arrayHelpers.push({ id: '', exp: '', note: '' })
                        }
                      >
                        + Thêm kĩ năng
                      </button>
                    </div>
                  )}
                />
                <div className="editor-input">
                  <h2>Kiến thức chuyên ngành</h2>
                </div>
                <FieldArray
                  name="positions"
                  render={arrayHelpers => (
                    <div>
                      {values.positions.map((position, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div className="form-add-skill" key={index}>
                          <Field
                            name={`positions[${index}].id`}
                            component="select"
                          >
                            <option defaultValue>
                              Chọn kiến thức chuyên ngành
                            </option>
                            {dataPosition}
                          </Field>

                          <Field
                            placeholder="3 năm"
                            type="number"
                            name={`positions.${index}.working_time`}
                          />
                          <button
                            className="btn-remove"
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            <span>
                              <i className="fas fa-times " />
                            </span>
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn-add-skill"
                        onClick={() =>
                          arrayHelpers.push({ id: '', working_time: '' })
                        }
                      >
                        + Thêm vị trí công việc
                      </button>
                    </div>
                  )}
                />

                <div>
                  <button className="save-jd" type="submit">
                    Lưu Job
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default AddRecruitment;
