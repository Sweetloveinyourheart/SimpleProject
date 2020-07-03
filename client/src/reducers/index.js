import {combineReducers} from 'redux'
import { utilities, findAProduct, switchUtilities} from './dashboardReducer'
import {newestProduct, randomProduct} from './homePageReducer'
import { product, page, category } from './shopReducer'
import authReducer from './authenticateReducer'
import modalReducer from './modalReducer'

const reducer = combineReducers({
    
    dashboardUtilities: utilities,
    dashboardSwitchUtilities: switchUtilities,
    dashboardFindAProduct: findAProduct,
    
    homepageNewest: newestProduct,
    homepageRandom: randomProduct,   
    
    shopProduct: product,
    shopCategory: category,
    shopPage: page,
    
    modal: modalReducer,

    authenticate: authReducer


})

export default reducer