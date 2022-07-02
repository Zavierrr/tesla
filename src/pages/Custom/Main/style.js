import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-top: 56px;
    color: #393C41;
    font-family: sans-serif;
    box-sizing: border-box;
    /* letter-spacing:1px; */
    .main__section1{
        padding-top: 20px;
        .main__section1_carImg{
            img{
                max-width: 100vw;
            }
        }
    }
    .main__section2{
        padding: 32px 24px 80px;
        .main__section2_title{
            text-align: center;
            font-size: 28px;
            line-height: 30px;
            font-weight: bolder;
            color: #171A20;
            padding: 0 0 8px;
        }
        .main__section2_deadline{
            text-align: center;
            font-size: 14px;
            line-height: 21px;
            padding: 0 0 16px;  
        }
        .main__section2_param{
            text-align: center;
            padding: 16px 0;
            ol{
                font-size: 24px;
                font-weight: 900;
                margin: 8px 0;
                display: flex;
                justify-content: space-around;
                li{
                    flex: 1;
                    .li-div{
                        span:nth-child(2){
                            font-size: 14px;
                        }
                    }
                    .param-desc{
                        color: #5C5E62;
                        font-size: 12px;
                        display: inline-flex;
                        flex-direction: column;
                        align-items: center;
                        .main__section2_CLTC{
                            margin: 5px 2px;
                            box-shadow: -1px 1.5px 0px 0px rgba(0, 0, 0, .3);
                            line-height: normal;
                        }
                    }
                }
            } 
        }
        .main__section2_edition{
            .edition-desc{
                font-size: 14px;
                .edition-desc-title{
                    padding: 12px 0;
                    /* float: left; */
                    span{
                        display: block;
                        font-size: 14px;
                    }
                }
                .edition-desc-content{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 16px;
                    padding: 18px 15px;
                    box-shadow: inset 0 0 0 1px #a2a3a5;
                    border-radius: 32px;
                }
            }
            .edition-explanation{
                font-size: 12px;
                text-align: center;
                line-height: 21px;
                color: #393C41;
            }
        }
        .edition-detail{
            padding: 16px 0;
            width: 100%;
            display: flex;
            justify-content: center;
            .btn-edition-detail{
                border: none;
                padding: 7px 54px;
                border-radius: 20px;
                background-color: #f4f4f4;
                span{
                    color: #393C41;
                    font-size: 12px;
                }
            }
        }
        .current{
            box-shadow: inset 0 0 0 3px #3e6ae1; 
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            padding: 18px 15px;
            border-radius: 32px;
        }
    }
`