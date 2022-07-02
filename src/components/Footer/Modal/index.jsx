import React from 'react'
import Modal from '@/components/common/Modal/ModalCalculator/modal'
import './index.css'
import { useState } from 'react'

export default function ModalCalculator(props) {
    const { visible, setVisible, onModalClose } = props
    const [active, setActive] = useState('1')
    const showActive = (param) => {
        setActive(param)
    }
    return (
        <Modal
            visible={visible}
            title="付款计算器"
            onClose={onModalClose}
        >
            <div>
                <div className='btn-close' onClick={() => setVisible(false)}>
                    <i className='iconfont icon-guanbi'></i>
                </div>
                <div className='tab'>
                    <div className={active == '1' ? 'active' : ''} onClick={() => showActive(1)}>
                        <span>现金</span>
                    </div>
                    <div className={active == '2' ? 'active' : ''} onClick={() => showActive(2)}>
                        <span>合作金融机构贷款</span>
                    </div>
                    <div className={active == '3' ? 'active' : ''} onClick={() => showActive(3)}>
                        <span>特斯拉融资租赁</span>
                    </div>
                </div>
                {
                    active == '1' &&
                    <div className='tab-list'>
                        <div className='cash'>
                            <span>现金价格</span>
                            <span>¥ 367,900</span>
                        </div>
                        <div className='bottom'>
                            <span className='span1'>价格包含估算增值税</span>
                            <span className='span1'>预估购置税减免金额: ¥ 32,558</span>
                            <span className='span2'>
                                <span>预估燃油费节省金额</span>
                                <span> - ¥ 77,500</span>
                            </span>
                            <span className='span2'>
                                <span>价格 减去预估节省费用</span>
                                <span>¥ 290,400</span>
                            </span>
                        </div>
                    </div>
                }
                {
                    active == '2' &&
                    <div className='tab-list'>
                        <div className='cash'>
                            <span>通过 Tesla 合作银行贷款购车。支付一定首付后，每月分期付款，直至付清全部车款。</span>
                        </div>
                    </div>
                }
                {
                    active == '3' &&
                    <div className='tab-list'>
                        <div className='cash'>
                            <span>通过特斯拉自营融资租赁购车，10%首付起，1至5年租赁期限灵活选择，每月分期支付租金并使用车辆，租赁期满后依约获得车辆所有权。</span>
                        </div>
                    </div>
                }
            </div>
        </Modal>
    )
}
