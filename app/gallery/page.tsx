import { Metadata } from 'next';
import Gallery from './Gallery'; // Assuming you extract the gallery logic into this component

export const metadata: Metadata = {
  title: 'Bildergalerie',
  description: 'Sehen Sie unsere kulinarischen Kreationen in Aktion. Unsere Bildergalerie gibt Ihnen einen Einblick in die Vielfalt und Qualität unseres Caterings.',
};

const GalleryPage = () => {
  return (
    <main>
      <Gallery />
    </main>
  );
};

export default GalleryPage;
