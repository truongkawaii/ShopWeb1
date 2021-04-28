import { all } from 'redux-saga/effects';
import AdminSaga from './adminSaga';
import JobSaga from './jobSaga';
import LoginSaga from './loginSaga';
import PositionSaga from './positionSaga';
import SkillSaga from './skillSaga';
import AddressSaga from './addressSaga';

export default function* rootSaga() {
  yield all([
    AddressSaga(),
    AdminSaga(),
    JobSaga(),
    LoginSaga(),
    PositionSaga(),
    SkillSaga(),
  ]);
}
