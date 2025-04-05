import {
  Text,
  Img,
  Heading
} from "@react-email/components";
import EmailFrame from "./_components/email-frame";
import EmailButton from "./_components/email-button";

interface SignupEmailProps {
  verifyType: "url" | "code";
  verifyValue: string;
  username: string
}

export default function SignupEmail({
  verifyType,
  verifyValue,
  username
}: Readonly<SignupEmailProps>) {
    const appName = process.env.APP_NAME ?? "MicroConsole";
    const verifyExpire = process.env.VERIFY_EXPIRE ?? 3;
  return (
    <EmailFrame>
            <Img src={``} width={75} height={60} alt="Signup Email Image"/>
            <Heading>Verification Email</Heading>
            <Text>
              Hi {username}, Thank you for signing up our app {appName}! We want to make sure it&apos;s really you. If you don&apos;t want to create an account, you can ignore this message.
            </Text>

            { verifyType === "url" ? (
            <>
              <Text>
                To complete your registration, please verify your email address by clicking the button below :
              </Text>
              <EmailButton href={verifyValue}>Verify Email</EmailButton>    
            </>
            ) : ( 
            <>
              <Text>
                To complete your registration, please verify your email address by using the following code :
              </Text>
              <Text className="font-bold text-2xl">123456</Text>
              <Text>{`(This code is valid for ${verifyExpire} minutes.)`}</Text>
            </>
            )}  
     </EmailFrame>
  );
}
