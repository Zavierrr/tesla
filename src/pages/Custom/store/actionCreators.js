import { getCarParamsRequest } from "@/api/request";
import * as actionTypes from './constants'

export const changeCarParamsList = (data) => ({
    type: actionTypes.CHANGE_CAR_PARAMS_LIST,
    data
})

export const getCarParamsList = () => {
    return (dispatch) => {
        getCarParamsRequest().then(data => {
            dispatch(changeCarParamsList(data))
            // dispatch(changeEnterLoading(false))
        })
    }
}

export const changeShowEdition = (data) => ({
    type: actionTypes.CHANGE_SHOW_EDITION,
    data
})

export const getShowEdition = (data) => {
    return (dispatch) => {
        dispatch(changeShowEdition(data))
    }
}

export const changeShowModalCarDetail = (data) => ({
    type: actionTypes.CHANGE_SHOW_MODAL_CAR_DETAIL,
    data
})

export const getShowModalCarDetail = (data) => {
    return (dispatch) => {
        dispatch(changeShowModalCarDetail(data))
    }
}

export const changeIsFixed = (data) => ({
    type: actionTypes.CHANGE_IS_FIXED,
    data
})

export const getIsFixed = (data) => {
    return (dispatch) => {
        dispatch(changeIsFixed(data))
    }
}