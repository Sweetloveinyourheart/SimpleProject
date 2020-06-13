import * as types from '../actions/types';

export default (state ={}, actions) => {
    switch (actions.type) {
        case types.SWITCH_TO_ADD:
            return actions.state
        case types.SWITCH_TO_REMOVE:
            return actions.state
        case types.SWITCH_TO_UPDATE:
            return actions.state
        default:
            return state;
    }
}