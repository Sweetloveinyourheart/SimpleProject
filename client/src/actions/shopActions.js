import * as types from './types';
import axios from 'axios';

export const getShirtProduct = () => {
    return async dispatch => {
        try {
            
        } catch (error) {
            dispatch({
                type: types,
                error
            })
        }
    }
}