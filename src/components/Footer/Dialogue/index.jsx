import React, { useState } from 'react'
import { Wrapper, Content } from './style'
import { Popup, Space, Button, Mask } from 'antd-mobile'

export default function Dialogue() {
    const [visible1, setVisible1] = useState(false)

    return (
        <Wrapper>
            <Button className='btn-dialogue'
                onClick={() => {
                    setVisible1(true)
                }}
            >
                <i className='iconfont icon-duihua'></i>
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
                }}
                onMaskClick={() => {
                    setVisible1(false)
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
            <div className='header_question'>
                <span>常见问题</span>
            </div>
            <div className='que_main'>
                <div className="que_title">
                    <span>
                        在线咨询
                    </span>
                    <span>
                        请提供您的信息
                    </span>
                </div>
                <div className="que_info">
                    <div>
                        <div className='label-wrap'>
                            <label htmlFor="firstName"><span>名字</span></label>
                        </div>
                        <div className='input-wrap'>
                            <input type="text" id='firstName' />
                        </div>
                    </div>
                    <div>
                        <div className='label-wrap'>
                            <label htmlFor="lastName"><span>姓氏（可选）</span></label>
                        </div>
                        <div className='input-wrap'>
                            <input type="text" id='lastName' />
                        </div>
                    </div>
                    <div>
                        <div className='label-wrap'>
                            <label htmlFor="email"><span>电子邮件地址</span></label>
                        </div>
                        <div className='input-wrap'>
                            <input type="text" id='email' />
                        </div>
                    </div>
                    <div>
                        <div className='label-wrap'>
                            <label htmlFor="phone"><span>电话号码</span></label>
                        </div>
                        <div className='input-wrap'>
                            <input type="text" id='phone' />
                        </div>
                    </div>
                    <div>
                        <div className='label-wrap'>
                            <label htmlFor="postalCode"><span>邮政编码</span></label>
                        </div>
                        <div className='input-wrap'>
                            <input type="text" id='postalCode' />
                        </div>
                    </div>
                    <div>
                        <div className='label-wrap'>
                            <label htmlFor="getNews"><span>获取 Tesla 最新资讯</span></label>
                        </div>
                        <div className='input-wrap'>
                            <input type="text" id='getNews' />
                        </div>
                    </div>
                    <div>
                        <button className='btn-begin'>开启对话</button>
                    </div>
                </div>
            </div>
        </Content>
    )
}

