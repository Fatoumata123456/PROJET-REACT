function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Connexion</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
