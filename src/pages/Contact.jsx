// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be the actual form submission logic
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6">
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">CompanyName</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-200 transition duration-300 cursor-pointer">Početna</a>
              <a href="#" className="hover:text-blue-200 transition duration-300 cursor-pointer">O nama</a>
              <a href="#" className="hover:text-blue-200 transition duration-300 cursor-pointer">Usluge</a>
              <a href="#" className="hover:text-blue-200 transition duration-300 cursor-pointer font-semibold">Kontakt</a>
            </div>
            <div className="md:hidden">
              <button className="text-white focus:outline-none cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Kontaktirajte nas</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stojimo vam na raspolaganju za sva pitanja. Ispunite obrazac ili nas kontaktirajte putem navedenih podataka.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="md:w-2/5">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Kontakt informacije</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-phone text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Telefon</h3>
                      <p className="text-gray-600 mt-1">+385 1 234 5678</p>
                      <p className="text-gray-600">+385 91 234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-envelope text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Email</h3>
                      <p className="text-gray-600 mt-1">info@tvrtka.hr</p>
                      <p className="text-gray-600">podrska@tvrtka.hr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-map-marker-alt text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Adresa</h3>
                      <p className="text-gray-600 mt-1">Ilica 123</p>
                      <p className="text-gray-600">10000 Zagreb, Hrvatska</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-clock text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Radno vrijeme</h3>
                      <p className="text-gray-600 mt-1">Ponedjeljak - Petak: 9:00 - 17:00</p>
                      <p className="text-gray-600">Subota - Nedjelja: Zatvoreno</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Pratite nas</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-200 hover:bg-blue-600 hover:text-white transition-colors duration-300 p-3 rounded-full cursor-pointer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="bg-gray-200 hover:bg-blue-400 hover:text-white transition-colors duration-300 p-3 rounded-full cursor-pointer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="bg-gray-200 hover:bg-pink-600 hover:text-white transition-colors duration-300 p-3 rounded-full cursor-pointer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="bg-gray-200 hover:bg-blue-800 hover:text-white transition-colors duration-300 p-3 rounded-full cursor-pointer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-3/5">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pošaljite nam poruku</h2>
                
                {submitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                    <strong className="font-bold">Uspješno poslano! </strong>
                    <span className="block sm:inline">Hvala vam na poruci. Odgovorit ćemo vam u najkraćem mogućem roku.</span>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Ime i prezime</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        placeholder="Vaše ime i prezime"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email adresa</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        placeholder="vasa.adresa@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Predmet</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      placeholder="O čemu želite razgovarati?"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Poruka</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      placeholder="Napišite vašu poruku ovdje..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      Slažem se s <a href="#" className="text-blue-600 hover:underline">politikom privatnosti</a> i obradom osobnih podataka
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Pošalji poruku
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Gdje nas možete pronaći</h2>
          <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden">
            {/* Map would be integrated here */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">Ovdje bi bila integrirana Google mapa</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Često postavljana pitanja</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Koje je vaše radno vrijeme?</h3>
              <p className="text-gray-600">Naš ured je otvoren od ponedjeljka do petka, od 9:00 do 17:00 sati. Vikendom smo zatvoreni, ali možete poslati upit putem kontakt obrasca u bilo koje vrijeme.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Koliko brzo odgovarate na upite?</h3>
              <p className="text-gray-600">Nastojimo odgovoriti na sve upite unutar 24 sata tijekom radnih dana. Za hitne slučajeve, preporučujemo da nas kontaktirate telefonski.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mogu li doći osobno u vaš ured bez prethodne najave?</h3>
              <p className="text-gray-600">Preporučujemo da zakažete sastanak unaprijed kako bismo vam mogli posvetiti punu pažnju. Molimo vas da nas kontaktirate telefonom ili e-mailom za dogovor termina.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Nudite li usluge izvan Zagreba?</h3>
              <p className="text-gray-600">Da, naše usluge dostupne su na području cijele Hrvatske. Za klijente izvan Zagreba, organiziramo online sastanke ili posjete prema dogovoru.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">CompanyName</h3>
              <p className="text-gray-400">Pružamo profesionalne usluge od 2010. godine, s fokusom na kvalitetu i zadovoljstvo klijenata.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Brzi linkovi</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Početna</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">O nama</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Usluge</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Kontakt</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                  <span>Ilica 123, 10000 Zagreb</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone mt-1 mr-2"></i>
                  <span>+385 1 234 5678</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-2"></i>
                  <span>info@tvrtka.hr</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Prijavite se na naš newsletter za novosti i ponude.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Vaša email adresa" 
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800 border-none"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Prijava
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 CompanyName. Sva prava pridržana.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Contact;
