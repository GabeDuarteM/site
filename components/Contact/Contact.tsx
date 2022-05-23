import React from "react"
import Button from "../Button"
import Field from "../Field"

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <form
      action="/api/contact"
      className="w-[75vw] max-w-[900px] my-5"
      name="contact"
      method="POST"
    >
      <h2 className="font-medium font-[Montserrat] text-2xl my-5">
        Contact me
      </h2>
      <Field label="E-mail" type="email" required />
      <Field label="Name" required />
      <Field label="Subject" required />
      <Field label="Message" textarea required />
      <Button>Send</Button>
    </form>
  )
}

export default Contact