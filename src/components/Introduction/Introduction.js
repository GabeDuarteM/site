import React from 'react'
import styled from 'styled-components/macro'

import useTypewriter from '../../hooks/useTypewriter'

const HiddenText = styled.span`
  opacity: 0;
  user-select: none;
`

const StyledIntroduction = styled.div`
  font-size: 40px;
  font-family: Montserrat;
  text-align: center;
  min-height: 400px;
  height: 66vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  white-space: pre-wrap;
`

const Introduction = () => {
  const [
    textTyped,
    textToType,
  ] = useTypewriter(
    `Hey! I'm Gabriel Duarte.\nYour friendly neighborhood developer.`,
    { '!': 200, '.': 600 },
  )

  return (
    <StyledIntroduction>
      <div>
        {textTyped}
        <HiddenText>{textToType}</HiddenText>
      </div>
    </StyledIntroduction>
  )
}

export default Introduction
