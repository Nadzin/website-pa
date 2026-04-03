import * as React from 'react';
import dayjs from 'dayjs';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Link,
  Preview,
  Hr,
} from '@react-email/components';

interface InquiryEmailProps {
  fullName: string;
  email: string;
  phone?: string;
  location: string;
  eventType: string;
  guests?: number;
  eventDate: string;
  message?: string;
}

const eventTypeTranslations: Record<string, string> = {
  wedding: 'Hochzeit',
  birthday: 'Geburtstag',
  corporate: 'Firmenfeier',
  christening: 'Taufe',
  christmas: 'Weihnachtsfeier',
  business_meeting: 'Geschäftstreffen',
  other: 'Sonstiges',
};

export const InquiryEmailTemplate: React.FC<InquiryEmailProps> = ({
  fullName,
  email,
  phone,
  location,
  eventType,
  guests,
  eventDate,
  message,
}) => (
  <Html>
    <Head />
    <Preview>Neue Anfrage von {fullName}</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <Heading style={headerTitle}>Neue Anfrage</Heading>
          <Text style={headerSubtitle}>Partyservice Alexander</Text>
        </Section>

        {/* Content */}
        <Section style={content}>
          <Heading as="h2" style={title}>Hallo!</Heading>
          <Text style={paragraph}>
            Du hast eine neue Anfrage von <strong>{fullName}</strong> erhalten.
          </Text>

          <Section style={table}>
            <div style={row}>
              <Text style={label}>Name:</Text>
              <Text style={value}>{fullName}</Text>
            </div>
            <Hr style={divider} />
            <div style={row}>
              <Text style={label}>Email:</Text>
              <Text style={value}>
                <Link href={`mailto:${email}`} style={link}>{email}</Link>
              </Text>
            </div>
            <Hr style={divider} />
            <div style={row}>
              <Text style={label}>Telefon:</Text>
              <Text style={value}>{phone || 'Keine Angabe'}</Text>
            </div>
            <Hr style={divider} />
            <div style={row}>
              <Text style={label}>Datum:</Text>
              <Text style={value}>{dayjs(eventDate).format('DD-MM-YYYY')}</Text>
            </div>
            <Hr style={divider} />
            <div style={row}>
              <Text style={label}>Art des Events:</Text>
              <Text style={value}>{eventTypeTranslations[eventType.toLowerCase()] || eventType}</Text>
            </div>
            <Hr style={divider} />
            <div style={row}>
              <Text style={label}>Gäste:</Text>
              <Text style={value}>{guests || 'Keine Angabe'}</Text>
            </div>
            <Hr style={divider} />
            <div style={row}>
              <Text style={label}>Ort:</Text>
              <Text style={value}>{location}</Text>
            </div>
          </Section>

          {message && (
            <Section style={messageBox}>
              <Text style={messageLabel}>NACHRICHT:</Text>
              <Text style={messageText}>{message}</Text>
            </Section>
          )}

          <Section style={buttonContainer}>
            <Link href={`mailto:${email}?subject=Re: Deine Anfrage`} style={button}>
              Antworten
            </Link>
          </Section>
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>Dies ist eine automatisch generierte E-Mail von deiner Website.</Text>
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

const table = {
  width: '100%',
  marginTop: '20px',
};

const row = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const divider = {
  borderColor: '#eee',
  margin: '10px 0',
};

const label = {
  color: '#888888',
  width: '140px',
  margin: '0',
};

const value = {
  color: '#333333',
  fontWeight: 'bold' as const,
  margin: '0',
};

const link = {
  color: '#D92D20',
  textDecoration: 'none',
};

const messageBox = {
  marginTop: '20px',
  backgroundColor: '#f5f5f5',
  padding: '15px',
  borderRadius: '4px',
};

const messageLabel = {
  margin: '0 0 5px',
  color: '#888888',
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
};

const messageText = {
  margin: '0',
  color: '#333333',
  whiteSpace: 'pre-wrap' as const,
};

const buttonContainer = {
  marginTop: '30px',
  textAlign: 'center' as const,
};

const button = {
  display: 'inline-block',
  backgroundColor: '#D92D20',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '4px',
  textDecoration: 'none',
  fontWeight: 'bold' as const,
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
