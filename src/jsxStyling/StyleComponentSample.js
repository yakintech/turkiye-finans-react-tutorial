import React from 'react'
import styled from "styled-components";

function StyleComponentSample() {

    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    `

    return (<>
    <span>Hello</span>
        <Title>Hello Styled Components!</Title>
    </>
    )
}

export default StyleComponentSample