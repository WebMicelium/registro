import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/pages/login/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>Bienvenido a Micelium</h1>} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Ruta por defecto para cuando no existe */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>

    // <div className="w-full h-screen bg-slate-100">
    //   <div className="pt-24">
    //     <Login />
    //   </div>
    // </div>
  );
}

export default App;
