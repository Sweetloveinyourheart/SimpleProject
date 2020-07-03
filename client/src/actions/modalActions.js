import * as types from './types'

export const closeModal = () => {
    return dispatch => {
        dispatch({
            type: types.ACTIVE_MODAL,
            display: "none"
        })
    }
}
