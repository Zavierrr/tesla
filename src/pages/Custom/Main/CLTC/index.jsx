import React, { useState } from 'react'
import { Wrapper, Content } from './style'
import { Popup, Button } from 'antd-mobile'

export default function CLTC(props) {
    const [visible1, setVisible1] = useState(false)
    const { getIsFixedDispatch } = props

    return (
        <Wrapper>
            <Button className='btn-CLTC'
                onClick={() => {
                    setVisible1(true)
                    getIsFixedDispatch(true)
                }}
            >
                CLTC综合工况
            </Button>

            <Popup
                visible={visible1}
                showCloseButton
                maskStyle={{
                    filter: 'blur(5px)',
                    opacity: 0.5,
                }}
                bodyStyle={{
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    minHeight: '40vh',
                }}
                onClose={() => {
                    setVisible1(false)
                    getIsFixedDispatch(false)
                }}
                onMaskClick={() => {
                    setVisible1(false)
                    getIsFixedDispatch(false)
                }}
            >
                {mockContent()}
            </Popup>
        </Wrapper>
    )
}
const mockContent = () => {
    return (
        <Content>
            <div className="CLTC_title">
                <span>
                    续航里程
                </span>
            </div>
            <div className="CLTC_desc">
                <span>
                    车辆续航里程数据是基于新国标 GB/T 18386.1-2021 CLTC-P 综合工况得出的测试结果。
                    实际续航里程会因车辆配置、电池使用时长和状态、驾驶习惯及操作、环境和气候状况等因素的影响而有所不同。
                </span>
            </div>
        </Content>
    )
}

