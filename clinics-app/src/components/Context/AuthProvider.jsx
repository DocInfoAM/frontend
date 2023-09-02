import { createContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  setAuth: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuth] = useState(false);
  return <AuthContext.Provider value={{ isAuthenticated, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;