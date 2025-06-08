import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';  // <-- import useNavigate

const Register = () => {
  const navigate = useNavigate();  // <-- dodaj useNavigate hook

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Ime je obavezno";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Prezime je obavezno";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email je obavezan";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Unesite valjanu email adresu";
      isValid = false;
    }

    if (!formData.username.trim()) {
      newErrors.username = "Korisničko ime je obavezno";
      isValid = false;
    } else if (formData.username.length < 4) {
      newErrors.username = "Korisničko ime mora imati najmanje 4 znaka";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Lozinka je obavezna";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Lozinka mora imati najmanje 8 znakova";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Potvrdite lozinku";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Lozinke se ne podudaraju";
      isValid = false;
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Morate prihvatiti uvjete korištenja";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Provjera username-a
      const resUsername = await fetch(`http://localhost:5000/users?username=${formData.username}`);
      const existingUsername = await resUsername.json();

      if (existingUsername.length > 0) {
        setFormErrors(prev => ({ ...prev, username: "Korisničko ime već postoji" }));
        return;
      }

      // Provjera email-a
      const resEmail = await fetch(`http://localhost:5000/users?email=${formData.email}`);
      const existingEmail = await resEmail.json();

      if (existingEmail.length > 0) {
        setFormErrors(prev => ({ ...prev, email: "Email već postoji" }));
        return;
      }

      // Kreiranje korisnika (bez confirmPassword i agreeTerms)
      const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        username: formData.username,
        password: formData.password,
      };

      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert("Uspješna registracija!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
          agreeTerms: false,
        });

        // Ovdje dodajemo redirect na login stranicu
        navigate('/login');  // <--- ovo prebacuje na login nakon registracije
      } else {
        alert("Došlo je do greške prilikom registracije.");
      }
    } catch (error) {
      console.error("Greška:", error);
      alert("Greška u komunikaciji s serverom.");
    }
  };

  return (
    <section className="py-16 bg-gray-50 mt-52">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-indigo-600 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Pridružite nam se!</h2>
              <p className="mb-8">
                Registrirajte se i postanite dio naše glazbene zajednice.
                Uživajte u ekskluzivnim pogodnostima i posebnim ponudama.
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
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-indigo-300 mr-3"></i>
                  <span>Posebne ponude i popusti</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Registracija
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ime
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                      placeholder="Unesite ime"
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prezime
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                      placeholder="Unesite prezime"
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email adresa
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                    placeholder="Unesite email adresu"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Korisničko ime
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                    placeholder="Unesite korisničko ime"
                  />
                  {formErrors.username && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.username}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lozinka
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                    placeholder="Unesite lozinku"
                  />
                  {formErrors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Potvrdi lozinku
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                    placeholder="Ponovno unesite lozinku"
                  />
                  {formErrors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.confirmPassword}
                    </p>
                  )}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-600">
                    Slažem se s{" "}
                    <Link
                      to="/terms"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      uvjetima korištenja
                    </Link>
                  </label>
                </div>
                {formErrors.agreeTerms && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.agreeTerms}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Registriraj se
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
