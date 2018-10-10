import { combineReducers } from 'redux';
import characterListReducer from './containers/CharactersList/reducer';
/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer() {
  return combineReducers({
    characters: characterListReducer
  })
}
