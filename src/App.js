import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import _ from 'lodash';
import jwtDecode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import pdfjs from 'pdfjs-dist';
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import { routes } from './constant/routes';
// import LayOut from './common/Layout';
import './assets/scss/main.scss';
import 'antd/dist/antd.css';
// import { customRoutes } from './components/CustomRoutes';
import './utils';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/plugins/toastr/toastr.min.css';
import './assets/js/plugins/gritter/jquery.gritter.css';
import './assets/css/animate.css';
import Admin from 'container/Admin';

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function App({ t }) {
  const tokenCheck = useSelector(state => state.tokenExpState);
  let token = localStorage.getItem('tokens');

  useEffect(() => {
    if (token) {
      let decode = jwtDecode(token);
      console.log(decode, 'decode');
      // dispatch(getMyInformation(decode.userId));
    }
    if (tokenCheck.tokenExp === false) {
      console.log(tokenCheck, 'tokenExp');
      // return <Redirect to="/login" />;
    }
  }, []);

  // const renderRoutes = () =>
  //   _.map(routes, ({ path, exact, component: MyComponent, name }) => (
  //     <Route key={path} path={path} exact={exact}>
  //       <LayOut name={name}>{customRoutes(path, MyComponent)}</LayOut>
  //     </Route>
  //   ));

  return (
    <div id="wrapper">
      <ToastContainer />
      <Router>
        <Redirect exact from="/" to="/dashboard" />
        <Route from="/dashbroad" component={Admin} />
        {/* {token === '' || token == null ? <Redirect to="/login" /> : null} */}
        {/* <Switch>{renderRoutes()}</Switch> */}
      </Router>
    </div>
  );
}

export default React.memo(App);
