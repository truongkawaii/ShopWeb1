import { call, put, takeLatest } from 'redux-saga/effects';
// eslint-disable-next-line import/no-unresolved
import { toastError, toastSuccess } from 'Helper/toastHelper';
import { Actions, getDataJDSuccess, hideModal, showModal } from '../actions';
import TableService from '../../services/table.services';

// Handler Data JOB
function* fetchAllJD(action) {
  try {
    yield put(showModal());
    const allJd = yield call(TableService.listJob, action.payload);
    yield put(getDataJDSuccess(allJd));
    yield put(hideModal());
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* addDataJD(action) {
  console.log(action.payload, ':)))');
  try {
    const res = yield call(TableService.addJob, action.payload);
    if (res.result) {
      yield toastSuccess('Thêm Job thành công');
    } else {
      yield toastError('Thêm Job thất bại');
    }
    const allJd = yield call(TableService.listJob);
    yield put(getDataJDSuccess(allJd));
    console.log(res);
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* editDataJD(action) {
  try {
    yield call(TableService.editJob, action.payload);
    const allJd = yield call(TableService.listJob, 1);
    yield put(getDataJDSuccess(allJd));
    yield toastSuccess('Sửa thành công');
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// function* deleteDataJD(action) {
//   try {
//     yield call(TableService.deleteJob, action.payload);
//     const allJd = yield call(TableService.listJob);
//     yield put(getDataSuccess(allJd));
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

export default function* recruitmentSaga() {
  yield takeLatest(Actions.GET_DATA_JD, fetchAllJD);
  yield takeLatest(Actions.ADD_DATA_JD, addDataJD);
  yield takeLatest(Actions.EDIT_DATA_JD, editDataJD);
}
