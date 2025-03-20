import {
    Text,
    Img,
  } from "@react-email/components";
import EmailFrame from "./_components/email-frame";
import EmailButton from "./_components/email-button";

interface ForgetPasswordEmailProps {
    resetLink: string;
    username: string
}

export default function ForgetPasswordEmail({
    resetLink,
    username
  }: Readonly<ForgetPasswordEmailProps>) {
    const appName = process.env.APP_NAME ?? "MicroConsole";
    const resetLinkExpire = process.env.RESET_LINK_EXPIRE ?? 30;
    return (
        <EmailFrame>
            <Img src={``} width={75} height={60} alt="Signup Email Image"/>
            <Text>
              Hi {username}, This is a message from {appName}!
            </Text>
            <Text>
                We received a request to reset your password. Click the button below to set a new password:
            </Text>
            <EmailButton href={resetLink}>Reset Password</EmailButton>
            <Text>
            If you didn’t request this, you can safely ignore this email. Your password will remain unchanged. For security reasons, this link will expire in {resetLinkExpire} minutes.
            </Text>

            <Text>If you need any help, feel free to contact our support team.</Text>
          </EmailFrame>
    )
  }