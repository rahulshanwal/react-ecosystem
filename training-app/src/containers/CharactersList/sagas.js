import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_CHARACTERS } from './constants';
import ServiceUtil from '../../utils/services';
import Apiendpoints from '../../utils/apiEndpoints';
import { fetchCharactersSuccess, fetchCharactersFailure } from './actions';

export function* getCharacters() {
  console.log("get characters saga");
  try {
    const { body: response } = yield call(ServiceUtil.triggerRequest, {
      url: Apiendpoints.getCharacters,
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log(response);
    return yield put(fetchCharactersSuccess(response.data));
  } catch (err) {
    console.log(err);
    return yield put(fetchCharactersFailure());
  }
}

export function* getCharactersSaga() {
  yield takeLatest(FETCH_CHARACTERS, getCharacters);
}

export default [getCharactersSaga];
