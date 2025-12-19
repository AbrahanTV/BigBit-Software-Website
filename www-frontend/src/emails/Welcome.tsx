import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";

interface WelcomeProps {
  loginCode?: string;
}

const logoUrl =
  "https://cdn.mcauto-images-production.sendgrid.net/e04a77b50fbfd238/54eb4718-93cc-4ead-9adf-0d4974174299/55x33.png";

export const Welcome = ({ loginCode }: WelcomeProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>BigBit Software</Preview>
      <Container style={container}>
        <Heading style={h1}>
          Thank you for reaching out to BigBit Software!
        </Heading>

        <Text style={{ ...text, marginBottom: "14px" }}>
          Our team is actively reviewing your query and we'll get back to you
          soon.
        </Text>

        <Img src={logoUrl} width="60" height="40" alt="BigBit's Logo" />

        <Text style={footer}>
          <Link
            href="https://www.bigbitsoftware.com"
            target="_blank"
            style={{ ...link, color: "#898989" }}
          >
            bigbitsoftware.com
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default Welcome;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#a7e52e",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
