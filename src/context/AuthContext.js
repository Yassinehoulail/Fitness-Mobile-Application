import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = (email) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ email, name: 'User' });
      setLoading(false);
    }, 500);
  };

  const register = (email, _password, name) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ email, name });
      setLoading(false);
    }, 500);
  };

  const value = useMemo(
    () => ({ user, loading, login, register, logout: () => setUser(null) }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
