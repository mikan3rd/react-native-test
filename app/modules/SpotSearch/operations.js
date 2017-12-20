import {getPosition} from '../../helpers/geolocation';
import KeywordApi from '../../common/apiclient/ppap/KeywordApi';
import SpotSearchApi from '../../common/apiclient/ppap/SpotSearchApi';

import {fork, take, call, put} from 'redux-saga/effects';

import {default as Actions} from './actions';

export default function* exeFork() {
  yield fork(handleGetCurrentLocation);
  yield fork(handleGetSpotsNear);
  yield fork(handleGetKeywords);
}


function* handleGetCurrentLocation() {
  while (true) {
    const action = yield take(Actions.getCurrentLocation.toString());

    yield put(Actions.startLoading());

    if (!navigator.geolocation) {
    	yield put(Actions.failurGetCurrentLocation());
    	continue;
    }

    // 現在位置を取得する
    try {
      const position = yield call(getPosition);
    	yield put(Actions.getSpotsNear({position: position, keyword: action.payload}));
    } catch (e) {
      yield put(Actions.endLoading());
      yield put(Actions.failurGetCurrentLocation());
    }
  }
}


function* handleGetSpotsNear() {
  while (true) {
    const action = yield take(Actions.getSpotsNear.toString());

    const params = {
      lat: action.payload.position.coords.latitude,
      lng: action.payload.position.coords.longitude,
      range: "",
      limit: "",
      keyword: action.payload.keyword,
    };
    try {
      const response = yield call(SpotSearchApi.get, params);
      console.log("res", response);
      yield put(Actions.endLoading());
      yield put(Actions.setSpotsNear(response.data));
    } catch (e) {
      yield put(Actions.endLoading());
    }
  }
}

/**
 * キーワード一覧取得
 */
function* handleGetKeywords() {
  while (true) {
    const action = yield take(Actions.getKeywords.toString());
    console.log(action);

    const response = yield call(KeywordApi.get);
    console.log(response);

    const keywords = response.data.map((keyword) => {
      return {value: keyword, label: keyword};
    });

    yield put(Actions.setKeywords(keywords));
  }
}
