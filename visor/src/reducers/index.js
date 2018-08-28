import {combineReducers} from 'redux';
import entityReducer from './EntityReducer';
import userReducer from './UserReducer';

export default combineReducers({
    user: userReducer,
    entity: entityReducer
})