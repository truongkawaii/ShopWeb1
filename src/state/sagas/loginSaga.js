import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions, getDataJD, userLoginSuccess } from '../actions';
import TableService from '../../services/table.services';
import { toastSuccess } from '../../Helper/toastHelper';

// Handler Login
function* handerLogin(action) {
  try {
    const response = yield call(TableService.login, action.payload);
    // yield put(getDataSuccess(allCandidate));
    if (response.status === 'success') {
      localStorage.setItem('tokens', response.token);
      yield toastSuccess('Đăng nhập thành công');
      yield put(userLoginSuccess(response));
      yield put(getDataJD());
    }
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export default function* recruitmentSaga() {
  yield takeLatest(Actions.USER_LOGIN, handerLogin);
}
