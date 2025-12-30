import { Star, Quote, ThumbsUp, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar } from './ui/avatar';
import { useState } from 'react';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  tripType: string;
  likes: number;
  verified: boolean;
}

// Mock reviews data - This can be replaced with API call
const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    rating: 5,
    date: '2024-12-15',
    comment: 'Absolutely fantastic experience with Devbhoomi Wings! The trip to Uttarakhand was perfectly organized. Our driver was professional, the stays were comfortable, and the itinerary was well-planned. Highly recommend for family trips!',
    tripType: 'Uttarakhand Family Tour',
    likes: 24,
    verified: true,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    date: '2024-12-10',
    comment: 'Best travel company I have worked with! They handled everything from transportation to accommodation flawlessly. The team was responsive and made sure we had an amazing time in Himachal Pradesh.',
    tripType: 'Himachal Adventure',
    likes: 18,
    verified: true,
  },
  {
    id: '3',
    name: 'Amit Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 4,
    date: '2024-12-05',
    comment: 'Great service and professional approach. The bike tour to Leh-Ladakh was a dream come true. Minor delays in communication, but overall experience was excellent. Would definitely book again!',
    tripType: 'Leh-Ladakh Bike Tour',
    likes: 31,
    verified: true,
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    location: 'London, UK',
    rating: 5,
    date: '2024-11-28',
    comment: 'As an NRI visiting India, Devbhoomi Wings made everything so easy! They customized a 2-week tour for my family covering multiple states. Excellent coordination and very trustworthy.',
    tripType: 'India Golden Triangle',
    likes: 15,
    verified: true,
  },
];

export function ReviewsSection() {
  const [reviews] = useState<Review[]>(MOCK_REVIEWS);
  
  // API-ready function for fetching reviews
  const fetchReviews = async () => {
    try {
      // Replace with actual API endpoint
      // const response = await fetch('YOUR_API_ENDPOINT/api/reviews');
      // const data = await response.json();
      // setReviews(data);
      console.log('Fetch reviews from API');
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? 'fill-[#f97316] text-[#f97316]'
                : 'fill-[#e2e8f0] text-[#e2e8f0]'
            }`}
          />
        ))}
      </div>
    );
  };

  const calculateAverageRating = () => {
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14b8a6]/10 text-[#14b8a6] mb-4">
            <Quote className="w-4 h-4" />
            <span className="text-sm font-medium">Traveler Reviews</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            What Our Travelers Say
          </h2>
          
          <p className="text-[#64748b] max-w-2xl mx-auto mb-6">
            Real experiences from real travelers. Join thousands of satisfied customers who trust Devbhoomi Wings.
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-8 p-6 bg-[#f8fafc] rounded-lg max-w-md mx-auto">
            <div>
              <div className="text-4xl font-bold text-[#0f172a]">
                {calculateAverageRating()}
              </div>
              <div className="flex gap-1 mt-2">
                {renderStars(5)}
              </div>
            </div>
            <div className="h-12 w-px bg-[#cbd5e1]" />
            <div className="text-left">
              <div className="text-2xl font-bold text-[#0f172a]">
                {reviews.length}+
              </div>
              <div className="text-sm text-[#64748b]">
                Verified Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="p-6 border-2 border-[#e2e8f0] hover:border-[#14b8a6] transition-all duration-300 hover:shadow-lg"
            >
              {/* Review Header */}
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] text-white flex items-center justify-center">
                  <span className="text-lg font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-[#0f172a]">
                      {review.name}
                    </h4>
                    {review.verified && (
                      <span className="px-2 py-0.5 rounded text-xs bg-[#14b8a6]/10 text-[#14b8a6] font-medium">
                        Verified
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-[#64748b] mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{review.location}</span>
                    <span>•</span>
                    <span>{new Date(review.date).toLocaleDateString('en-IN')}</span>
                  </div>
                  
                  <div className="mt-2">{renderStars(review.rating)}</div>
                </div>
              </div>

              {/* Trip Type Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f97316]/10 text-[#f97316] text-sm mb-3">
                <span>{review.tripType}</span>
              </div>

              {/* Review Comment */}
              <p className="text-[#475569] leading-relaxed mb-4">
                "{review.comment}"
              </p>

              {/* Review Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#e2e8f0]">
                <button className="flex items-center gap-2 text-[#64748b] hover:text-[#14b8a6] transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">{review.likes} helpful</span>
                </button>
                
                <span className="text-xs text-[#94a3b8]">
                  Reviewed via Instagram: @devbhoomiwings
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#64748b] mb-4">
            Have you traveled with us? Share your experience!
          </p>
          <a
            href="https://www.instagram.com/devbhoomiwings"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Leave a Review on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
