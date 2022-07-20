import React, { useEffect } from 'react'
import { Wrapper } from './style'
import { carPicture_color, carPicture_wheel, carPicture_decoration } from '@/assets/img/carPicture/carPicture'
import { color_desc, wheel_desc, decoration_desc } from '@/assets/otherConfig/otherConfig'

export default function Design(props) {
    const {
        carParamsList,
        showEdition,
        color,
        wheel,
        decoration,
        sum,
        estimate
    } = props
    const {
        getColorDispatch,
        getWheelDispatch,
        getDecorationDispatch,
        getSumDispatch,
        getEstimateDispatch
    } = props
    // 拼接 获得与配置中对应的图片序号
    // 设置多个变量方便计算
    let picNumber = showEdition + color + wheel;
    let decNumber = showEdition + decoration;
    let carMoney = showEdition == '1' ? 290988 : 367900;
    let colorMoney = color == '1' ? 0 : 8000;
    let wheelMoney = wheel == '1' ? 0 : wheel == '2' ? 6000 : 0;
    let decorationMoney = decoration == '1' ? 0 : 8000;
    // 计算加了几个装饰，用来判断是否有新能源汽车补贴，大于1则没有
    let count = 0;
    if (showEdition == '1') {
        if (color != '1') count++;
        if (wheel != '1') count++;
        if (decoration != '1') count++;
    }
    // console.log(count, 'QAQ');
    let total = carMoney + colorMoney + wheelMoney + decorationMoney;
    // 换车轮或内饰则没有新能源汽车补贴
    if (showEdition == '1' && count <= 1) {
        total -= 11088;
    }
    let estimateMoney = total - 77500;
    // 计算总价并转化为字符串，且在字符串中加“，”
    total = total.toString().split('');
    let tLength = total.length;
    total.splice(tLength - 3, 0, ',')
    total = total.join('')
    // 估算价格同上
    estimateMoney = estimateMoney.toString().split('');
    let eLength = estimateMoney.length;
    estimateMoney.splice(eLength - 3, 0, ',')
    estimateMoney = estimateMoney.join('')

    useEffect(() => {
        getSumDispatch(total)
        getEstimateDispatch(estimateMoney)
    }, [total, estimateMoney])

    return (
        <Wrapper>
            {/* 颜色 */}
            <div>
                <div className='color_select_IMG'>
                    {/* 选中配置好的图片 */}
                    <img src={carPicture_color[picNumber]} alt="" />
                </div>
                <div className='color_select'>
                    <div className='color_select_title'>
                        <span>选择颜色</span>
                    </div>
                    <div className='fivecolor_wrapper'>
                        <div
                            onClick={() => { getColorDispatch('1'); console.log(showEdition, '555'); }}
                            className={color == '1' ? 'active' : ''}
                        >
                            <img src="https://static-assets.tesla.cn/share/tesla_design_studio_assets/MODEL3/UI/Paint_Black.png?version=v0028d202207140307" alt="" />
                        </div>
                        <div
                            onClick={() => getColorDispatch('2')}
                            className={color == '2' ? 'active' : ''}
                        >
                            <img src="https://static-assets.tesla.cn/share/tesla_design_studio_assets/MODEL3/UI/Paint_White.png?version=v0028d202207140307" alt="" />
                        </div>
                        <div
                            onClick={() => getColorDispatch('3')}
                            className={color == '3' ? 'active' : ''}
                        >
                            <img src="https://static-assets.tesla.cn/share/tesla_design_studio_assets/MODEL3/UI/Paint_MidnightSilver.png?version=v0028d202207140307" alt="" />
                        </div>
                        <div
                            onClick={() => getColorDispatch('4')}
                            className={color == '4' ? 'active' : ''}
                        >
                            <img src="https://static-assets.tesla.cn/share/tesla_design_studio_assets/MODEL3/UI/Paint_Blue.png?version=v0028d202207140307" alt="" />
                        </div>
                        <div
                            onClick={() => getColorDispatch('5')}
                            className={color == '5' ? 'active' : ''}
                        >
                            <img src="https://static-assets.tesla.cn/share/tesla_design_studio_assets/MODEL3/UI/Paint_Red.png?version=v0028d202207140307" alt="" />
                        </div>
                    </div>
                    <div className='color_select_desc'>
                        <span>{color_desc[color]}</span>
                        <span>{color == '1' ? '包括' : '¥ 8,000'}</span>
                    </div>
                </div>
            </div>
            {/* 轮毂 */}
            <div>
                <div className='color_select_IMG'>
                    <img src={carPicture_wheel[picNumber]} alt="" />
                </div>
                <div className='color_select'>
                    <div className='color_select_title'>
                        <span>选择轮毂</span>
                    </div>
                    {showEdition == '1' &&
                        <div className='fivecolor_wrapper'>
                            <div
                                onClick={() => getWheelDispatch('1')}
                                className={wheel == '1' ? 'active' : ''}
                            >
                                <img src="https://static-assets.tesla.cn/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-18-aero.png?version=v0028d202207140307" alt="" />
                            </div>
                            <div
                                onClick={() => getWheelDispatch('2')}
                                className={wheel == '2' ? 'active' : ''}
                            >
                                <img src="https://static-assets.tesla.cn/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-19-sport.png?version=v0028d202207140307" alt="" />
                            </div>
                        </div>
                    }
                    {showEdition == '2' &&
                        <div className='fivecolor_wrapper'>
                            <div
                                className={wheel == '3' ? 'active' : ''}
                            >
                                <img src="https://static-assets.tesla.cn/share/tesla_design_studio_assets/MODEL3/UI/ui-option-selector_19ZeroGwithoutAero.png?version=v0028d202207140307" alt="" />
                            </div>
                        </div>
                    }
                    <div className='color_select_desc'>
                        <span>{wheel_desc[wheel]}</span>
                        <span>{wheel == '1' ? '包括' : wheel == '2' ? '¥ 6,000' : '包括'}</span>
                    </div>
                </div>
            </div>
            {/* 内饰 */}
            <div>
                <div className='color_select_IMG'>
                    <img src={carPicture_decoration[decoration]} alt="" />
                </div>
                <div className='color_select'>
                    <div className='color_select_title'>
                        <span>选择内饰</span>
                    </div>
                    <div className='fivecolor_wrapper'>
                        <div
                            onClick={() => getDecorationDispatch('1')}
                            className={decoration == '1' ? 'active' : ''}
                        >
                            <img src="https://static-assets.tesla.cn/share/tesla_design_studio_assets/MODEL3/UI/Interior_Black.png?version=v0028d202207140307" alt="" />
                        </div>
                        <div
                            onClick={() => getDecorationDispatch('2')}
                            className={decoration == '2' ? 'active' : ''}
                        >
                            <img src="https://static-assets.tesla.cn/share/tesla_design_studio_assets/MODEL3/UI/Interior_White.png?version=v0028d202207140307" alt="" />
                        </div>
                    </div>
                    <div className='color_select_desc'>
                        <span>{decoration_desc[decNumber]}</span>
                        <span>{decoration == '1' ? '包括' : '¥ 8,000'}</span>
                    </div>
                </div>
            </div>
        </Wrapper >
    )
}
