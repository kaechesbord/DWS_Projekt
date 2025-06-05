import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  // Form errors
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Ime je obavezno";
      isValid = false;
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Prezime je obavezno";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email je obavezan";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Unesite valjanu email adresu";
      isValid = false;
    }

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Korisničko ime je obavezno";
      isValid = false;
    } else if (formData.username.length < 4) {
      newErrors.username = "Korisničko ime mora imati najmanje 4 znaka";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Lozinka je obavezna";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Lozinka mora imati najmanje 8 znakova";
      isValid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Potvrdite lozinku";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Lozinke se ne podudaraju";
      isValid = false;
    }

    // Terms agreement validation
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Morate prihvatiti uvjete korištenja";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with registration
      console.log("Form submitted:", formData);
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
      });
    }
  };
  return (
    <section className="py-16 bg-gray-50">
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
                      Potvrdite lozinku
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                      placeholder="Potvrdite lozinku"
                    />
                    {formErrors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start mt-4">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="agreeTerms"
                        className="font-medium text-gray-700"
                      >
                        Prihvaćam{" "}
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          uvjete korištenja
                        </a>{" "}
                        i{" "}
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          pravila privatnosti
                        </a>
                      </label>
                      {formErrors.agreeTerms && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.agreeTerms}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mt-6 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Registriraj se
                  </button>

                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                      Već imate račun?
                      <Link to={"/login"}><a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-800 ml-1"
                      >
                        Prijavite se
                      </a></Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Register