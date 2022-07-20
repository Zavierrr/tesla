import * as actionTypes from './constants'

const defaultState = {
    carParamsList: [],
    showEdition: '1',
    showModalCarDetail: false,
    isFixed: false,
    color: '1',
    wheel: '1',
    decoration: '1'
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
        case actionTypes.CHANGE_COLOR:
            return {
                ...state,
                color: action.data
            }
        case actionTypes.CHANGE_WHEEL:
            return {
                ...state,
                wheel: action.data
            }
        case actionTypes.CHANGE_DECORATION:
            return {
                ...state,
                decoration: action.data
            }
        default:
            return state
    }
}