import {
  ADD_CHARACTERS,
  ADD_CHARACTERS_SUCCESS,
  ADD_CHARACTERS_FAILURE,
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
    case ADD_CHARACTERS:
      return updateObject(state, {isFetching: true});
    case ADD_CHARACTERS_SUCCESS:
      console.log("data is added ", payload);
      return updateObject(state, {isFetching: false, items: payload});
    case ADD_CHARACTERS_FAILURE:
    return updateObject(state, {isFetching: false, items: []});
    default:
      return state;
  }
}

export default CharacterListReducer;
