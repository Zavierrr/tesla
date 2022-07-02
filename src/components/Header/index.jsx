import React from 'react'
import { Wrapper } from './style'
import IMG from '../../assets/img/tesla.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Wrapper>
            <Link to='/' className='logo'>
                <img src={IMG} alt="" />
            </Link>
        </Wrapper>
    )
}
