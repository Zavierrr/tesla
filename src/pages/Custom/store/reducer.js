import * as actionTypes from './constants'

const defaultState = {
    carParamsList: [],
    showEdition: '1',
    showModalCarDetail: false,
    isFixed: false
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CAR_PARAMS_LIST:
            return {
                ...state,
                carParamsList: action.data
            }
        case actionTypes.CHANGE_SHOW_EDITION:
            return {
                ...state,
                showEdition: action.data
            }
        case actionTypes.CHANGE_SHOW_MODAL_CAR_DETAIL:
            return {
                ...state,
                showModalCarDetail: action.data
            }
        case actionTypes.CHANGE_IS_FIXED:
            return {
                ...state,
                isFixed: action.data
            }
        default:
            return state
    }
}