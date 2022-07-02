import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 56px;
    width: 100%;
    position: fixed;
    top:0;
    /* filter: blur(1px); */
    /* left:0; */
    background-color: #fff;
    opacity: .8;
    /* &::after{
        content:'11';
        position:absolute;
        height: 56px;
        width: 100vw;
        position: sticky;
        top:0;
        z-index:-1;
        filter:blur(20px);
    } */
    .logo{
        float: left;
        padding: 1.0rem 0 1.0rem 1.4rem;
        img{
        height: 20px;
        width: 125px;
        }
    }
`