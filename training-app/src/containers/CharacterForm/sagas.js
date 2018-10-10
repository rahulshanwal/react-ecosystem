import { takeLatest, call, put } from 'redux-saga/effects';
import { ADD_CHARACTERS } from './constants';
import ServiceUtil from '../../utils/services';
import Apiendpoints from '../../utils/apiEndpoints';
import { addCharactersFailure } from './actions';
import { fetchCharactersSuccess } from '../CharactersList/actions';
import qs from 'qs';

export function* addCharacter(action) {
  try {
    const { body: response } = yield call(ServiceUtil.triggerRequest, {
      url: Apiendpoints.addCharacters,
      method: 'POST',
      data: qs.stringify(action.payload.character),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log(response);
    return yield put(fetchCharactersSuccess(response.data));
  } catch (err) {
    console.log(err);
    return yield put(addCharactersFailure());
  }
}

export function* addCharacterSaga() {
  yield takeLatest(ADD_CHARACTERS, addCharacter);
}

export default [addCharacterSaga];
