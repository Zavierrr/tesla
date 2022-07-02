import React, { useState } from 'react'
import { Wrapper } from './style'
import ModalCalculator from './Modal'
import Dialogue from './Dialogue'

export default function Footer({ carParams, showEdition }) {
    const [visible, setVisible] = useState(false)
    const onModalClose = () => {
        console.log('modal closed')
        setVisible(false)
    }

    return (
        <Wrapper>
            <div className='calculator'>
                <div className='calculator-icon' onClick={() => setVisible(true)}>
                    <i className='iconfont icon-xiangshang'></i>
                </div>
                <div className='calculator-desc' onClick={() => setVisible(true)}>
                    <div className='calculator-desc-top'>
                        {
                            carParams.map(item => {
                                return (
                                    showEdition == item.id && <span key={item.id} className='calculator-price1'>￥ {item.price}</span>
                                )
                            })
                        }
                        <span>实际价格</span>
                    </div>
                    <div>
                        {
                            carParams.map(item => {
                                return (
                                    showEdition == item.id && <span key={item.id} className='calculator-price1'>￥ {item.another_price}</span>
                                )
                            })
                        }
                        <span>减去节省的燃油费</span>
                    </div>
                </div>
            </div>
            <Dialogue />
            <ModalCalculator visible={visible} setVisible={setVisible} onModalClose={onModalClose} />
        </Wrapper >
    )
}