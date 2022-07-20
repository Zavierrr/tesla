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

// 修改汽车版本
export const changeShowEdition = (data) => ({
    type: actionTypes.CHANGE_SHOW_EDITION,
    data
})
export const getShowEdition = (data) => {
    return (dispatch) => {
        dispatch(changeShowEdition(data))
    }
}

// 修改汽车详情显示状态
export const changeShowModalCarDetail = (data) => ({
    type: actionTypes.CHANGE_SHOW_MODAL_CAR_DETAIL,
    data
})
export const getShowModalCarDetail = (data) => {
    return (dispatch) => {
        dispatch(changeShowModalCarDetail(data))
    }
}

// 弹层弹出，固定底层界面
export const changeIsFixed = (data) => ({
    type: actionTypes.CHANGE_IS_FIXED,
    data
})
export const getIsFixed = (data) => {
    return (dispatch) => {
        dispatch(changeIsFixed(data))
    }
}

// 修改颜色
export const changeColor = (data) => ({
    type: actionTypes.CHANGE_COLOR,
    data
})
export const getColor = (data) => {
    return (dispatch) => {
        dispatch(changeColor(data))
    }
}

// 修改轮毂
export const changeWheel = (data) => ({
    type: actionTypes.CHANGE_WHEEL,
    data
})
export const getWheel = (data) => {
    return (dispatch) => {
        dispatch(changeWheel(data))
    }
}

// 修改内饰
export const changeDecoration = (data) => ({
    type: actionTypes.CHANGE_DECORATION,
    data
})
export const getDecoration = (data) => {
    return (dispatch) => {
        dispatch(changeDecoration(data))
    }
}
