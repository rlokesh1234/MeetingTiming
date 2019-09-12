import {combineReducers} from 'redux';
import widgets from './business.reducers';

const reducer = combineReducers({
    widgets
});

export default reducer;