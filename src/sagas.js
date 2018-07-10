import { call, put, takeLatest } from "redux-saga/effects";

import  {
  REQUEST_API_DATA,
  REQUEST_API_EPISODES,
} from "./redux/constants"

import {
    receiveApiData,
    receiveApiEpisodes,
    toggleModalWindow
  } from "./redux/actions";

import { fetchData, fetchEpisodes } from "./api";

function* getApiData(action) {
  try {
    const data = yield call(() => fetchData(action.data));
    if (data.length !== 0) {
      yield put(receiveApiData(data));
    } else {
      yield put(toggleModalWindow(true));
    }
  } catch (e) {
    console.log(e);
  }
}

function* getApiEpisodes(action) {
  try {
    const data = yield call(() => fetchEpisodes(action.data));
    const htmlTagRe = /<\/?[\w\s="/.':;#-\/]+>/gi;
    if (data.length !== 0) {
      data.forEach(item => {
        if (item.length !== 0 && item.summary) {
          const plainTExt = item.summary.replace(htmlTagRe, '');
          item.summary = plainTExt;
        }
      });
      yield put(receiveApiEpisodes(data));
    } 
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
  yield takeLatest(REQUEST_API_EPISODES, getApiEpisodes);
}