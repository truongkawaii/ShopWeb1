import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
// import Header from '../Header';
import ListOptions from '../ListOptions';

export const customRoutes = (path, MyComponent) => {
  const token = localStorage.getItem('tokens');
  if (path !== '/login') {
    if (token !== null && token !== '') {
      return (
        <Fragment>
          {/* <Header /> */}
          <ListOptions />
          <div className="row side-bar">
            <div className="col-10">
              <MyComponent />
            </div>
            <div className="col-2">d</div>
          </div>
        </Fragment>
      );
    } else return <Redirect to="/login" />;
  } else {
    return (
      <Fragment>
        <MyComponent />
      </Fragment>
    );
  }
};
