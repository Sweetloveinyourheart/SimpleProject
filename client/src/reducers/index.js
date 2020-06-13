import {combineReducers} from 'redux';
import dashboardReducer from './dashboardReducer';

const reducer = combineReducers({
    dashboard: dashboardReducer
})

export default reducer