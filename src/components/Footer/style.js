import styled from 'styled-components'

export const Wrapper = styled.div`
    z-index: 999;
    width: 100%;
    height: 40px;
    padding: 16px 0;
    position:fixed;
    bottom:0;
    left:0;
    /* padding: 16px; */
    background-color: #f4f4f4;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    .calculator{
        margin: 0 20px;
        width: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        .calculator-desc{
            flex: 1;
            display: flex;
            font-size: 12px;
            color: #5c5e62;
            flex-direction: column;
            align-items: center;
            .calculator-price1{
                color: #393C41;
                font-weight: 400;
                margin-right: 5px;
            }
            .calculator-price2{
                color: #393C41;
                font-weight: 400;
                margin-right: 5px;
            }
            .calculator-desc-top{
                font-size: 16px;
                margin-bottom: 4px;
                /* letter-spacing: 1px; */
            }
        }
        .calculator-icon{
            width: 30px;
            height: 30px;
            border-radius: 15px;
            background-color: white;
            text-align: center;
            line-height: 28px;
            color: #171A20;
            box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, .2);
            i{
                font-size: 18px;
                font-weight: 900;
            }
        }
    }
`