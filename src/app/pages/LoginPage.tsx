import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API Integration Point
      console.log('Login data:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/');
    } catch (error) {
      setErrors({ submit: 'Invalid credentials' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <div className="py-16 px-4">
        <Card className="max-w-md mx-auto p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Email</Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="pl-10"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <Label>Password</Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="pl-10"
                  placeholder="Enter password"
                />
              </div>
            </div>
            {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}
            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#14b8a6]">
              {isSubmitting ? 'Signing In...' : 'Sign In'} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-sm text-center text-gray-600">
              Don't have an account? <Link to="/register" className="text-[#14b8a6] hover:underline">Register</Link>
            </p>
          </form>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
