1. 🧭 General & Non-Functional Requirements (NFRs)
These define the overall quality, feel, and constraints of the application.

NFR-1: Brand Identity & Modernization

The website must retain the existing brand identity of "Partyservice Alexander."

This includes the primary logo, the red/white/dark color palette (from the screenshot), and the general professional-but-friendly tone.

The design must be modernized with a clean layout, ample white space, and high-quality typography to feel current and trustworthy.

NFR-2: Responsive Design

The application must be fully responsive and provide an excellent user experience on all common devices (desktop, tablet, and mobile).

NFR-3: Performance

The site must load quickly.

Leverage Next.js features like Static Site Generation (SSG) for content-heavy pages (Home, About Us, Services) and next/image for automatic image optimization of all new food photos.

NFR-4: Content Management & Scalability

The site architecture must include clear placeholders for future content.

Code (e.g., React components) should be structured to easily add new service descriptions, gallery images, or menu items without a full redesign.

NFR-5: Accessibility

The website should adhere to WCAG 2.1 A/AA guidelines, ensuring it is usable for people with disabilities (e.g., keyboard navigation, alt text for images).

2. ⚙️ Functional Requirements (FRs)
These define the specific pages, components, and user interactions.

FR-1: Global Elements (Header & Footer)
FR-1.1: Header:

Must display the "Partyservice Alexander" logo.

Must display primary contact information (Phone: 07428 - 931 68 15, Email: info@partyservice-alexander.de).

Must include social media icons (Facebook, Instagram) from the screenshot.

Must provide clear navigation with the following links:

Startseite (Home)

Über Uns (About Us)

Leistungen (Services)

Bildergalerie (Gallery)

Menüs (Menus - from old site, good to include as a page)

Kontakt/Anfrage (Contact/Inquiry) - This should be the primary Call to Action (CTA)

FR-1.2: Footer:

Must contain links to Impressum (Imprint) and Datenschutz (Privacy Policy), which are legally required in Germany.

Should repeat key contact information and navigation links.

FR-2: Homepage (Startseite)
FR-2.1: Hero Section:

Must feature a full-width, auto-playing "diashow" (slideshow/carousel).

This slideshow must exclusively use the new, high-quality food photographs.

FR-2.2: Introductory Content:

Must include a short, "on-point" description of the company directly below the hero section.

Must feature a prominent Call to Action (CTA) button (e.g., "Jetzt Anfragen" - "Inquire Now") that links directly to the Inquiry Form page.

FR-3: About Us (Über Uns)
FR-3.1: Company History:

Must include a section detailing the company's history and philosophy.

FR-3.2: Team Profiles:

Must have a dedicated profile for the father (Head Chef), highlighting his "25 years of experience" and expertise with "countless weddings, parties, etc."

Must have a dedicated profile for the brother (Chef), highlighting his "5 years of experience" and work in a "Michelin-star kitchen."

Must include placeholders for future team members.

FR-4: Services (Leistungen)
FR-4.1: Service Overview:

Must provide a detailed description of all catering services offered.

Must have a specific, detailed section for "Wedding Food" and associated services.

FR-4.2: Content Placeholders:

The page structure must support adding new service categories (e.g., "Business Events," "Birthdays") with text descriptions and corresponding images in the future.

FR-5: Gallery (Bildergalerie)
FR-5.1: Image Display:

Must display the new food photos in a modern, visually appealing layout (e.g., a responsive grid or masonry layout).

Should allow images to be clicked to open in a full-screen lightbox.

FR-5.2: Scalability:

The gallery must be built to easily accommodate new photos as they become available.

FR-6: Inquiry Form (Kontakt/Anfrage)
This is the most critical functional component.

FR-6.1: Form Fields (All fields are required unless noted):

Personal Information:

Full Name

Email Address (must be validated for correct format)

Phone Number

Event Details:

Event Type: A dropdown or radio button list must include: "Wedding," "Birthday," "Christening," "Business Party," "Christmas Party," "Business Meetup," and "Other."

Number of Guests: A number input (minimum value: 1).

Event Date: A date picker.

Special Wishes: A large text area for custom messages.

FR-6.2: Submission Logic (Backend):

Must use a Next.js API Route (e.g., /api/inquiry) to handle form submission.

The API route must perform server-side validation of all data.

Upon successful validation, the server must perform two actions:

Send the inquiry data to the business email (info@partyservice-alexander.de).

Send an automated confirmation email ("automatic reply") to the customer's provided email, stating that their message has been received and is being reviewed.

FR-6.3: User Feedback (Frontend):

The form must display clear validation errors if the user inputs invalid data (e.g., "Please enter a valid email").

Upon successful submission, the user must see an on-screen confirmation message (e.g., "Thank you! We have received your request and will contact you shortly.").

3. 🧪 Technical & Monitoring Requirements
TR-1: Framework:

The application must be built using Next.js.

TR-2: Form Handling & Email:

A transactional email service (e.g., Resend, SendGrid) must be integrated to handle the automated confirmation email (FR-6.2). Using a service like this is more reliable than nodemailer on a serverless function.

TR-3: Functionality Monitoring:

A system must be in place to "check [the form functionality] to be working regularly."

Recommendation: Implement an end-to-end test (e.g., using Playwright or Cypress) that automatically fills and submits the form in a staging environment. This test should be run on a schedule (e.g., daily) via a GitHub Action or similar CI/CD tool to verify the API route and email service are operational.
