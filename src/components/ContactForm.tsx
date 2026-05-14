import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ContactFormProps {
  compact?: boolean;
}

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'India',
  'Germany', 'France', 'Japan', 'South Korea', 'Brazil',
  'Mexico', 'South Africa', 'UAE', 'Saudi Arabia', 'Singapore',
  'China', 'Italy', 'Spain', 'Netherlands', 'Sweden',
  'Norway', 'Denmark', 'Finland', 'Switzerland', 'Belgium',
  'New Zealand', 'Ireland', 'Poland', 'Czech Republic', 'Austria',
  'Other'
];

export default function ContactForm({ compact = false }: ContactFormProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    city: '',
    requirements: [] as string[],
    projectDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (value: string) => {
    setFormData(prev => {
      if (value === 'All') {
        const allChecked = prev.requirements.includes('All');
        return {
          ...prev,
          requirements: allChecked ? [] : ['Detailing', 'Engineering', 'PE Stamp', 'All'],
        };
      }
      const updated = prev.requirements.includes(value)
        ? prev.requirements.filter(r => r !== value && r !== 'All')
        : [...prev.requirements, value];
      return { ...prev, requirements: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          city: '',
          requirements: [],
          projectDetails: '',
        });
      }
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>Message Sent!</h3>
        <p className={`${isLight ? 'text-gray-600' : 'text-dark-text-secondary'}`}>
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-2 bg-brand-red text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
          data-testid="button-send-another"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClasses = `w-full px-4 py-3 rounded-md border text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red ${
    isLight
      ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
      : 'bg-dark-bg border-dark-border text-white placeholder-gray-500'
  }`;

  const labelClasses = `block text-sm font-bold mb-1.5 ${isLight ? 'text-gray-800' : 'text-gray-200'}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className={labelClasses}>
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="First Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={inputClasses}
            data-testid="input-fullname"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            data-testid="input-email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-brand-red">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Type your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClasses}
            data-testid="input-phone"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
            data-testid="input-company"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="country" className={labelClasses}>
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`${inputClasses} appearance-none bg-no-repeat bg-right pr-10`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 12px center',
            }}
            data-testid="select-country"
          >
            <option value="">Country</option>
            {countries.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className={labelClasses}>
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className={inputClasses}
            data-testid="input-city"
          />
        </div>
      </div>

      <div>
        <label className={`block text-sm font-bold mb-3 ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>
          Requirements
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Detailing', 'PE Stamp', 'Engineering', 'All'].map(req => (
            <label
              key={req}
              className={`flex items-center gap-3 cursor-pointer group`}
              data-testid={`checkbox-${req.toLowerCase().replace(' ', '-')}`}
            >
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  checked={formData.requirements.includes(req)}
                  onChange={() => handleCheckbox(req)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  formData.requirements.includes(req)
                    ? 'bg-brand-red border-brand-red'
                    : isLight ? 'border-gray-300 bg-white' : 'border-dark-border bg-dark-bg'
                }`}>
                  {formData.requirements.includes(req) && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className={`text-sm font-medium ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                {req}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="projectDetails" className={labelClasses}>
          Project Details & Requirements
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          placeholder="Tell us about your project requirements, timeline and any specific needs....."
          value={formData.projectDetails}
          onChange={handleChange}
          rows={compact ? 3 : 4}
          className={`${inputClasses} resize-y`}
          data-testid="textarea-project-details"
        />
      </div>

      <div className="text-center pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-10 py-3.5 bg-brand-red text-white font-bold rounded-md hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed text-base"
          data-testid="button-send-message"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
