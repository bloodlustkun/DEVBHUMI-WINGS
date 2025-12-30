import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PackagesGrid } from '../components/PackagesGrid';

export function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0f172a] mb-8">Travel Packages</h1>
          <PackagesGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
