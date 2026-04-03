import { Metadata } from 'next';
import ContactForm from './ContactForm'; // Assuming you extract the form logic into this component

export const metadata: Metadata = {
  title: 'Kontakt & Anfrage',
  description: 'Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Kontaktieren Sie Partyservice Alexander über unser Kontaktformular. Wir freuen uns auf Ihre Anfrage!',
};

const ContactPage = () => {
  return (
    <main>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
