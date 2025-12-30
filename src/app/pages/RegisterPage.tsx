import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock, Building, Globe, ArrowRight, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    accountType: 'individual', // individual or b2b
    companyName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits starting with 6-9';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (formData.accountType === 'b2b' && !formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required for B2B accounts';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // API Integration Point - Replace with your actual API endpoint
      // const response = await fetch('YOUR_API_ENDPOINT/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     phone: `+91${formData.phone}`,
      //   }),
      // });
      // 
      // if (!response.ok) throw new Error('Registration failed');
      // const data = await response.json();
      
      // Mock success - Remove this in production
      console.log('Registration data:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // On success, redirect to login or dashboard
      alert('Registration successful! Please check your email to verify your account.');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-[#0f172a] mb-4">
                  Join Devbhoomi Wings
                </h1>
                <p className="text-lg text-[#64748b]">
                  Create an account and start your journey across incredible India
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#14b8a6]/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#14b8a6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f172a] mb-1">
                      Authorised by Government of India
                    </h3>
                    <p className="text-sm text-[#64748b]">
                      Registered as Devbhoomi Wings Pvt Ltd with full legal compliance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f97316]/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#f97316]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f172a] mb-1">
                      B2B Travel Solutions
                    </h3>
                    <p className="text-sm text-[#64748b]">
                      Special packages for travel agencies and corporate clients
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#14b8a6]/20 flex items-center justify-center">
                    <Building className="w-5 h-5 text-[#14b8a6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f172a] mb-1">
                      Since 2018
                    </h3>
                    <p className="text-sm text-[#64748b]">
                      Traveling and comforting travelers all over India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <Card className="p-8 border-2 border-[#e2e8f0]">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Account Type */}
                <div>
                  <Label>Account Type</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, accountType: 'individual' }))}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.accountType === 'individual'
                          ? 'border-[#14b8a6] bg-[#14b8a6]/10'
                          : 'border-[#e2e8f0] hover:border-[#cbd5e1]'
                      }`}
                    >
                      <User className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-sm font-medium">Individual</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, accountType: 'b2b' }))}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.accountType === 'b2b'
                          ? 'border-[#14b8a6] bg-[#14b8a6]/10'
                          : 'border-[#e2e8f0] hover:border-[#cbd5e1]'
                      }`}
                    >
                      <Building className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-sm font-medium">B2B Partner</div>
                    </button>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                {/* Company Name (B2B only) */}
                {formData.accountType === 'b2b' && (
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <div className="relative mt-2">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="Enter company name"
                      />
                    </div>
                    {errors.companyName && <p className="text-sm text-red-500 mt-1">{errors.companyName}</p>}
                  </div>
                )}

                {/* Email */}
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                    <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[#64748b]">+91</div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-20"
                      placeholder="9690707002"
                      maxLength={10}
                    />
                  </div>
                  {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Password */}
                <div>
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="Minimum 8 characters"
                    />
                  </div>
                  {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="Re-enter your password"
                    />
                  </div>
                  {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
                </div>

                {errors.submit && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                    {errors.submit}
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:shadow-lg"
                >
                  {isSubmitting ? (
                    'Creating Account...'
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-center text-[#64748b]">
                  Already have an account?{' '}
                  <Link to="/login" className="text-[#14b8a6] hover:underline font-medium">
                    Sign In
                  </Link>
                </p>

                <p className="text-xs text-center text-[#94a3b8]">
                  By creating an account, you agree to our{' '}
                  <Link to="/terms" className="text-[#14b8a6] hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className="text-[#14b8a6] hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
