import * as actionTypes from './constants'

export const changeShowModalCalculator = (data) => ({
    type: actionTypes.CHANGE_SHOW_MODAL_CALCULATOR,
    data
})

export const getShowModalCalculator = (data) => {
    return (dispatch) => {
        dispatch(changeShowModalCalculator(data))
    }
}