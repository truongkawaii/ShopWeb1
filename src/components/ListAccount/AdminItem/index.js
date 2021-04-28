import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Spin, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import './AdminItem.scss';
import { editUser } from '../../../state/actions';

Admin.propTypes = {
  admin: PropTypes.object.isRequired,
};

function Admin({ admin }) {
  const [active, setActive] = useState('');
  const [styleActive, setStyleActive] = useState('');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [userEdit, setUserEdit] = useState({
    phone: null,
    status: null,
  });

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleOk = () => {
    setShowModal(false);
    dispatch(editUser({ ...userEdit, id: admin.id }));
  };

  const modal = (
    <Modal
      title="Chỉnh sửa user"
      visible={showModal}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelText="Hủy"
      okText="Đồng ý"
    >
      <h2>Nhap so dien thoai </h2>
      <input
        onChange={e => setUserEdit({ ...userEdit, phone: e.target.value })}
        className="email-invite"
        type="text"
        value={userEdit.phone}
        placeholder="Số điện thoại"
      />
      <h2 className="edit-userStatus">Trạng thái user</h2>
      <select
        value={userEdit.status}
        onChange={e => setUserEdit({ ...userEdit, status: e.target.value })}
      >
        <option value="1">active</option>
        <option value="0">inActive</option>
      </select>
    </Modal>
  );

  const handerActiveUser = adminUser => {
    dispatch(
      editUser({ ...adminUser, status: adminUser.status === '0' ? '1' : '0' }),
    );
    // setUserEdit({
    //   ...userEdit,
    //   status: !admin.status,
    // });
  };

  useEffect(() => {
    if (admin.status === '0') {
      setActive('inActive');
      setStyleActive('status-inactive');
    } else if (admin.status === '1') {
      setActive('Active');
      setStyleActive('status-active');
    } else {
      setActive('Watting');
      setStyleActive('status-wait');
    }
    return () => {};
  }, [admin.status]);

  const showData = (
    <div key={admin.id} className="list-detail  row">
      <div className="col-md-2">
        <h3>{admin.name ? admin.name : 'Chưa có'}</h3>
      </div>
      <div className="col-md-2">
        <h3>{admin.phone ? admin.phone : 'Chưa có'}</h3>
      </div>
      <div className="col-md-3">
        <h3>{admin.email}</h3>
      </div>
      <div className="col-md-2">
        <h3 className={styleActive}>{active}</h3>
      </div>
      <div className="col-md-1">
        <h3>{admin.permission}</h3>
      </div>
      <div className="col-md-2">
        <div className="option-item">
          <span
            onClick={() => {
              setUserEdit({
                phone: admin.phone || '',
                status: admin.status,
              });
              setShowModal(true);
            }}
            className="edit-btn"
          >
            <i className="fas fa-edit" />
          </span>
          <span className="edit-btn" onClick={() => handerActiveUser(admin)}>
            {admin.status === '0' ? (
              <i className="fas fa-toggle-off" />
            ) : (
              <i className="fas fa-toggle-on" />
            )}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {showData}
      {modal}
    </div>
  );
}

export default Admin;
