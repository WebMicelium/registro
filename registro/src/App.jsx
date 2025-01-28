import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Main from "./components/pages/main/Main";


function App() {
  return (
    <div className="w-full h-screen bg-slate-100">
      <div className="pt-24">
       <Navbar />
       <Main />
       <Footer />
      </div>
    </div>
  );
}

export default App;
