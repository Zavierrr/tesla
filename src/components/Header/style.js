import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 56px;
    width: 100%;
    position: fixed;
    top:0;
    background-color: #fff;
    opacity: .8;
    .logo{
        float: left;
        padding: 1.0rem 0 1.0rem 1.4rem;
        opacity: .8;
        img{
        height: 20px;
        width: 125px;
        }
    }
    .date_up{
        z-index: 9999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 0;
        transition: cubic-bezier(0.5,0,0,0.75) .8s;
        background-color: #fcfcfd;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            display: inline-block;
            font-size: 14px;
        }
    }
    .date_down{
        z-index: 9999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 56px;
        z-index: 999;
        opacity: 1;
        position: absolute;
        color: #393c41;
        background-color: #fcfcfd;
        transition: cubic-bezier(0.5,0,0,0.75) .8s;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            display: inline-block;
            font-size: 14px;
        }
    }
`