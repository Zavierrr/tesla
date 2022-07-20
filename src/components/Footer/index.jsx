import React, { useState } from 'react'
import { Wrapper } from './style'
import ModalCalculator from './Modal'
import Dialogue from './Dialogue'
import { getShowModalCalculator } from './store/actionCreators'
import { actionCreators } from '@/pages/Custom/store/index'
import { connect } from 'react-redux'

function Footer(props) {
    const {
        carParamsList,
        showEdition,
        showModalCalculator,
        sum,
        estimate
    } = props

    const {
        getShowModalCalculatorDispatch,
        getIsFixedDispatch
    } = props

    const onModalClose = () => {
        getShowModalCalculatorDispatch(false)
        getIsFixedDispatch(false)
    }

    return (
        <Wrapper>
            <div className='calculator'>
                <div
                    className='calculator-icon'
                    onClick={() => {
                        getShowModalCalculatorDispatch(true)
                        getIsFixedDispatch(true)
                    }}>
                    <i className='iconfont icon-xiangshang'></i>
                </div>
                <div
                    className='calculator-desc'
                    onClick={() => {
                        getShowModalCalculatorDispatch(true)
                        getIsFixedDispatch(true)
                    }}>
                    <div className='calculator-desc-top'>
                        {/* {
                            carParamsList.map(item => {
                                return (
                                    showEdition == item.id && <span key={item.id} className='calculator-price1'>￥ {item.price}</span>
                                )
                            })
                        } */}
                        <span className='calculator-price1'>￥ {sum}</span>
                        <span>实际价格</span>
                    </div>
                    <div>
                        {/* {
                            carParamsList.map(item => {
                                return (
                                    showEdition == item.id && <span key={item.id} className='calculator-price1'>￥ {item.another_price}</span>
                                )
                            })
                        } */}
                        <span className='calculator-price1'>￥ {estimate}</span>
                        <span>减去节省的燃油费</span>
                    </div>
                </div>
            </div>
            <Dialogue getIsFixedDispatch={getIsFixedDispatch} />
            <ModalCalculator
                sum={sum}
                estimate={estimate}
                showModalCalculator={showModalCalculator}
                getShowModalCalculatorDispatch={getShowModalCalculatorDispatch}
                getIsFixedDispatch={getIsFixedDispatch}
                onModalClose={onModalClose} />
        </Wrapper >
    )
}

const mapStateToProps = (state) => {
    return {
        carParamsList: state.custom.carParamsList,
        showEdition: state.custom.showEdition,
        showModalCalculator: state.footer.showModalCalculator,
        sum: state.buyTesla.sum,
        estimate: state.buyTesla.estimate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getShowModalCalculatorDispatch(data) {
            dispatch(getShowModalCalculator(data))
        },
        getIsFixedDispatch(data) {
            dispatch(actionCreators.getIsFixed(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)