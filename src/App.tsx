import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Auth } from './pages/Auth';
import { ProductManagement } from './pages/ProductManagement';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/manage" element={<ProductManagement />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
