import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import { carPicture } from '@/assets/img/carPicture/carPicture'
import { useNavigate } from 'react-router'
import classnames from 'classnames'
import { color_desc, wheel_desc, decoration_desc } from '@/assets/otherConfig/otherConfig'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from '../Custom/store'

function BuyTesla(props) {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const {
        carParamsList,
        showEdition,
        color,
        wheel,
        decoration,
        sum,
        estimate
    } = props

    // // 设置多个变量方便计算
    let picNumber = showEdition + color + wheel;
    let decNumber = showEdition + decoration;

    // 计算加了几个装饰，用来判断是否有新能源汽车补贴，大于1则没有
    let count = 0;
    if (showEdition == '1') {
        if (color != '1') count++;
        if (wheel != '1') count++;
        if (decoration != '1') count++;
    }

    return (
        // 当页面刷新时，carParamsList 为空，因此需要跳转到主页
        carParamsList.length != 0 ?
            <Wrapper show={show} showEdition={showEdition}>
                <div className='change_config_wrapper'
                    onClick={() => navigate("/")}
                >
                    <span className='icon_wrapper'>
                        <i className='iconfont icon-xiangshang'></i>
                    </span>
                    <span>更改配置</span>
                </div>
                <div className='buyTesla_IMG'>
                    <img src={carPicture[picNumber]} alt="" />
                </div>
                <div className='buyTesla_container'>
                    <div className='buyTesla_container_title'>
                        <span>您的 Model 3</span>
                        <span>预计交付日期：16-20 周</span>
                    </div>
                    <div className={classnames('detail_wrapper', { show_more: show })}>
                        <div className='buyTesla_detail'>
                            <ol>
                                <li>
                                    <span>{carParamsList[showEdition - 1].title}</span>
                                    <span>￥ {carParamsList[showEdition - 1].pre_price}</span>
                                </li>
                                {showEdition == '2' &&
                                    <li>
                                        <span>竞速套件</span>
                                        <span>包括</span>
                                    </li>
                                }
                                <li>
                                    <span>{color_desc[color]}</span>
                                    <span>{color == '1' ? '包括' : '¥ 8,000'}</span>
                                </li>
                                <li>
                                    <span>{wheel_desc[wheel]}</span>
                                    <span>{wheel == '1' ? '包括' : wheel == '2' ? '¥ 6,000' : '包括'}</span>
                                </li>
                                {showEdition == '2' &&
                                    <>
                                        <li>
                                            <span>高级制动装置</span>
                                            <span>包括</span>
                                        </li>
                                        <li>
                                            <span>碳纤维扰流板</span>
                                            <span>包括</span>
                                        </li>
                                        <li>
                                            <span>高级踏板</span>
                                            <span>包括</span>
                                        </li>
                                    </>
                                }
                                <li>
                                    <span>{decoration_desc[decNumber]}</span>
                                    <span>{decoration == '1' ? '包括' : '¥ 8,000'}</span>
                                </li>
                                <li>
                                    <span>基础版辅助驾驶功能</span>
                                    <span>包括</span>
                                </li>
                                <li>
                                    <span>高级车载娱乐服务包 30 天免费试用</span>
                                    <span>包括</span>
                                </li>
                            </ol>
                        </div>
                        <div className='hide_detail'>
                            <div className='hide_detail_section1'>
                                {showEdition == '1' && count <= 1 &&
                                    <div>
                                        <span>新能源汽车补贴</span>
                                        <span> - ¥ 11,088</span>
                                    </div>
                                }
                                <div>
                                    <span>车辆价格</span>
                                    <span className='price_final'>¥ {sum}</span>
                                </div>
                            </div>
                            <div className='hide_detail_section2'>
                                <div>
                                    <span>预估燃油费节省金额</span>
                                    <span> - ¥ 77,500</span>
                                </div>
                            </div>
                            <div className='hide_detail_section3'>
                                <div>
                                    <span>车辆价格 减去预估节省费用</span>
                                    <span>¥ {estimate}</span>
                                </div>
                                <button onClick={() => alert('用户中心正在开发中，敬请期待:)')}>预估节省费用是如何计算的</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='hide_detail_btn' onClick={() => setShow(!show)}>
                            <span>
                                {show == false && <i className='iconfont icon-jiahao'></i>}
                                {show == true && <i className='iconfont icon-jianshao'></i>}
                            </span>
                            <span>{show == false ? '显示详情' : '隐藏详情'}</span>
                        </div>
                    </div>
                    <div>
                        <div className='pre_cash_wrapper'>
                            <div className='pre_cash'>
                                <span> 第一笔付款 </span>
                                <span> ¥ 1,000 </span>
                            </div>
                            <div className='pre_cash_attention'>
                                <span>不可退款，不可转让</span>
                            </div>
                        </div>
                        <div className='order_now'>
                            <button onClick={() => alert('用户中心正在开发中，敬请期待:)')}>立即下单</button>
                        </div>
                        <div className='order_help'>
                            <span>需要协助？请致电 400-919-0707</span>
                        </div>
                    </div>
                </div>
            </Wrapper>
            : useEffect(() => (navigate("/")), [])
    )
}

const mapStateToProps = (state) => {
    return {
        carParamsList: state.custom.carParamsList,
        showEdition: state.custom.showEdition,
        color: state.custom.color,
        wheel: state.custom.wheel,
        decoration: state.custom.decoration,
        sum: state.buyTesla.sum,
        estimate: state.buyTesla.estimate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyTesla)