import { createSelector } from 'reselect';

export const selectCharacter = state => {
  console.log(state);
  return state.characters;
};

export const makeSelectCharacters = () => {
  return createSelector(selectCharacter, characterState =>
    characterState.items
  );
};
