import { useContext, createContext, useState } from "react";

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});

  function login(data) {
    setAuth(data);
  }

  function logout() {
    setAuth({});
  }

  const value = { auth, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
