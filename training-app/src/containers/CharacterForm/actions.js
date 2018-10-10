import {
  ADD_CHARACTERS,
  ADD_CHARACTERS_SUCCESS,
  ADD_CHARACTERS_FAILURE
} from './constants';

export function addCharacters(character) {
  return {
    type: ADD_CHARACTERS,
    payload: character
  };
}

export function addCharactersSuccess(characters) {
  return {
    type: ADD_CHARACTERS_SUCCESS,
    payload: characters
  };
}

export function addCharactersFailure() {
  return {
    type: ADD_CHARACTERS_FAILURE
  };
}
