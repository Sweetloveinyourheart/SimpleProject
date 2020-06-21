import * as types from './types';
import axios from 'axios';

export const getNewestProduct = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/api/home/latest');
            const { product } = response.data;
            dispatch({
                type: types.GET_NEWEST_PRODUCT,
                product
            })
        } catch (error) {
            dispatch({
                type: types.GET_NEWEST_PRODUCT_FAILED,
                error
            })
        }

    }

}

