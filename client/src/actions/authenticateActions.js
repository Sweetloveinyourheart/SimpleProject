import * as types from './types'
import axios from 'axios'

export const login = (account) => {
    return async dispatch => {
        try {
            await axios.post('/user/signin', account)
            dispatch({
                type: types.LOGIN_SUCCESS,
                success: true,
                error: null
            })
        } catch (error) {
            dispatch({
                type: types.LOGIN_FAILED,
                success: false,
                error
            })
        }
        

    }
}