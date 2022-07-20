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
    const { showModalCarDetail } = props
    const {
        getShowModalCarDetailDispatch,
        onModalClose,
        getIsFixedDispatch
    } = props
    return (
        <Modal
            visible={showModalCarDetail}
            title=""
            onClose={onModalClose}
        >
            <Swiper className='aaa' style={{
                '--track-padding': ' 0 0 25px',
                // '--track-color': 'white',
                borderRadius: '16px'
                // background: 'red',
                // padding: '0 20px'
            }}>
                <Swiper.Item style={{ width: '90%', margin: 'auto' }}>
                    <Swiper1
                        getShowModalCarDetailDispatch={getShowModalCarDetailDispatch}
                        getIsFixedDispatch={getIsFixedDispatch} />
                </Swiper.Item>
                <Swiper.Item style={{ width: '90%', margin: 'auto' }}>
                    <Swiper2
                        getShowModalCarDetailDispatch={getShowModalCarDetailDispatch}
                        getIsFixedDispatch={getIsFixedDispatch} />
                </Swiper.Item>
                <Swiper.Item style={{ width: '90%', margin: 'auto' }}>
                    <Swiper3
                        getShowModalCarDetailDispatch={getShowModalCarDetailDispatch}
                        getIsFixedDispatch={getIsFixedDispatch} />
                </Swiper.Item>
                <Swiper.Item style={{ width: '90%', margin: 'auto' }}>
                    <Swiper4
                        getShowModalCarDetailDispatch={getShowModalCarDetailDispatch}
                        getIsFixedDispatch={getIsFixedDispatch} />
                </Swiper.Item>
                <Swiper.Item style={{ width: '90%', margin: 'auto' }}>
                    <Swiper5
                        getShowModalCarDetailDispatch={getShowModalCarDetailDispatch}
                        getIsFixedDispatch={getIsFixedDispatch} />
                </Swiper.Item>
            </Swiper>
        </Modal>
    )
}
