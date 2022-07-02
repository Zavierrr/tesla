import React from 'react'
import Modal from '@/components/common/Modal/ModalCarDetail/modal'
import './index.css'

export default function ModalCarDetail(props) {
    const { visible, setVisible, onModalClose } = props
    return (
        <Modal
            visible={visible}
            title=""
            onClose={onModalClose}
        >
            <div className='modal_compare-wrapper'>
                <div>
                    <div className='btn-close' onClick={() => setVisible(false)}>
                        <i className='iconfont icon-guanbi'></i>
                    </div>
                    <div className='title-wrap'>
                        <div className='icon-wrap'>
                            <i className='iconfont icon-xiangxia'></i>
                        </div>
                        <div className='endurance'><span>续航与性能</span></div>
                    </div>

                    <div className='edition-compare'>
                        <div className='compare-wrap'>
                            <div className='compare'>
                                <div className='compare-title'>
                                    <span>百公里加速</span>
                                </div>
                                <div className='compare-param'>
                                    <span>Model 3</span>
                                    <span>6.1 秒</span>
                                </div>
                                <div className='compare-param'>
                                    <span>Model 3 高性能版</span>
                                    <span>3.3 秒*</span>
                                </div>
                            </div>
                            <div className='compare'>
                                <div className='compare-title'>
                                    <span>续航里程</span>
                                </div>
                                <div className='compare-param'>
                                    <span>Model 3</span>
                                    <span>556 公里</span>
                                </div>
                                <div className='compare-param'>
                                    <span>Model 3 高性能版</span>
                                    <span>675 公里</span>
                                </div>
                            </div>
                            <div className='compare'>
                                <div className='compare-title'>
                                    <span>最高车速</span>
                                </div>
                                <div className='compare-param'>
                                    <span>Model 3</span>
                                    <span>225 公里/时</span>
                                </div>
                                <div className='compare-param'>
                                    <span>Model 3 高性能版</span>
                                    <span>261 公里/时</span>
                                </div>
                            </div>
                            <div className='compare'>
                                <div className='compare-title'>
                                    <span>动力总成</span>
                                </div>
                                <div className='compare-param'>
                                    <span>Model 3</span>
                                    <span>后轮驱动</span>
                                </div>
                                <div className='compare-param'>
                                    <span>Model 3 高性能版</span>
                                    <span>双电机全轮驱动</span>
                                </div>
                            </div>
                        </div>
                        <div className="compare_desc">
                            <div>
                                <span>追求极致高效</span>
                                <span>
                                    Tesla 将系统集成理念贯穿设计始终，从零开始打造出纯电动车型 Model 3。每一个车辆组件，包括电池、电机，
                                    甚至外观空气动力学设计等都经过专门优化以紧密配合其它组件，从而在提升动力性能的同时实现更高的效率。
                                </span>
                            </div>
                            <div>
                                <span>*减去了第一英尺的起步时间。</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Modal>
    )
}
