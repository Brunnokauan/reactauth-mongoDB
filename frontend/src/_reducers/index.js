import { combineReducers } from 'redux';
import { authenctication } from './auth-reducer';
import { vendor } from './vendor-reducer';

const rootReducer = combineReducers({
    authenctication,
    vendor
});

export default rootReducer;