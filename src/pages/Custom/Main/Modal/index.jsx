import React from 'react'
import Modal from '@/components/common/Modal/ModalCarDetail/modal'
import { Swiper } from 'antd-mobile'
// import './index.css'
import Swiper1 from './swiper/swiper1'
import Swiper2 from './swiper/swiper2'
import Swiper3 from './swiper/swiper3'
import Swiper4 from './swiper/swiper4'
import Swiper5 from './swiper/swiper5'

export default function ModalCarDetail(props) {
    const {
        showModalCarDetail,
        getShowModalCarDetailDispatch,
        onModalClose,
        getIsFixedDispatch
    } = props.params
    const func = {
        showModalCarDetail: showModalCarDetail,
        onModalClose: onModalClose,
        getShowModalCarDetailDispatch: getShowModalCarDetailDispatch,
        getIsFixedDispatch: getIsFixedDispatch
    }
    return (
        <Modal
            visible={showModalCarDetail}
            title=""
            onClose={onModalClose}
        >
            <Swiper className='aaa' style={{
                '--track-padding': ' 0 0 25px',
                borderRadius: '16px'
            }}>
                <Swiper.Item style={{ width: '90%', margin: 'auto' }}>
                    <Swiper1
                        func={func} />
                </Swiper.Item>
                <Swiper.Item style={{ width: '90%', margin: 'auto' }}>
                    <Swiper2
                        func={func} />
                </Swiper.Item>
                <Swiper.Item style={{ width: '90%', margin: 'auto' }}>
                    <Swiper3
                        func={func} />
                </Swiper.Item>
                <Swiper.Item style={{ width: '90%', margin: 'auto' }}>
                    <Swiper4
                        func={func} />
                </Swiper.Item>
                <Swiper.Item style={{ width: '90%', margin: 'auto' }}>
                    <Swiper5
                        func={func} />
                </Swiper.Item>
            </Swiper>
        </Modal>
    )
}
