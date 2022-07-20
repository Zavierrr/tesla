import React from 'react'
import { useNavigate } from 'react-router'
import { Wrapper } from './style'

export default function Order() {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <div className='order_wrapper'>
                <div className='order_title'>
                    <span>订购您的 Model 3</span>
                </div>
                <div className='order_date'>
                    <span>预计交付日期：16-20 周</span>
                </div>
                <div className='order_btn'>
                    <button
                        onClick={() => {
                            navigate("/buy_tesla")
                            window.scrollTo(0, 0)
                        }}>
                        下一步，付款
                    </button>
                </div>
                <div className='order_desc'>
                    <span>具体交付日期根据车辆配置和提车地点会有所差异</span>
                </div>
            </div>
        </Wrapper>
    )
}
