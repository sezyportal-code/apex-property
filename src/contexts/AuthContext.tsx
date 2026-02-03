import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  role: "user" | "agent" | "admin";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  loginAsDemo: (role?: "user" | "agent" | "admin") => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for template demonstration
const demoUsers: Record<string, User> = {
  user: {
    id: "demo-user-1",
    email: "demo@luxe.com",
    name: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    role: "user",
  },
  agent: {
    id: "demo-agent-1",
    email: "agent@luxe.com",
    name: "Victoria Hayes",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    role: "agent",
  },
  admin: {
    id: "demo-admin-1",
    email: "admin@luxe.com",
    name: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    role: "admin",
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored session on mount
    const storedUser = localStorage.getItem("luxe_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("luxe_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Demo mode: accept any credentials with valid format
    if (email && password.length >= 6) {
      const user: User = {
        id: `user-${Date.now()}`,
        email,
        name: email.split("@")[0],
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
        role: "user",
      };
      setUser(user);
      localStorage.setItem("luxe_user", JSON.stringify(user));
      setIsLoading(false);
      return { success: true };
    }
    
    setIsLoading(false);
    return { success: false, error: "Invalid email or password" };
  };

  const register = async (email: string, password: string, name: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Demo mode: accept any valid registration
    if (email && password.length >= 6 && name) {
      const user: User = {
        id: `user-${Date.now()}`,
        email,
        name,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
        role: "user",
      };
      setUser(user);
      localStorage.setItem("luxe_user", JSON.stringify(user));
      setIsLoading(false);
      return { success: true };
    }
    
    setIsLoading(false);
    return { success: false, error: "Please fill in all fields correctly" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("luxe_user");
  };

  const loginAsDemo = (role: "user" | "agent" | "admin" = "user") => {
    const demoUser = demoUsers[role];
    setUser(demoUser);
    localStorage.setItem("luxe_user", JSON.stringify(demoUser));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        loginAsDemo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
