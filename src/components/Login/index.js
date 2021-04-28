import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { userLogin } from '../../state/actions/table.action';
import { toastSuccess } from '../../Helper/toastHelper';
import './Login.scss';

const clientId =
  '789053288482-smoldiugk3lvu3u627ik6k2bcjhp5g1l.apps.googleusercontent.com';

export const Login = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('tokens');

  const isLoggedIn = useSelector(state => state.loginState.isLoggedIn);

  useEffect(() => {
    // eslint-disable-next-line new-cap
    console.log('isLoggedIn ', isLoggedIn);

    return () => {};
  }, [token, isLoggedIn]);
  if (token && token !== '' && token !== null && isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  const responseGoogle = response => {
    const tokenGG = response.getAuthResponse().id_token;
    // console.log(response.getAuthResponse().id_token, 'response done');
    dispatch(userLogin(tokenGG));
  };

  return (
    <div className="login-form">
      <div className="login-title">
        <h1>
          Login <span>CS SOFT</span> with google
        </h1>
      </div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};
export default Login;
