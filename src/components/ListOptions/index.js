/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import admin from '../../assets/img/profile_small.jpg';
import { userLogout } from '../../state/actions/table.action';

function ListOptions() {
  const dispatch = useDispatch();
  const [nameAdmin, setNameAdmin] = useState('');
  let token = localStorage.getItem('tokens');
  const logOutUser = () => {
    dispatch(userLogout());
    toast.info('Đăng xuất thành công', { autoClose: 2500 });
  };

  useEffect(() => {
    let decode = jwtDecode(token);
    setNameAdmin(decode.name);
  }, []);

  return (
    <nav className="navbar-default navbar-static-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu">
          <li className="nav-header">
            <div className="dropdown profile-element">
              <span>
                <img alt="imsage" className="img-circle" src={admin} />
              </span>
              <Link data-toggle="dropdown" className="dropdown-toggle" to="#">
                <span className="clear">
                  <span className="block m-t-xs">
                    <strong className="font-bold">{nameAdmin}</strong>
                  </span>
                  <span className="text-muted text-xs block">
                    Art Director <b className="caret" />
                  </span>
                </span>
              </Link>
              <ul className="dropdown-menu animated fadeInRight m-t-xs">
                <li>
                  <Link to="profile.html">Profile</Link>
                </li>
                <li>
                  <Link to="contacts.html">Contacts</Link>
                </li>
                <li>
                  <Link to="mailbox.html">Mailbox</Link>
                </li>
                <li className="divider" />
                <li>
                  <Link to="login.html">Logout</Link>
                </li>
              </ul>
            </div>
            <div className="logo-element">IN+</div>
          </li>
          <li className="active item-nav">
            <Link to="/dashboard">
              <i className="fa fa-th-large" />
              <span className="nav-label">Dashboards</span>
              {/* <span className="fa arrow" /> */}
            </Link>
            <ul className="nav nav-second-level">
              <li className="active">
                <Link to="/dashboard"> Add a recruitment</Link>
              </li>
              <li>
                <Link to="dashboard_2.html">Dashboard v.2</Link>
              </li>
              <li>
                <Link to="dashboard_3.html">Dashboard v.3</Link>
              </li>
              <li>
                <Link to="dashboard_4_1.html">Dashboard v.4</Link>
              </li>
              <li>
                <Link to="dashboard_5.html">Dashboard v.5 </Link>
              </li>
            </ul>
          </li>

          <li className="active item-nav">
            <Link to="/candidate">
              <i className="fa fa-bar-chart-o" />
              <span className="nav-label">List Candidate</span>
              {/* <span className="fa arrow" /> */}
            </Link>
            <ul className="nav nav-second-level">
              <li className="">
                <Link to="index.html">Add a Candidate</Link>
              </li>
            </ul>
          </li>
          <li className="active item-nav">
            <Link to="/dashboard">
              <i className="fa fa-bar-chart-o" />
              <span className="nav-label">Cài đặt</span>
              <span className="fa arrow" />
            </Link>
            <ul className="nav nav-second-level">
              <li className="">
                <Link to="index.html">Quản lý kĩ năng</Link>
              </li>
              <li>
                <Link to="dashboard_2.html">Quản lý địa chỉ</Link>
              </li>
              <li>
                <Link to="dashboard_3.html">Quản lý công việc</Link>
              </li>
            </ul>
          </li>
          <li className="active item-nav">
            <Link to="/dashboard">
              <i className="fa fa-diamond" />
              <span className="nav-label">Danh sách ứng tuyển</span>
            </Link>
          </li>
          <li className="active item-nav">
            <Link to="/dashboard">
              <i className="fa fa-diamond" />
              <span className="nav-label">Danh sách ứng viên</span>
            </Link>
          </li>
          <li className="active item-nav">
            <Link to="/admins">
              <i className="fa fa-diamond" />
              <span className="nav-label">Danh sách tài khoản</span>
            </Link>
          </li>
          <li className="active item-nav">
            <Link to="#">
              <i className="fa fa-sitemap" />
              <span className="nav-label">Menu Levels </span>
              <span className="fa arrow" />
            </Link>
          </li>
          <li className="active item-nav">
            <Link onClick={logOutUser}>
              <i className="fas fa-sign-out-alt" />
              <span className="nav-label">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ListOptions;
