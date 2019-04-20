import React from 'react'
import styled from 'styled-components/macro'

const StyledField = styled.div`
  display: flex;
`

const Label = styled.label`
  color: ${(props) => (props.error ? 'red' : '#282c34')};
  position: absolute;
  pointer-events: none;
  font-size: 12px;
  margin-left: 5px;
  margin-top: 5px;
  background: white;
  height: 20px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 4px;
`

const Input = styled.input`
  color: ${(props) => (props.error ? 'red' : '#282c34')};
  height: ${(props) => (props.textarea ? '200px' : '55px')};
  padding: 8px;
  padding-top: ${(props) => (props.textarea ? '24px' : '18px')};
  flex: auto;
  transition: none;
  margin: 4px;
  border: solid 1px ${(props) => (props.error ? 'red' : 'gray')};

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    box-shadow: 0 0 0 30px white inset;
    border: solid 1px darkgray;
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
