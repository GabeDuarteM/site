import React from 'react'
import styled from 'styled-components/macro'

const StyledField = styled.div`
  display: flex;
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.primary};
  position: absolute;
  pointer-events: none;
  font-size: 12px;
  margin-left: 5px;
  margin-top: 5px;
  height: 20px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 4px;
`

const Input = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  height: ${(props) => (props.textarea ? '200px' : '55px')};
  padding: 8px;
  padding-top: ${(props) => (props.textarea ? '24px' : '18px')};
  flex: auto;
  transition: none;
  margin: 4px;
  border: solid 1px ${({ theme }) => theme.colors.primary[1]};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.primary[3]} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text.primary};
    // border: solid 1px ${({ theme }) => theme.colors.primary[1]};
    border-radius: inherit
  }
  /*Change text in autofill textbox*/
  input:-webkit-autofill {
    -webkit-text-fill-color: yellow !important;
  }
`

const Field = ({ name, label, textarea, error, ...props }) => {
  return (
    <StyledField>
      <Label error={Boolean(error)} htmlFor={name}>
        {label}
      </Label>
      <Input
        id={name}
        error={Boolean(error)}
        as={textarea ? 'textarea' : 'input'}
        textarea={textarea}
        name={name}
        data-hj-whitelist
        {...props}
      />
    </StyledField>
  )
}

export default Field
