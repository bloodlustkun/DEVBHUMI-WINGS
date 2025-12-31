import { useEffect, useState, memo } from 'react';
import { Bell, X } from 'lucide-react';

const announcements = [
  "🎉 Special New Year Offer Contact US now - 9690707002 ",
  "🏔️ New trekking routes added to Kedarnath and Badrinath",
  "🚗 Cab bookings now available 24/7",
  "⭐ 500+ happy travelers this season",
  "📞 24/7 customer support available",
  "🌟 Featured: Char Dham Yatra packages starting from ₹15,000"
];

export const NewsTicker = memo(function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 px-4 relative overflow-hidden">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mr-4">
          <Bell className="h-4 w-4 animate-pulse" />
          <span className="font-medium text-sm">ANNOUNCEMENT</span>
        </div>

        <div className="flex-1 text-center overflow-hidden">
          <div
            className="inline-block whitespace-nowrap animate-pulse"
            key={currentIndex}
          >
            {announcements[currentIndex]}
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
});