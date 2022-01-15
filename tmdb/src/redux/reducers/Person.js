import {
  GET_KNOWN_FOR,
  GET_PERSON_DETAIL,
  TOGGLE_IS_LOADING_KNOWN_FOR,
  TOGGLE_IS_LOADING_PERSON_DETAIL,
} from "./ConstantActions";

const initialState = {
  personDetail: null,
  knownFor: null,
  isLoadingPersonDetail: false,
  isLoadingKnownFor: false,
};

const Person = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PERSON_DETAIL:
      return {
        ...state,
        personDetail: payload,
      };
    case GET_KNOWN_FOR:
      return {
        ...state,
        knownFor: payload,
      };
    case TOGGLE_IS_LOADING_PERSON_DETAIL:
      return {
        ...state,
        isLoadingPersonDetail: !state.isLoadingPersonDetail,
      };
    case TOGGLE_IS_LOADING_KNOWN_FOR:
      return {
        ...state,
        isLoadingKnownFor: !state.isLoadingKnownFor,
      };
    default:
      return state;
  }
};

export default Person;
