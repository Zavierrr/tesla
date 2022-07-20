import styled from "styled-components";

export const Wrapper = styled.div`
    .color_select_IMG{
        img{
            max-width: 100%;
        }
    }
    .color_select{
        margin: 32px 0 48px;
        padding: 0 24px 8px;
        .color_select_title{
            span{
                display: inline-block;
                color: #171A20;
            }
            padding: 0 0 8px;
            text-align: center;
            font-size: 24px;
        }
        .fivecolor_wrapper{
            padding: 16px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                height: 54px;
                width: 54px;
                margin: 2px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    height: 40px;
                }
            }
            .active{
                box-shadow: inset 0 0 0 3px #3e6ae1;
            }
        }
        .color_select_desc{
            text-align: center;
            font-size: 14px;
            span{
                display: block;
                color: #000;
                padding: 8px 0;
                &:last-child{
                    color: #393C41;
                    padding: 0;
                }
            }
        }
    }
`