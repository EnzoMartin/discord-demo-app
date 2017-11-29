import store from './store';
import Constants from './constants';

let hidden = 'hidden';
let visibilityChange = 'visibilitychange';

if(typeof document.msHidden !== 'undefined'){
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if(typeof document.webkitHidden !== 'undefined'){
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

function handleVisibilityChange(){
  store.dispatch({
    type: Constants.SET_PAGE_HIDDEN,
    data: document[hidden]
  });
}

// Page events
document.addEventListener(visibilityChange, handleVisibilityChange);
