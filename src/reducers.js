import { reducer as documentReducer } from './reducers/document';
import { reducer as modalReducer } from './reducers/modal';

export default {
  page: documentReducer,
  modal: modalReducer
};
