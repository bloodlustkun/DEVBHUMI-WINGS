import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StaysExperiences } from '../components/StaysExperiences';

export function StaysPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16">
        <StaysExperiences />
      </main>
      <Footer />
    </div>
  );
}
