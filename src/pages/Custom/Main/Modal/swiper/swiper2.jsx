import React from 'react'
import './index.css'
import Img from '@/assets/img/3.jpg'

export default function Slider2(props) {
    const {
        getShowModalCarDetailDispatch,
        getIsFixedDispatch
    } = props
    return (
        <div className='support_wrapper'>
            <div>
                <div
                    className='btn-close'
                    onClick={() => {
                        getShowModalCarDetailDispatch(false);
                        getIsFixedDispatch(false)
                    }}>
                    <i className='iconfont icon-guanbi'></i>
                </div>
                <div className='support_img'>
                    <img src={Img} alt="" />
                </div>
                <div className='title-wrap'>
                    <div className='support_title'>
                        <span>
                            基础版辅助驾驶功能
                        </span>
                    </div>
                </div>
                <div className="support_desc">
                    <span>
                        从 Tesla 购买的新车均标配基础版辅助驾驶功能，该功能可让车辆根据其他车辆与行人在行驶车道内
                        辅助驾驶员实施自动辅助转向、加速和制动。配合其它标配安全功能（例如自动紧急制动、前撞预警、
                        盲点碰撞警告等），帮助驾驶员应对枯燥繁复的操作环节，从而更好地享受驾驶乐趣。
                    </span>
                </div>
            </div>
        </div>
    )
}
