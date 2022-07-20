import * as actionTypes from './constants'

const defaultState = {
    sum: 0,
    estimate: 0
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SUM:
            return {
                ...state,
                sum: action.data
            }
        case actionTypes.CHANGE_ESTIMATE:
            return {
                ...state,
                estimate: action.data
            }
        default:
            return state
    }
}