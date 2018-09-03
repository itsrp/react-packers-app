import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './root-reducer';
import thunk from 'redux-thunk';

const store = createStore(
          reducer
    , {
        customer:{},
        order:{},
        invoice:{},
    }, 
    applyMiddleware(thunk)
  );
  
  export default store;
  