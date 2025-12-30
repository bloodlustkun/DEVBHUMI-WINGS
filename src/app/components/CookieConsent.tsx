import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Here you can initialize analytics, tracking, etc.
    console.log('Cookies accepted');
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <Card className="max-w-4xl mx-auto bg-white border-2 border-[#14b8a6] shadow-2xl">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#14b8a6]/20 flex items-center justify-center">
              <Cookie className="w-6 h-6 text-[#14b8a6]" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-[#0f172a] mb-2">
                We Value Your Privacy
              </h3>
              <p className="text-sm text-[#64748b] mb-4">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies. 
                Learn more in our{' '}
                <Link to="/cookie-policy" className="text-[#14b8a6] hover:underline">
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-[#14b8a6] hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={acceptCookies}
                  className="bg-[#14b8a6] hover:bg-[#0d9488] text-white"
                >
                  Accept All
                </Button>
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  className="border-[#cbd5e1] hover:bg-[#f1f5f9]"
                >
                  Decline
                </Button>
                <Link to="/cookie-policy">
                  <Button variant="ghost" className="text-[#64748b]">
                    Manage Preferences
                  </Button>
                </Link>
              </div>
            </div>
            
            <button
              onClick={declineCookies}
              className="flex-shrink-0 p-2 rounded-full hover:bg-[#f1f5f9] transition-colors"
              aria-label="Close cookie consent"
            >
              <X className="w-5 h-5 text-[#64748b]" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
