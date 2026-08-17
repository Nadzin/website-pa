import styles from '../page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum & AGB',
  description: 'Impressum und Allgemeine Geschäftsbedingungen (AGB) von Partyservice Alexander.',
};

export default function Impressum() {
  return (
    <main className={styles.main}>
      <div style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Impressum</h1>
        <p style={{ marginBottom: '2rem' }}>
          <a href="#agb" style={{ textDecoration: 'underline', color: 'inherit' }}>
            Springe zu den Allgemeinen Geschäftsbedingungen (AGB)
          </a>
        </p>

        <p>
          Alexander Nadezkin<br />
          Partyservice Alexander<br />
          Sternenstr. 2<br />
          78669 Wellendingen
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 07426 – 931 69 15<br />
          E-Mail: info@partyservice-alexander.de
        </p>

        <h2>Angaben zur Berufs­haftpflicht­versicherung</h2>
        <p>
          <strong>Name und Sitz des Versicherers:</strong><br />
          LVM Versicherung<br />
          Kolde-Ring 21<br />
          48126 Münster
        </p>
        <p>
          <strong>Geltungsraum der Versicherung:</strong><br />
          DE
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>.<br />Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

        <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

        <hr style={{ margin: '3rem 0', borderTop: '1px solid #ccc' }} />

        <h1 id="agb">Allgemeine Geschäftsbedingungen</h1>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Vertragsabschluss</h2>
          <p>
            Diese allgemeinen Liefer- und Zahlungsbedingungen gelten für alle unsere Dienstleistungen wie Speisenzubereitungen, Lieferungen, Geschirrbestellungen etc. Unsere Angebote sind freibleibend. Sonstige Vereinbarungen, insbesondere mündliche Verabredungen und Zusicherungen, die nicht aus dem an uns erteilten Auftrag ersichtlich sind, werden erst durch eine schriftliche Bestätigung verbindlich.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Anzahlung</h2>
          <p>
            Für eine verbindliche Reservierung an Ihrem Hochzeitstag wird eine Anzahlung von 500€ fällig.
            Eine unverbindliche Reservierung ist auch ohne Anzahlung möglich. Diese wird erst mit dem Eingang der Anzahlung auf unser Konto verbindlich.
            Bis dahin behalten wir uns vor auch andere Interessenten für diesen Termin zu berücksichtigen, sofern diese eine Anzahlung leisten.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Rücktritt des Kunden</h2>
          <p>
            Bei Vertragsrücktritt durch den Kunden ist die bereits geleistete Anzahlung über 500€ in jedem Fall zu entrichten.&nbsp;
            <strong>Der Grund der Stornierung spielt keine Rolle!</strong>
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Lieferung</h2>
          <p>
            Die Lieferung erfolgt von fachlich geschultem Personal, nach bestem Wissen und Gewissen. Es muss mit Zeitverschiebungen bis ca. 30 Minuten gerechnet werden. Für Schäden, die durch Ereignisse höherer Gewalt entstehen, übernehmen wir keine Schadenersatzansprüche.
            Besonderheiten die den Lieferort betreffen, wie Baustellen, lange Wege, Treppen über drei Etagen, nicht funktionierende Fahrstühle etc. sind durch den Kunden bei der Bestellung mitzuteilen, damit wir uns zeitlich und organisatorisch darauf einrichten können.
            Mit den Vorbereitungen für Feier beginnen wir in der Regel schon am Freitagabend gegen 18:00 Uhr.
            Voraussetzung wir kochen in der Halle.
            Wir möchten Sie bitten zu verstehen: wir sind da um zu kochen. Reinigungstätigkeiten (Spülen von Geschirr, Küchengeräte etc.) sind durch unser Angebot nicht abgedeckt und werden oft von unseren Kunden direkt übernommen. Gegen Aufpreis stellen wir selbstverständlich Personal zu Verfügung.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Mängelrüge</h2>
          <p>
            Der Kunde hat die Ware unverzüglich nach Erhalt, mit ihm zumutbarer Gründlichkeit zu prüfen. Bei etwaigen Unstimmigkeiten sind sofort schriftliche Vermerke auf dem Lieferschein/Rechnung zu tätigen. Bitte informieren Sie uns umgehend telefonisch, damit wir aktiv werden können.
            Bei falsch angegebener Personenzahl tragen wir keine Verantwortung. Zur Personenzahl gehören alle Gäste, Brautpaar, Musiker und Kameramann.
            Bringt der Kunde oder seine Gäste zusätzlich eigene Speisen oder dergleichen in die Veranstaltung mit ein, haftet der Kunde für den ordnungsgemäßen Zustand und die ordnungsgemäße Lagerung aller eingebrachten Produkte laut Lebensmittelhygieneverordnung und anderer hygienischer Grundsätze.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Ausstattungszubehör</h2>
          <p>
            Sämtliche von uns überlassenen Ausstattungsgegenstände sind, falls nichts anderes vereinbart wurde, innerhalb von 3 Tagen in gereinigtem, ordentlichen Zustands an uns zurückzugeben. Für nicht gereinigte oder mangelhaft gereinigte Gegenstände berechnen wir Ihnen eine Reinigungspauschale, deren Höhe vom Umfang des Arbeitsaufwandes abhängig gemacht wird. Fehlende oder beschädigte Gegenstände werden Ihnen zum Wiederbeschaffungspreis in Rechnung gestellt.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Sicherheit</h2>
          <p>
            <strong>Während Ihrer Feier ist Insbesondere darauf zu achten, dass Kinder von den (heißen!) Geräten fernzuhalten sind.</strong>
          </p>
        </section>
      </div>
    </main>
  );
}
