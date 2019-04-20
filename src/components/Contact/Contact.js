import React from 'react'
import { useForm, useField } from 'react-final-form-hooks'
import styled from 'styled-components/macro'

import Field from '../Field'
import Button from '../Button/Button'

const Title = styled.h2`
  font-weight: 500;
`

const ButtonContainer = styled.div`
  margin: 4px;
`

const ThankYou = styled.div`
  text-align: center;
  margin: 8px 0;
`

const isFilled = (value) => {
  return value !== null && value !== undefined && value !== ''
}

const createFormData = (values) => {
  const form = new FormData()

  Object.keys(values).forEach((field) => {
    form.set(field, values[field])
  })

  form.set('_origin', location.origin)
  form.set('_form', 'Contact on gabrielduarte.tech')

  return form
}

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false)

  const onSubmit = async (values) => {
    const form = createFormData(values)

    await fetch(
      'https://www.briskforms.com/go/ac606b73f7f6862f52dbefda69f79db9',
      {
        method: 'POST',
        body: form,
        mode: 'no-cors',
      },
    )

    setSubmitted(true)
  }

  const validate = (values) => {
    const errors = {}
    const emailRegex = /(.+)@(.+).(.+){2,}/
    if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email'
    }

    const requiredFields = ['email', 'name', 'subject', 'message']
    requiredFields.forEach((field) => {
      if (!isFilled(values[field])) {
        errors[field] = 'Required field'
      }
    })

    return errors
  }

  const { form, handleSubmit, submitting } = useForm({
    onSubmit,
    validate,
  })
  const email = useField('email', form)
  const name = useField('name', form)
  const subject = useField('subject', form)
  const message = useField('message', form)

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (submitted) {
      const timeout = setTimeout(() => setSubmitted(false), 5000)

      return () => clearTimeout(timeout)
    }
  }, [submitted])

  return (
    <form onSubmit={handleSubmit}>
      <Title>Contact me</Title>

      <Field
        type="email"
        label="E-mail"
        error={email.meta.touched && email.meta.error}
        {...email.input}
      />
      <Field
        label="Name"
        error={name.meta.touched && name.meta.error}
        {...name.input}
      />
      <Field
        label="Subject"
        error={subject.meta.touched && subject.meta.error}
        {...subject.input}
      />
      <Field
        label="Message"
        textarea
        error={message.meta.touched && message.meta.error}
        {...message.input}
      />

      {submitted && <ThankYou>Thank you for contacting me!</ThankYou>}

      <ButtonContainer>
        <Button submitting={submitting} type="submit" value="Send" />
      </ButtonContainer>
    </form>
  )
}

export default Contact
