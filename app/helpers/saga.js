import {SpotSearchOperations} from '../modules/SpotSearch';
import {fork} from 'redux-saga/effects';

function* rootSaga() {
  yield fork(SpotSearchOperations);
}

export default rootSaga;
