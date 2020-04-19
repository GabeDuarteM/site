import React from 'react'
import styled from 'styled-components/macro'

import Field from '../Field'
import Button from '../Button/Button'

const Title = styled.h2`
  font-weight: 500;
`

const ButtonContainer = styled.div`
  margin: 4px;
`

const Contact = () => {
  const [submitting, setSubmitting] = React.useState(false)

  // When doing SSR, location does not exist, so we make this check
  let origin
  if (typeof location !== `undefined`) {
    origin = location.origin
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify
      data-netlify-honeypot="ravena"
      data-netlify-recaptcha
    >
      <Title>Contact me</Title>

      <Field name="email" type="email" label="E-mail" required />
      <Field name="name" label="Name" required />
      <Field name="subject" label="Subject" required />
      <Field name="message" label="Message" textarea required />
      <input type="hidden" name="_origin" value={origin} />
      <div hidden>
        <input name="ravena" />
      </div>

      {/* The `form-name` hidden field is required to support form submissions without JavaScript on netlify forms */}
      <input type="hidden" name="form-name" value="contact" />
      <div data-netlify-recaptcha />

      <ButtonContainer>
        <Button
          onClick={() => setSubmitting(true)}
          submitting={submitting}
          type="submit"
          value="Send"
        />
      </ButtonContainer>
    </form>
  )
}

export default Contact
