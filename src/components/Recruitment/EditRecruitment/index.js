import React, { useState, useEffect, Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Yup from 'yup';
import { editJD } from '../../../state/actions';
import './EditRecruitment.scss';

function EditRecruitment() {
  const position = useSelector(state => state.positionState.dataSort);
  const skills = useSelector(state => state.allSkillState.dataSort);
  const address = useSelector(state => state.addressState.data);
  const dataJobs = useSelector(state => state.allJobs.dataJobsSort);
  const [jobEditing, setJobEditing] = useState(null);
  const [dataPosition, setDataPosition] = useState(null);
  const [dataSkill, setDataSkill] = useState(null);
  const [dataAddress, setDataAddress] = useState(null);
  const param = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (dataJobs) {
      const dataJob = dataJobs.find(item => item.id === parseInt(param.id));
      console.log('dataJob ', dataJob);
      setJobEditing({ ...dataJob });
    }
  }, [dataJobs, setJobEditing]);

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

  console.log(param, 'param');
  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Qu?? ng???n!')
      .max(50, 'Qu?? d??i!')
      .required('Kh??ng ???????c ????? tr???ng!'),
  });

  return (
    <Fragment>
      {jobEditing ? (
        <Formik
          initialValues={{
            title: jobEditing.title,
            status: jobEditing.status,
            type_working: JSON.parse(jobEditing.type_working),
            address: jobEditing.address.map(item => item.id.toString()),
            skills: jobEditing.skills.map(item => {
              const obj = {
                id: item.id,
                exp: item.pivot.exp,
                note: item.pivot.note,
              };
              return { ...obj };
            }),
            positions: jobEditing.positions.map(item => {
              const obj = {
                id: item.id,
                working_time: item.pivot.working_time,
              };
              return { ...obj };
            }),
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
                  // eslint-disable-next-line no-sequences
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
                  // eslint-disable-next-line no-sequences
                  (currentItem[index] = nextItem), currentItem
                ),
                {},
              );
            const updatedValue = {
              title: values.title,
              address: values.address,
              status: jobEditing.status,
              requirement: jobEditing.requirement,
              benefit: jobEditing.benefit,
              description: jobEditing.description,
              skills: updatedSkills,
              positions: updatedPositions,
              type_working: values.type_working,
              id: jobEditing.id,
            };
            console.log('updatedPositions ', updatedPositions);
            console.log('updatedValue ', updatedValue);

            dispatch(editJD(updatedValue));
            history.push('/dashboard');
          }}
          // enableReinitialize
        >
          {({ errors, touched, values }) => (
            <Form>
              <div className="add-job">
                <div className="container">
                  <div className="add-job-title">
                    <h1>S???a Job</h1>
                  </div>

                  <div className="long-input">
                    <h4>T??n job</h4>
                    <Field name="title" />
                    {errors.title && touched.title ? (
                      <div className="notice-err">{errors.title}</div>
                    ) : null}
                  </div>

                  <div className="long-input">
                    <h4>H??nh th???c l??m vi???c</h4>
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
                    <h4>?????a ch??? l??m vi???c</h4>
                    {dataAddress}
                  </div>

                  <div className="editor-input">
                    <h2>Y??u c???u c??ng vi???c</h2>
                    <CKEditor
                      editor={ClassicEditor}
                      data={jobEditing.requirement}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setJobEditing({ ...jobEditing, requirement: data });
                      }}
                    />
                  </div>

                  <div className="editor-input">
                    <h2>M?? t??? c??ng vi???c</h2>
                    <CKEditor
                      editor={ClassicEditor}
                      data={jobEditing.description}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setJobEditing({ ...jobEditing, description: data });
                      }}
                    />
                  </div>

                  <div className="editor-input">
                    <h2>L???i ??ch</h2>
                    <CKEditor
                      editor={ClassicEditor}
                      data={jobEditing.benefit}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setJobEditing({ ...jobEditing, benefit: data });
                      }}
                    />
                  </div>

                  <div className="editor-input">
                    <h2>K?? n??ng c???n c??</h2>
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
                              <option defaultValue>Ch???n k?? n??ng y??u c???u</option>
                              {dataSkill}
                            </Field>

                            <Field
                              type="number"
                              placeholder="3 n??m"
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
                          + Th??m k?? n??ng
                        </button>
                      </div>
                    )}
                  />
                  <div className="editor-input">
                    <h2>Ki???n th???c chuy??n ng??nh</h2>
                  </div>
                  <FieldArray
                    name="positions"
                    render={arrayHelpers => (
                      <div>
                        {values.positions.map((position, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <div className="form-add-skill" key={index}>
                            {/** both these conventions do the same */}
                            <Field
                              name={`positions[${index}].id`}
                              component="select"
                            >
                              <option defaultValue>
                                Ch???n ki???n th???c chuy??n ng??nh
                              </option>
                              {dataPosition}
                            </Field>

                            <Field
                              placeholder="3 n??m"
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
                          + Th??m v??? tr?? c??ng vi???c
                        </button>
                      </div>
                    )}
                  />

                  <div>
                    <button className="save-jd" type="submit">
                      L??u Job
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      ) : null}
    </Fragment>
  );
}

export default EditRecruitment;
