import * as types  from './../actions/types'

export default (state = {display: "none", content: null}, actions) => {
    switch (actions.type) {
        case types.ACTIVE_MODAL:
            return { display: actions.display, content: actions.content}
        case types.CLOSE_MODAL:
            return { display: actions.display, content: null }
        default:
            return state
    }
}