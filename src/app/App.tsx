import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { HomePage } from './pages/HomePage';
import { PackagesPage } from './pages/PackagesPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { TransportPage } from './pages/TransportPage';
import { StaysPage } from './pages/StaysPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/stays" element={<StaysPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <CookieConsent />
    </>
  );
}
