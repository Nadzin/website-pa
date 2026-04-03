import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Preview,
} from '@react-email/components';

interface ConfirmationEmailProps {
  fullName: string;
}

export const ConfirmationEmailTemplate: React.FC<ConfirmationEmailProps> = ({
  fullName,
}) => (
  <Html>
    <Head />
    <Preview>Wir haben Ihre Anfrage erhalten</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <Heading style={headerTitle}>Anfrage erhalten</Heading>
          <Text style={headerSubtitle}>Partyservice Alexander</Text>
        </Section>

        {/* Content */}
        <Section style={content}>
          <Heading as="h2" style={title}>Hallo {fullName},</Heading>
          <Text style={paragraph}>
            vielen Dank für Ihre Anfrage! Wir haben sie erhalten und werden uns so schnell wie möglich bei Ihnen melden.
          </Text>
          <Text style={paragraph}>
            In der Zwischenzeit können Sie gerne weiter auf unserer Website stöbern.
          </Text>
          <Text style={paragraph}>
            Bitte antworten Sie nicht auf diese E-Mail Adresse.
          </Text>
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>Partyservice Alexander</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  fontFamily: 'sans-serif',
  backgroundColor: '#f9f9f9',
  padding: '20px',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const header = {
  backgroundColor: '#D92D20',
  padding: '20px',
  textAlign: 'center' as const,
};

const headerTitle = {
  color: '#ffffff',
  margin: '0',
  fontSize: '24px',
};

const headerSubtitle = {
  color: '#ffffff',
  margin: '5px 0 0',
  opacity: 0.9,
};

const content = {
  padding: '30px',
};

const title = {
  color: '#333333',
  fontSize: '20px',
  marginTop: '0',
};

const paragraph = {
  color: '#555555',
  lineHeight: '1.5',
};

const footer = {
  backgroundColor: '#eeeeee',
  padding: '15px',
  textAlign: 'center' as const,
};

const footerText = {
  margin: '0',
  fontSize: '12px',
  color: '#999999',
};
