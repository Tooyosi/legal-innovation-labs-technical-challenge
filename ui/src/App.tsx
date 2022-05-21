import AppRoutes from 'Routes';
import { ToastContainer } from "react-toastify";
import 'assets/scss/main.scss';
import { AuthProvider } from 'contexts/Auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
