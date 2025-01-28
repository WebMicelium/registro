import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div className="w-full h-screen bg-slate-100">
      <div className="pt-24">
        <BrowserRouter>
        <Routes>

          <Route element={<Navbar />}>
          <Route element={<Footer />}>
          {/* Ruta Principal */}
          <Route path="/" element={<h1>Home</h1>} />

          {/* Rutas personalizadas */}
          <Route path="/login" element={<h1>Login</h1>} />

          </Route>
          </Route>

          {/* Ruta por defecto */}
          <Route path="*" element={<h1>404 Not Found</h1>} />


        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
