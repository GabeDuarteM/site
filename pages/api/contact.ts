import { NextApiRequest, NextApiResponse } from "next"
import aws from "aws-sdk"

interface ContactParams {
  name: string
  ["e-mail"]: string
  subject: string
  message: string
}

const {
  SES_AWS_DEFAULT_REGION,
  SES_AWS_ACCESS_KEY_ID,
  SES_AWS_SECRET_ACCESS_KEY,
  FROM_EMAIL,
} = process.env

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

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const {
    name,
    ["e-mail"]: email,
    subject,
    message,
  } = request.body as ContactParams

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
          Data: `Recieved from the contact form (${request.headers.host}):

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

  return response.send("success")
}
