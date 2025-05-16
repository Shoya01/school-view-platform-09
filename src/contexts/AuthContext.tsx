
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '@/types';

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@school.edu',
    role: 'admin'
  },
  {
    id: '2',
    name: 'Teacher Smith',
    email: 'teacher@school.edu',
    role: 'teacher',
    subject: 'Mathematics'
  },
  {
    id: '3',
    name: 'Student Jones',
    email: 'student@school.edu',
    role: 'student',
    className: '10-A'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('eduAppUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Find matching mock user
    const user = MOCK_USERS.find(u => u.email.toLowerCase() === email.toLowerCase() && u.role === role);
    
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('eduAppUser', JSON.stringify(user));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('eduAppUser');
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
