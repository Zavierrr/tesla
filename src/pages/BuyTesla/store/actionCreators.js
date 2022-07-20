import * as actionTypes from './constants'

// 修改总金额
export const changeSum = (data) => ({
    type: actionTypes.CHANGE_SUM,
    data
})
export const getSum = (data) => {
    return (dispatch) => {
        dispatch(changeSum(data))
    }
}

// 修改预估金额
export const changeEstimate = (data) => ({
    type: actionTypes.CHANGE_ESTIMATE,
    data
})
export const getEstimate = (data) => {
    return (dispatch) => {
        dispatch(changeEstimate(data))
    }
}
