import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE
} from './constants';

export function fetchCharacters() {
  return {
    type: FETCH_CHARACTERS
  };
}

export function fetchCharactersSuccess(characters) {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters
  };
}

export function fetchCharactersFailure() {
  return {
    type: FETCH_CHARACTERS_FAILURE
  };
}
