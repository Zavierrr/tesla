import React from 'react'
import './index.css'
import Img from '@/assets/img/4.jpg'

export default function Slider4(props) {
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
                            充电便利
                        </span>
                    </div>
                </div>
                <div className="support_desc">
                    <span>
                        Tesla 超级充电网络已覆盖全国主要城市、高速公路和热门旅游线路，并且仍在不断扩展中。我们还为车主提供一站式家庭充电解决方案，
                        即「家庭充电服务包」，包含一个壁挂式充电连接器设备、电力环境勘测服务、基础安装服务和售后保障，只需每晚将车辆连接至充电桩，
                        第二天清晨即可满电出发。
                    </span>
                </div>
            </div>
        </div>
    )
}
