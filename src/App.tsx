import React from "react";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4 bg-gray-100">
        <LoginPage />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>
          &copy; {currentYear} Mi Aplicación. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
