import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

const dualRing = keyframes`
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const LoadingRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoadingInnerRing = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  border: 8px solid #000;
  border-color: white transparent white transparent;
  animation: ${dualRing} 1s linear infinite;
`

const LoadingRings = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39px !important;
  height: 39px !important;
  transform: translate(-19.5px, -19.5px) scale(0.195) translate(19.5px, 19.5px);
`

const StyledButton = styled.button`
  background: transparent;
  border: solid 4px white;
  height: 55px;
  width: 100%;
  color: inherit;
  transition: all 0.3s ease;
  :hover,
  :active,
  :focus {
    background-color: white;
    color: #343e46;
    ${LoadingInnerRing} {
      border-color: #343e46 transparent #343e46 transparent;
    }
  }
`

const Button = ({ submitting = true }) => {
  return (
    <StyledButton disabled={submitting} type="submit">
      {submitting ? (
        <LoadingRoot>
          <LoadingRings>
            <LoadingInnerRing />
          </LoadingRings>
        </LoadingRoot>
      ) : (
        'Send'
      )}
    </StyledButton>
  )
}

export default Button
