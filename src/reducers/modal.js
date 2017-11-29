import Constants from '../constants';
import Models from '../models';

const initialState = {
  tabs: []
};

function saveToLocalStorage(data){
  localStorage.setItem('modals', JSON.stringify(data));
}

export function reducer(state = initialState, action){
  let newState = {};

  switch(action.type){
    case Constants.UPDATE_MODAL:
      const updatedModal = new Models.Modal(action.data);
      state = Object.assign({}, state, newState);
      break;
      break;
    case Constants.DELETE_MODAL:
      // find index splice from array
      break;
    case Constants.CREATE_MODAL:
      console.log('boop', state)
      newState.tabs = [].concat(state.tabs.slice(), new Models.Modal({}));
      state = Object.assign({}, state, newState);
      console.log('boop2', state)
      break;
    default:
      break;
  }

  saveToLocalStorage(newState);
  return state;
}

export function deleteTab(id){
  // trigger
}

export function updateTab(id,content){
  // trigger
}

export function createTab(){
  return {
    type: Constants.CREATE_MODAL
  }
}
