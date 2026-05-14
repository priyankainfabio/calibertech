import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, LogIn } from 'lucide-react';
import { login, isAuthenticated } from '../utils/auth';
import { useTheme } from '../contexts/ThemeContext';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (login(username, password)) {
        navigate('/admin');
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <main className={`min-h-screen flex items-center justify-center ${isLight ? 'bg-gray-50' : 'bg-dark-bg'} transition-colors duration-300`}>
      <div className={`${isLight ? 'bg-white border-gray-300' : 'bg-dark-bg-card border-dark-border'} w-full max-w-md p-8 rounded-2xl shadow-2xl border-2 transition-colors duration-300`}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock size={32} className="text-brand-red" />
          </div>
          <h1 className={`text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
            Admin Login
          </h1>
          <p className={`${isLight ? 'text-gray-600' : 'text-dark-text-secondary'} transition-colors duration-300`}>
            Enter your credentials to access the admin panel
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-500/10 border-2 border-red-500/50 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
              Username
            </label>
            <div className="relative">
              <User size={20} className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isLight ? 'text-gray-500' : 'text-dark-text-tertiary'} transition-colors duration-300`} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all`}
                placeholder="Enter username"
              />
            </div>
          </div>

          <div>
            <label className={`block text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'} mb-2 transition-colors duration-300`}>
              Password
            </label>
            <div className="relative">
              <Lock size={20} className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isLight ? 'text-gray-500' : 'text-dark-text-tertiary'} transition-colors duration-300`} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 ${isLight ? 'border-gray-300 bg-white text-gray-900' : 'border-dark-border bg-dark-bg-tertiary text-white'} focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all`}
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-red hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Logging in...
              </>
            ) : (
              <>
                <LogIn size={20} />
                Login
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
