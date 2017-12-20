import {createAction} from 'redux-actions';

const getCurrentLocation = createAction('SpotSearch/GetCurrentLocation');
const getKeywords = createAction('SpotSearch/GetKeywords');
const failurGetCurrentLocation = createAction('SpotSearch/FailureGetCurrentLocation');
const getSpotsNear = createAction('SpotSearch/GetSpotsNear');
const setSpotsNear = createAction('SpotSearch/SetSpotsNear');
const startLoading = createAction('SpotSearch/StartLoading');
const endLoading = createAction('SpotSearch/EndLoading');
const setKeywords = createAction('SpotSearch/SetKeywords');


export default {
  getCurrentLocation,
  getKeywords,
  failurGetCurrentLocation,
  getSpotsNear,
  setSpotsNear,
  startLoading,
  endLoading,
  setKeywords,
};
