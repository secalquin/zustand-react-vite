import React, { useState } from "react";
import useUserStore from "../store/useUserStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, isAuthenticated, login, updateProfile, logout } = useUserStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Información ficticia del usuario
    const user = { id: "1", name: "John Doe", email };
    login(user);
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      const updatedUser = { ...user, email };
      updateProfile(updatedUser);
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-gray-100">
      <div className="bg-white p-14 rounded-lg shadow-lg max-w-xl w-full mt-8">
        <h2 className="text-4xl font-bold mb-8 text-center">
          {isAuthenticated ? "Perfil de Usuario" : "Iniciar Sesión"}
        </h2>
        {isAuthenticated ? (
          <form onSubmit={handleUpdateProfile}>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-xl font-bold mb-4"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-xl font-bold mb-4"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nombre"
                value={user?.name || ""}
                readOnly
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                Actualizar Perfil
              </button>
              <button
                type="button"
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                Logout
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-xl font-bold mb-4"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 text-xl font-bold mb-4"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                Iniciar Sesión
              </button>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-lg text-blue-500 hover:text-blue-800"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;