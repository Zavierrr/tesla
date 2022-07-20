import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import Main from './Main'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { getSum, getEstimate } from '../BuyTesla/store/actionCreators'
import { number } from 'prop-types'
import Order from './Order'
import Design from './Design'

function Custom(props) {
    const {
        carParamsList,
        showEdition,
        showModalCarDetail,
        isFixed,
        color,
        wheel,
        decoration,
        sum,
        estimate
    } = props
    const {
        getCarParamsDispatch,
        getShowEditionDispatch,
        getShowModalCarDetailDispatch,
        getIsFixedDispatch,
        getColorDispatch,
        getWheelDispatch,
        getDecorationDispatch,
        getSumDispatch,
        getEstimateDispatch
    } = props;

    useEffect(() => {
        getCarParamsDispatch()
    }, [carParamsList])

    return (
        <Wrapper style={isFixed ? { position: 'fixed', filter: 'blur(20px)' } : {}}>
            <Main
                carParamsList={carParamsList}
                showEdition={showEdition}
                color={color}
                wheel={wheel}
                decoration={decoration}
                getIsFixedDispatch={getIsFixedDispatch}
                getShowEditionDispatch={getShowEditionDispatch}
                getShowModalCarDetailDispatch={getShowModalCarDetailDispatch}
                showModalCarDetail={showModalCarDetail}
                getWheelDispatch={getWheelDispatch} />
            <Design
                carParamsList={carParamsList}
                showEdition={showEdition}
                color={color}
                wheel={wheel}
                decoration={decoration}
                sum={sum}
                estimate={estimate}
                getShowEditionDispatch={getShowEditionDispatch}
                getColorDispatch={getColorDispatch}
                getWheelDispatch={getWheelDispatch}
                getDecorationDispatch={getDecorationDispatch}
                getSumDispatch={getSumDispatch}
                getEstimateDispatch={getEstimateDispatch} />
            <Order
                carParamsList={carParamsList}
                showEdition={showEdition}
                getIsFixedDispatch={getIsFixedDispatch}
                getShowEditionDispatch={getShowEditionDispatch}
            />
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        carParamsList: state.custom.carParamsList,
        showEdition: state.custom.showEdition,
        showModalCarDetail: state.custom.showModalCarDetail,
        isFixed: state.custom.isFixed,
        color: state.custom.color,
        wheel: state.custom.wheel,
        decoration: state.custom.decoration,
        sum: state.buyTesla.sum,
        estimate: state.buyTesla.estimate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCarParamsDispatch() {
            dispatch(actionCreators.getCarParamsList())
        },
        getShowEditionDispatch(data) {
            dispatch(actionCreators.getShowEdition(data))
        },
        getShowModalCarDetailDispatch(data) {
            dispatch(actionCreators.getShowModalCarDetail(data))
        },
        getIsFixedDispatch(data) {
            dispatch(actionCreators.getIsFixed(data))
        },
        getColorDispatch(data) {
            dispatch(actionCreators.getColor(data))
        },
        getWheelDispatch(data) {
            dispatch(actionCreators.getWheel(data))
        },
        getDecorationDispatch(data) {
            dispatch(actionCreators.getDecoration(data))
        },
        getSumDispatch(data) {
            dispatch(getSum(data))
        },
        getEstimateDispatch(data) {
            dispatch(getEstimate(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Custom)