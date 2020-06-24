import {combineReducers} from 'redux';
import dashboardReducer from './dashboardReducer';
import homepageReducer from './homePageReducer';
import { product, page, category } from './shopReducer';

const reducer = combineReducers({
    dashboard: dashboardReducer,
    homepage: homepageReducer,
    shopProduct: product,
    shopCategory: category,
    shopPage: page
})

export default reducer