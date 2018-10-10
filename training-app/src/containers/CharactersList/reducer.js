import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from './constants';

const initialState = {
  isFetching: false,
  items: []
};

const updateObject = (oldObject, updatedProperties) => {
  return {
      ...oldObject,
      ...updatedProperties
  };
};

function CharacterListReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_CHARACTERS:
      return updateObject(state, {isFetching: true});
    case FETCH_CHARACTERS_SUCCESS:
      console.log("data is loaded ", payload);
      return updateObject(state, {isFetching: false, items: payload});
    case FETCH_CHARACTERS_FAILURE:
    return updateObject(state, {isFetching: false, items: []});
    default:
      return state;
  }
}

export default CharacterListReducer;
