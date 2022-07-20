import React from 'react'
import './index.css'
import Img from '@/assets/img/5.jpg'

export default function Slider3(props) {
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
                            大容量储物空间
                        </span>
                    </div>
                </div>
                <div className="support_desc">
                    <span>
                        通过 Tesla 手机应用程序，可以实现无钥匙驾驶，以及远程管理 Tesla 车辆，例如查看续航里程和充电状态，
                        开启车载空调、实时 GPS 定位等。
                    </span>
                </div>
            </div>
        </div>
    )
}
