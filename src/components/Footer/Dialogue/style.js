import styled from "styled-components";

export const Wrapper = styled.div`
    .btn-dialogue{
        width: 50px;
        height: 50px;
        position: absolute;
        background-color: #fff;
        top: -12px;
        right: 36px;
        border-radius: 25px;
        box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, .4);
        i{
            font-size: 40px;
            line-height: 38px;
            position: relative;
            right: 7px;
        }
    }
`
export const Content = styled.div`
    height: 92vh;
    overflow: scroll;
    border-radius: 50px;
    
    .header_question{
    border-radius: 50px;

        text-align: center;
        font-size: 0.9rem;
        color: #393C41;
        padding: 18px 12px 12px;
        background-color: white;
        position: sticky;
        top: 0;
    }
    .que_main{
        padding: 24px 24px 20px ;
        .que_title{
            font-size: 14px;
            color: #393C41;
            margin: 0 0 32px;
            span{
                display: block;
                &:first-child{
                    font-size: 22px;
                    font-weight: 400;
                    color: #171A20;
                    padding: 0 0 10px;
                }
            }
        }
        .que_info{
            div:nth-child(n){
                padding: 8px 0;
            }
            input{
                border: none;
                background-color: transparent;
                background-color: #f4f4f4;
                width: 100%;
                outline: none;
                font-size: 16px;
                border-radius: 20px;
                height: 40px;
                margin: 0 0 10px 0;
                line-height: 16px;
                text-align: start;
                &:active{
                    border: #171A20;
                }
            }
            div{
                .label-wrap{
                    padding: 0 8px 12px 20px;
                    font-size: 14px;
                    color: #5c5e62;
                }
                .input-wrap{
                    padding: 0 20px;
                    background-color: #f4f4f4;
                    border-radius: 20px;
                    height: 40px;
                    margin: 0 0 10px 0;
                    border: 1px solid #eee;
                }
                .btn-begin{
                    width: 100%;
                    padding: 0 20px;
                    background-color: #3e6ae1;
                    color: white;
                    border-radius: 20px;
                    height: 40px;
                    margin: 0 0 10px 0;
                    border: 1px solid #eee;
                }
            }   
        }
    }
    
`