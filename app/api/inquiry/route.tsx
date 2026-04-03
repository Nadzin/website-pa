/* eslint-disable react-hooks/error-boundaries */
import { NextResponse } from 'next/server';
import { InquiryEmailTemplate } from '@/components/emails/InquiryEmailTemplate';
import { ConfirmationEmailTemplate } from '@/components/emails/ConfirmationEmailTemplate';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing in environment variables.');
      return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const data = await request.json();

    // Honeypot check
    if (data.honeyPot) {
      console.log('Bot detected (honeypot filled). Silently rejecting.');
      return NextResponse.json({ message: 'Inquiry submitted successfully!' }, { status: 200 });
    }

    console.log('Inquiry received:', data);

    const errors: { [key: string]: string } = {};
    if (!data.fullName) errors.fullName = 'Full Name is required';
    if (!data.email) errors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) errors.email = 'Invalid email address';

    if (!data.location) errors.location = 'Location is required';
    if (!data.eventType) errors.eventType = 'Event Type is required';
    if (!data.eventDate) errors.eventDate = 'Event Date is required';

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ message: 'Validation failed', errors }, { status: 400 });
    }

    const sendEmailToBusiness = resend.emails.send({
      from: `${data.fullName} <info@partyservicealexander.com>`,
      to: ['info@partyservice-alexander.de'],
      subject: 'Neue Catering-Anfrage',
      react: <InquiryEmailTemplate
        fullName={data.fullName}
        email={data.email}
        phone={data.phoneNumber}
        location={data.location}
        eventType={data.eventType}
        guests={data.numberOfGuests}
        eventDate={data.eventDate}
        message={data.specialWishes}
      />,
      replyTo: data.email,
    });

    const sendConfirmationEmailToCustomer = resend.emails.send({
      from: 'Partyservice Alexander <info@partyservicealexander.com>',
      to: [data.email],
      subject: 'Wir haben deine Anfrage erhalten',
      react: <ConfirmationEmailTemplate
        fullName={data.fullName}
      />,
    });

    const [businessResponse, customerResponse] = await Promise.all([sendEmailToBusiness, sendConfirmationEmailToCustomer]);

    if (businessResponse.error) {
      console.error('Error sending business email:', businessResponse.error);
    }
    if (customerResponse.error) {
      console.error('Error sending customer email:', customerResponse.error);
    }

    // If both failed, we should probably let the user know, but if at least one succeeded (business), we might count it as success?
    // For now, if business email fails, it's a critical error.
    if (businessResponse.error) {
      return NextResponse.json({ message: `Error sending inquiry to business: ${businessResponse.error.message}`, details: businessResponse.error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Inquiry submitted successfully!' }, { status: 200 });

  } catch (error: unknown) {
    console.error('Error processing inquiry:', error);
    const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
    return NextResponse.json({ message: `Internal Server Error: ${errorMessage}` }, { status: 500 });
  }
}
