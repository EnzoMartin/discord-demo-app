import Constants from '../constants';
import Models from '../models';

const initialState = {
  hidden: window.document.hidden || false
};

export function reducer(state = initialState, action){
  let newState = {};

  switch(action.type){
    case Constants.SET_PAGE_HIDDEN:
      newState = new Models.Document(action.data);
      state = Object.assign({}, state, newState);
      break;
    default:
      break;
  }

  return state;
}
