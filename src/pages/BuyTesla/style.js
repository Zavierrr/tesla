import styled from "styled-components";

export const Wrapper = styled.div`
    &.fly-enter, &.fly-appear{
        opacity: 0;
        /* 启用GPU加速 性能优化 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-appear-active{
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit{
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active{
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    padding: 80px 0 0;
    .change_config_wrapper{
        height: 40px;
        padding: 0 24px;
        display: flex;
        align-items: center;
        span{
            display: inline-block;
            color: #393c41;
            font-size: 12px;
            line-height: 14px;
        }
        .icon_wrapper{
            background-color: rgba(0, 0, 0, 0.05);
            border-radius: 50%;
            width: 21px;
            height: 21px;
            text-align: center;
            line-height: 21px;
            margin-right: 5px;
            i{
                font-size: 12px;
                font-weight: bolder;
                filter: blur(.4px);
            }
        }
    }
    .buyTesla_IMG{
        img{
            width: 100%;
        }
    }
    /* =================================================================== */
    .buyTesla_container{
        padding: 16px 24px;
        .buyTesla_container_title{
            padding: 16px 0;
            color: #171a20;
            font-size: 24px;
            text-align: center;
            span{
                display: block;
                &:last-child{
                    font-size: 14px;
                    color: #393c41;
                    padding: 6px 0 0;
                }
            }
        }
        .detail_wrapper{
            overflow: hidden;
            height: ${props => props.showEdition == '1' ? "185px" : "320px"};
            transition: ease-in-out .8s;
            &.show_more{
                /* 新能源补贴的有无影响高度，需要多重判断 */
                height: ${props => props.showEdition == '1' && props.count <= 1 ? "380px"
        : props.showEdition == '1' && props.count > 1 ? "350px" : "480px"};
                transition: ease-in-out .8s;
            }
            .buyTesla_detail{
                color: #393c41;
                font-size: 14px;
                li{
                    display: flex;
                    justify-content: space-between;
                    span{
                        display: inline-block;
                        padding: 8px 0;
                        &:first-child{
                            width: 12rem;
                        }
                        &:last-child{
                            opacity: ${props => props.show > 0 ? "1" : "0"};
                            transition: ease-in-out .4s;
                        }
                    }
                }  
            }
            .hide_detail{
                padding: 0 0 10px;
                .hide_detail_section1{
                    color: #393c41;
                    font-size: 14px;
                    div{
                        display: flex;
                        justify-content: space-between;
                        padding: 8px 0 12px;
                        .price_final{
                            font-weight: bolder;
                        }
                    }
                }
                .hide_detail_section2{
                    color: #393c41;
                    font-size: 14px;
                    margin-top: 6px;
                    div{
                        display: flex;
                        justify-content: space-between;
                        padding: 18px 0 12px;
                    }
                    border-top: 1px solid #d0d1d2;
                    border-bottom: 1px solid #d0d1d2;
                }
                .hide_detail_section3{
                    color: #393c41;
                    font-size: 14px;
                    div{
                        display: flex;
                        justify-content: space-between;
                        padding: 18px 0 8px;
                    }
                    button{
                        margin: 5px 2px;
                        font-size: 12px;
                        line-height: 12px;
                        background-color: white;
                        color: #5C5E62;
                        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, .8);
                        line-height: normal;
                        padding: 0;
                        border: none;
                        border-radius: 0;
                        z-index: -1;
                    }
                }
            }
        }
        .hide_detail_btn{
            display: flex;
            align-items: center;
            padding: 24px 0;
            span{
                display: inline-block;
                color: #393c41;
                font-size: 12px;
                line-height: 12px;
                padding-right: 4px;
                i{
                    font-size: 16px;
                    font-weight: bolder;
                }
            }
        }
        .pre_cash_wrapper{
            .pre_cash{
                color: #393c41;
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                span{
                    display: inline-block;
                    padding: 6px 1px 10px;
                }
            }
            .pre_cash_attention{
                span{
                    display: block;
                    padding: 12px 0 20px;
                    font-size: 12px;
                    color: #5C5E62;
                }
            }
        }
        .order_now{
            padding: 16px 0 16px;
            button{
                width: 100%;
                padding: 0 20px;
                background-color: white;
                color: #171a20;
                border-radius: 20px;
                height: 40px;
                margin: 0 0 10px 0;
                border: none;
                box-shadow: inset 0 0 0 2px #000; 
                font-size: 12px;
            }
        }
        .order_help{
            padding: 16px 0 160px;
            text-align: center;
            span{
                display: block;
                color: #5C5E62;
                font-size: 12px;
            }
        }
    }
    
`