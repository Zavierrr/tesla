import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import propTypes from 'prop-types'
import CLTC from './CLTC'
import ModalCarDetail from './Modal'

export default function Main({ carParams, showEdition, setShowEdition }) {
    const [visible, setVisible] = useState(false)
    const onModalClose = () => {
        console.log('modal closed')
        setVisible(false)
    }
    const selectLowerEdition = () => {
        setShowEdition('1')
    }
    const selectHigherEdition = () => {
        setShowEdition('2')
    }

    return (
        <Wrapper>
            {/* 汽车图片 */}
            <section className='main__section1'>
                <div className='main__section1_carImg'>
                    {
                        carParams.map(item => {
                            return (
                                showEdition == item.id && <img key={item.id} src={item.car_pic} alt="" />
                            )
                        })
                    }
                </div>
            </section>
            <section className='main__section2'>
                <div className="main__section2_title">
                    <h1>Model 3</h1>
                </div>
                <div className="main__section2_deadline">
                    {
                        carParams.map(item => {
                            return (
                                showEdition == item.id && <p key={item.id}>预计交付日期：{item.delivery_date} 周</p>
                            )
                        })
                    }
                </div>
                {/* 汽车参数 */}
                {
                    carParams.map(item => {
                        return (
                            showEdition == item.id &&
                            <div className="main__section2_param" key={item.id}>
                                <ol>
                                    <li>
                                        <div className='li-div'>
                                            <span>{item.range}</span>
                                            <span>公里</span>
                                        </div>
                                        <div className='param-desc'>
                                            <span>续航里程</span>
                                            <CLTC />
                                        </div>
                                    </li>
                                    <li>
                                        <div className='li-div'>
                                            <span>{item.top_speed}</span>
                                            <span >公里/时</span>
                                        </div>
                                        <div className='param-desc'>
                                            <span>最高时速</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='li-div'>
                                            <span>{item.duration}</span>
                                            <span>秒</span>
                                        </div>
                                        <div className='param-desc'>
                                            <span>百公里加速</span>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        )
                    })
                }
                {/* 电机驱动 */}
                <div className="main__section2_edition">
                    <div className="edition-desc">
                        <div className='edition-desc-title'>
                            <span>后轮驱动</span>
                        </div>
                        <div onClick={selectLowerEdition} className={showEdition == '1' ? 'current' : 'edition-desc-content'}>
                            <div className="edition-desc-name">
                                <span>Model 3</span>
                            </div>
                            <div className="edition-desc-price">
                                <span>￥ 279,900*</span>
                            </div>
                        </div>
                    </div>
                    <div className="edition-desc">
                        <div className='edition-desc-title'>
                            <span>双电机全轮驱动</span>
                        </div>
                        <div onClick={selectHigherEdition} className={showEdition == '2' ? 'current' : 'edition-desc-content'}>
                            <div className="edition-desc-name">
                                <span>Model 3 高性能版</span>
                            </div>
                            <div className="edition-desc-price">
                                <span>￥ 367,900</span>
                            </div>
                        </div>
                    </div>
                    <div className="edition-explanation">
                        {
                            showEdition == '1' ?
                                (<span>
                                    *此为补贴后起售价，由补贴前起售价 ¥290,988 扣除预估2022年新能源汽车补贴金额得出（预估私人购买补贴金额为 ¥11,088，
                                    预估非私人购买或用于营运的新能源乘用车补贴金额为 ¥7,761）。如果选配后的车辆价格高于 ¥300,000，
                                    则不享受上述新能源汽车补贴。最终补贴金额以车辆交付时政府发布的政策为准。
                                </span>) : ''
                        }
                    </div>
                </div>
                <div className="edition-detail" >
                    <button className='btn-edition-detail' onClick={() => setVisible(true)}>
                        <span>查看详情</span>
                    </button>
                </div>
            </section>
            <ModalCarDetail visible={visible} setVisible={setVisible} onModalClose={onModalClose} />
        </Wrapper>
    )
}

Main.propTypes = {
    carParams: propTypes.array.isRequired
}