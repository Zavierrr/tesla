import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import IMG from '../../assets/img/tesla.png'
import { Link } from 'react-router-dom'

export default function Header() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', function () {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (scrollTop > 200) {
                setShow(true)
            } else setShow(false)
        })
    }, [show])
    return (
        <Wrapper style={show ? { opacity: '1', transition: 'ease-in .8' } : {}}>
            <Link to='/' className='logo' style={show ? { opacity: '0', transition: 'cubic-bezier(0.5,0,0,0.75) .8' } : {}}>
                <img src={IMG} alt="" />
            </Link>
            {show ?
                <div className='date_down'><span>预计交付日期：16-20 周</span></div> :
                <div className='date_up'><span>预计交付日期：16-20 周</span></div>}
        </Wrapper>
    )
}
