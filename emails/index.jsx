import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";



const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const EmailTemplate = () => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={dz_doctors}>Dz Doctors</Text>

        <Text style={paragraph}>Hello Drear ,</Text>
        <Text style={paragraph}>
          Thank you for booking an appointment with us. This email is to confirm your appointment scheduled for:
          We look forward to seeing you!

          Best regards,

        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={baseUrl}>
            Get started
          </Button>
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          for more information contact : hadrouk_ramzi_@hotmail.com
        </Text>
      </Container>
    </Body>
  </Html>
);


export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "10px",

  borderRadius: '15px',
  border: ' 2px solid #eded',

  color: '#E1E1E1',
  backgroundImage: 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)'

  
};

const dz_doctors = {
  fontWeight: "bold",

  textAlign: "center",
  fontSize: "36px",
  color:"#222"

};

const logo = {

  margin: "0 auto",
  objectFit: "contain",
  borderRadius: '15px',

};

const paragraph = {
  fontSize: "19px",
  lineHeight: "26px",
  color:"#222"


};

const btnContainer = {
  textAlign: "center"
};

const button = {
  backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
  width: "40%",
  marginLeft: '30%',
  marginTop: '30px'




};

const hr = {
  borderColor: "#cccccc",
  marginTop: "80px  ",

};

const footer = {
  textAlign: 'center',
  color: "#444",
  fontSize: "16px",
};
