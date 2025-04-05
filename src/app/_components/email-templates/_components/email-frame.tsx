import {
    Html,
    Head,
    Body,
    Container,
    Text,
    Preview,
    Section,
    Hr
  } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface EmailFrameProps {
    children: React.ReactNode;
}

export default function EmailFrame({ children }: Readonly<EmailFrameProps>) {
    const appName = process.env.APP_NAME ?? "MicroConsole";
    return (
        <Html>
      <Tailwind>
        <Head />
        <Body className="font-sans">
          <Preview>Signup Email</Preview>
          <Container className="bg-gray-300 p-6 rounded">
            <Section className="bg-white rounded">
            <Section className="p-5">
            
            {children}

            <Hr />

            <Text> We will never email you and ask you to disclose or verify your password, credit card, or banking account number.</Text>
            </Section>
            </Section>
            <Section className="text-center">
                <Text>This message was produced and distributed by {appName}. </Text>
                <Text>All rights reserved.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
    )
}