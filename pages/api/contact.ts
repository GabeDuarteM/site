import fetch from "node-fetch"
import { NextApiRequest, NextApiResponse } from "next"
import aws from "aws-sdk"

interface ContactParams {
  name: string
  ["e-mail"]: string
  subject: string
  message: string
  captcha: string
}

interface RecaptchaResponse {
  success: boolean
  challenge_ts: string
  hostname: string
  "error-codes": string[]
}

const SES_AWS_DEFAULT_REGION = process.env.SES_AWS_DEFAULT_REGION
const SES_AWS_ACCESS_KEY_ID = process.env.SES_AWS_ACCESS_KEY_ID
const SES_AWS_SECRET_ACCESS_KEY = process.env.SES_AWS_SECRET_ACCESS_KEY
const FROM_EMAIL = process.env.FROM_EMAIL

if (
  !SES_AWS_DEFAULT_REGION ||
  !SES_AWS_ACCESS_KEY_ID ||
  !SES_AWS_SECRET_ACCESS_KEY ||
  !FROM_EMAIL
) {
  throw new Error(
    "Misconfigured environment. Couldn't find the environment variable FROM_EMAIL, SES_AWS_DEFAULT_REGION SES_AWS_ACCESS_KEY_ID or SES_AWS_SECRET_ACCESS_KEY"
  )
}

aws.config.update({
  credentials: {
    accessKeyId: SES_AWS_ACCESS_KEY_ID,
    secretAccessKey: SES_AWS_SECRET_ACCESS_KEY,
  },
  region: SES_AWS_DEFAULT_REGION,
})

const ses = new aws.SES({
  region: process.env.SES_AWS_DEFAULT_REGION,
})

async function sendEmail(
  name: string,
  email: string,
  subject: string,
  message: string,
  host: string
) {
  const fromEmail = process.env.FROM_EMAIL

  if (!fromEmail) {
    throw new Error(
      "Misconfigured environment. Couldn't find the environment variable 'FROM_EMAIL'"
    )
  }

  const params: aws.SES.SendEmailRequest = {
    Destination: {
      ToAddresses: [fromEmail],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Text: {
          Data: `Recieved from the contact form (${host}):

Name: ${name}
E-mail: ${email}
Subject: ${subject}
Message:
${message}`,
        },
      },
    },
    Source: fromEmail,
    ReplyToAddresses: [email],
  }

  await ses.sendEmail(params).promise()
}

async function validateRecaptcha(captcha: string) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GRECAPTCHA_SECRET}&response=${captcha}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      method: "POST",
    }
  )
  const captchaValidation = (await response.json()) as RecaptchaResponse

  return captchaValidation
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(404).send("Not found")
  }

  const {
    name,
    ["e-mail"]: email,
    subject,
    message,
    captcha,
  } = req.body as ContactParams

  if (!email || !name || !message || !subject || !captcha) {
    console.error({ name, email, subject, message, captcha })
    return res.status(422).json({
      message: "Unproccesable request, please provide the required fields",
    })
  }

  try {
    const captchaValidation = await validateRecaptcha(captcha)

    if (!captchaValidation.success) {
      return res.status(422).json({
        message: "Unproccesable request, Invalid captcha code",
      })
    }

    await sendEmail(name, email, subject, message, req.headers.host || "")
  } catch (error) {
    console.error(error)
    return res.status(422).json({ message: "Something went wrong" })
  }
  return res.status(200).send("OK")
}
