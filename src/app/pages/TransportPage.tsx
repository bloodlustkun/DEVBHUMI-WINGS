import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TransportOS } from '../components/TransportOS';

export function TransportPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16">
        <TransportOS />
      </main>
      <Footer />
    </div>
  );
}
