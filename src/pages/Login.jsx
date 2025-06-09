import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    usernameOrEmail: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.usernameOrEmail || !form.password) {
      setError('Molimo unesite korisničko ime/email i lozinku.');
      return;
    }

    const result = await login({
      email: form.usernameOrEmail, // može biti email ili username
      password: form.password,
    });

    if (result.success) {
      alert('Prijava uspješna!');
      navigate('/');
    } else {
      setError(result.message || 'Neispravno korisničko ime/email ili lozinka.');
    }
  };

  return (
    <section className="py-16 bg-gray-50 mt-52">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-indigo-600 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Dobrodošli natrag!</h2>
              <p className="mb-8">
                Prijavite se na svoj račun kako biste pristupili svim našim uslugama i ekskluzivnim
                ponudama.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-indigo-300 mr-3"></i>
                  <span>Pristup 3D pregledima instrumenata</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-indigo-300 mr-3"></i>
                  <span>Personalizirane preporuke</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-indigo-300 mr-3"></i>
                  <span>Spremanje omiljenih instrumenata</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Prijava</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    name="usernameOrEmail"
                    value={form.usernameOrEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Unesite email ili korisničko ime"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lozinka</label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Unesite lozinku"
                    required
                  />
                </div>

                {error && <p className="text-red-600 mb-2">{error}</p>}

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Zapamti me
                    </label>
                  </div>

                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                    Zaboravili ste lozinku?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Prijavi se
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Nemate račun?
                    <Link to="/registracija">
                      <span className="font-medium text-indigo-600 hover:text-indigo-800 ml-1">
                        Registrirajte se
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
