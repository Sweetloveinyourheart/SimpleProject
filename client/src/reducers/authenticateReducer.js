import * as types from '../actions/types'

export default (state = { isAuth: false, error: null }, actions) => {
    switch (actions.type) {
        case types.LOGIN_SUCCESS:
            return { isAuth: actions.success, error: actions.error }
        case types.LOGIN_FAILED:
            return { isAuth: actions.success, error: actions.error }
        default:
            return state
    }
}