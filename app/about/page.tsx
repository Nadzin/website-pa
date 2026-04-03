import React from 'react';
import TeamProfile from '@/components/TeamProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über Uns',
  description: 'Lernen Sie das Team hinter Partyservice Alexander kennen. Erfahren Sie mehr über unsere Geschichte, unsere Philosophie und die Menschen, die Ihre Feier zu etwas Besonderem machen.',
};

const AboutUsPage = () => {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '4rem', textAlign: 'center' }}>Über Uns</h1>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', fontFamily: 'var(--font-playfair-display)' }}>Unsere Geschichte & Philosophie</h2>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          Partyservice Alexander blickt auf eine lange Tradition in der Gastronomie zurück. Seit unserer Gründung vor über 20 Jahren ist es unser Ziel, unvergessliche kulinarische Erlebnisse zu schaffen. Was als kleines Familienunternehmen begann, hat sich zu einem renommierten Partyservice entwickelt, der für Qualität, Kreativität und exzellenten Service steht.
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
          Unsere Philosophie ist einfach: Wir glauben, dass gutes Essen die Seele berührt und Menschen zusammenbringt. Deshalb legen wir größten Wert auf frische, saisonale und hochwertige Zutaten, die wir sorgfältig auswählen. Jedes Gericht wird mit Leidenschaft und Präzision zubereitet, um Ihre Erwartungen nicht nur zu erfüllen, sondern zu übertreffen.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2.5rem', textAlign: 'center', fontFamily: 'var(--font-playfair-display)' }}>Unser Team</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          <TeamProfile
            imageSrc="/food_pictures/Verschiedenes/C&D-533.jpg"
            name="Alexander Nadezkin"
            role="Küchenchef & Gründer"
            description="Mit über 25 Jahren Erfahrung als ausgebildeter Koch in der Gastronomie, ist Alexander das Herzstück unseres Partyservices. Seine Expertise, insbesondere bei unzähligen Hochzeiten und Großveranstaltungen, garantiert kulinarische Höchstleistungen."
          />
          <TeamProfile
            imageSrc="/food_pictures/denny.jpeg"
            name="Denny Nadezkin"
            role="Jungkoch"
            description="Denny ist gelernter Koch und erhielt seine ausgezeichnete Ausbildung im Öschberghof, inklusive aller gastronomischen Outlets. Durch das Aufwachsen mit dem Partyservice entwickelte er früh ein Gespür für Qualität, Organisation und anspruchsvolle Gastronomie."
          />
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
