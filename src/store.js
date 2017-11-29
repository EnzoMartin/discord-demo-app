import { createStore, combineReducers } from 'redux';

import Constants from './constants';
import reducers from './reducers';

/**
 * Fetches previously saved data from storage
 * @param {String} key
 * @param {*} [value] Default value to use if nothing found
 * @returns {*}
 */
function loadFromStorage(key, value = {}){
  try {
    const storageValue = JSON.parse(localStorage.getItem(key));
    value = storageValue || value;
  } catch (err){
    // Nothing, use defaults
  }

  return value;
}

// State injection
const stateTriggers = [
  // [Constants.SET_PROJECTS, loadFromStorage(Stuff, {})]
];

const options = [
  combineReducers(reducers)
];

const store = createStore.apply(createStore, options);

window.store = store;

// Prime the store
stateTriggers.forEach((trigger) => {
  store.dispatch({
    type: trigger[0],
    data: trigger[1]
  });
});

export default store;
