import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import Main from './Main'

export default function Custom(props) {
    return (
        <Wrapper>
            <Main carParams={props.carParams} showEdition={props.showEdition} setShowEdition={props.setShowEdition} />
        </Wrapper>
    )
}