import React from "react"
import ReCaptcha from "react-google-recaptcha"
import Button from "../Button"
import Field from "../Field"

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const recaptchaRef = React.createRef<ReCaptcha>()
  const formRef = React.createRef<HTMLFormElement>()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!recaptchaRef?.current?.execute || !formRef.current) {
      throw new Error("Refs were not defined yet")
    }

    const formData = new FormData(formRef.current)
    recaptchaRef.current.reset()
    const captcha = await recaptchaRef.current.executeAsync()

    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captcha) {
      throw new Error("Captcha code is invalid.")
    }
    formData.append("captcha", captcha)

    await fetch("/api/contact", {
      body: JSON.stringify(Object.fromEntries(formData)),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  if (!process.env.NEXT_PUBLIC_GRECAPTCHA_KEY) {
    throw new Error("Misconfigured enviromnent. No recaptcha key was found.")
  }

  return (
    <form
      action="/api/contact"
      className="w-[75vw] max-w-[900px] my-5"
      name="contact"
      id="contact"
      method="POST"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <ReCaptcha
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_GRECAPTCHA_KEY}
      />
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
