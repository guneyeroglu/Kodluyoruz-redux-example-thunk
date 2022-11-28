import * as constants from '../constants';

const INITIAL_STATE = {
  characterList: [],
  locationList: [],
};

export const project = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.GET_CHARACTER:
      return { ...state, characterList: action.payload };
    case constants.GET_LOCATION:
      return { ...state, locationList: action.payload };
    default:
      return state;
  }
};
