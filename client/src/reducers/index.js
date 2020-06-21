import {combineReducers} from 'redux';
import dashboardReducer from './dashboardReducer';
import homepageReducer from './homePageReducer';
import shopReducer from './shopReducer';

const reducer = combineReducers({
    dashboard: dashboardReducer,
    homepage: homepageReducer,
    shop: shopReducer
})

export default reducer