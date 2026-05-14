const ADMIN_USERNAME = 'Caliber';
const ADMIN_PASSWORD = 'Project@edit#back';
const AUTH_KEY = 'caliber_admin_auth';

export const login = (username: string, password: string): boolean => {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    localStorage.setItem(AUTH_KEY, 'authenticated');
    return true;
  }
  return false;
};

export const logout = (): void => {
  localStorage.removeItem(AUTH_KEY);
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem(AUTH_KEY) === 'authenticated';
};
