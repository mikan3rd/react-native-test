import {Record} from 'immutable';
import {handleActions} from 'redux-actions';
import {default as SpotSearchActions}  from './actions';

const SpotSearchRecord = Record({
  nearspots: undefined,
  message: undefined,
  loading: false,
  keywords: [],
});

class SpotSearch extends SpotSearchRecord {
}

export default handleActions({
  [SpotSearchActions.setSpotsNear]: (state, action) => {
  	return state.set('nearspots', action.payload);
  },
  [SpotSearchActions.failurGetCurrentLocation]: (state, action) => {
  	return state.set('message', '位置情報取得失敗');
  },
  [SpotSearchActions.startLoading]: (state, action) => {
  	return state.set('loading', true);
  },
  [SpotSearchActions.endLoading]: (state, action) => {
  	return state.set('loading', false);
  },
  [SpotSearchActions.setKeywords]: (state, action) => {
  	return state.set('keywords', action.payload);
  },
}, new SpotSearch());
