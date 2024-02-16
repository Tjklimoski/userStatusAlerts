import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/navigation/Navbar";
import { useAuth } from "./context/AuthProvider";

export default function App() {
  const { auth } = useAuth();

  return (
    <>
      <Navbar />
      {auth.user ? <Dashboard /> : <LoginForm />}
    </>
  );
}
