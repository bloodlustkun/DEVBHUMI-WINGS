import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DestinationsMap } from '../components/DestinationsMap';

export function DestinationsPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16">
        <DestinationsMap />
      </main>
      <Footer />
    </div>
  );
}
