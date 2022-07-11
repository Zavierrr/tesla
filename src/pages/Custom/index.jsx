import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import Main from './Main'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'

function Custom(props) {
    const {
        carParamsList,
        showEdition,
        showModalCarDetail,
        isFixed } = props
    const {
        getCarParamsDispatch,
        getShowEditionDispatch,
        getShowModalCarDetailDispatch,
        getIsFixedDispatch } = props;
    useEffect(() => {
        getCarParamsDispatch()

    }, [])
    return (
        <Wrapper style={isFixed ? { position: 'fixed' } : {}}>
            {/* <Main carParams={props.carParams} showEdition={props.showEdition} setShowEdition={props.setShowEdition} /> */}
            <Main
                carParamsList={carParamsList}
                showEdition={showEdition}
                getIsFixedDispatch={getIsFixedDispatch}
                getShowEditionDispatch={getShowEditionDispatch}
                getShowModalCarDetailDispatch={getShowModalCarDetailDispatch}
                showModalCarDetail={showModalCarDetail} />

        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        carParamsList: state.custom.carParamsList,
        showEdition: state.custom.showEdition,
        showModalCarDetail: state.custom.showModalCarDetail,
        isFixed: state.custom.isFixed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCarParamsDispatch() {
            dispatch(actionCreators.getCarParamsList())
            console.log('------======1111');
        },
        getShowEditionDispatch(data) {
            dispatch(actionCreators.getShowEdition(data))
        },
        getShowModalCarDetailDispatch(data) {
            dispatch(actionCreators.getShowModalCarDetail(data))
        },
        getIsFixedDispatch(data) {
            dispatch(actionCreators.getIsFixed(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Custom)