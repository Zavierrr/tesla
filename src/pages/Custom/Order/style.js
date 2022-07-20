import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 0 86px;
    .order_wrapper{
        font-size: 24px;
        color: #171A20;
        text-align: center;
        padding: 16px;
        .order_title{
            padding: 0 0 8px;
        }
        .order_date{
            padding: 10px 0;
            font-size: 14px;
        }
        .order_btn{
            margin: 16px 0;
            button{
                width: 100%;
                padding: 0 20px;
                background-color: #3e6ae1;
                color: white;
                border-radius: 20px;
                height: 40px;
                margin: 0 0 10px 0;
                border: 1px solid #eee;
                font-size: 12px;
            }
        }
        .order_desc{
            padding: 24px;
            font-size: 14px;
            color: #393c41;
        }
    }
`