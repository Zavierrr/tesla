import * as actionTypes from './constants'

const defaultState = {
    showModalCalculator: false
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SHOW_MODAL_CALCULATOR:
            return {
                ...state,
                showModalCalculator: action.data
            }
        default:
            return state
    }
}