import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions, getListSkillSuccess } from '../actions';
import TableService from '../../services/table.services';

function* getListSkill() {
  try {
    const response = yield call(TableService.listSkill);
    console.log(response, 'response skill');
    yield put(getListSkillSuccess(response));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// Handler Skills

export default function* skillSaga() {
  yield takeLatest(Actions.GET_LIST_SKILL, getListSkill);
}
