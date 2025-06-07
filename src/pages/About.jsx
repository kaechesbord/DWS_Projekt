import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHandshake, faHeart } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-indigo-600 py-20">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20music%20studio%20interior%20with%20vintage%20instruments%20on%20wall%2C%20warm%20lighting%2C%20wooden%20elements%2C%20professional%20audio%20equipment%2C%20artistic%20atmosphere%2C%20high%20end%20recording%20studio%20environment&width=1440&height=400&seq=9&orientation=landscape"
            alt="O nama hero"
            className="w-full h-full object-cover object-top opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Naša Priča</h1>
            <p className="text-xl text-indigo-100">
              Više od 20 godina stvaramo glazbene snove
            </p>
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-8">
                MuzikaCRO je započela svoje putovanje 2003. godine kao mala
                trgovina glazbenih instrumenata u srcu Zagreba. Kroz godine
                predanog rada i strasti prema glazbi, izrasli smo u jednog od
                vodećih dobavljača glazbene opreme u Hrvatskoj.
              </p>
              <p className="text-gray-600 mb-8">
                Naša misija je jednostavna: omogućiti svakom glazbeniku, bilo
                profesionalcu ili početniku, pristup najkvalitetnijim
                instrumentima i opremi, uz stručno vodstvo i podršku.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Naše Vrijednosti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-star text-2xl text-indigo-600"><FontAwesomeIcon icon={faStar} /></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Kvaliteta</h3>
              <p className="text-gray-600">
                Surađujemo samo s najboljim proizvođačima i nudimo instrumente
                vrhunske kvalitete.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-hands-helping text-2xl text-indigo-600"><FontAwesomeIcon icon={faHandshake}/></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Stručnost</h3>
              <p className="text-gray-600">
                Naš tim čine iskusni glazbenici koji vam mogu pružiti najbolje
                savjete.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-2xl text-indigo-600"><FontAwesomeIcon icon={faHeart}/></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Strast</h3>
              <p className="text-gray-600">
                Glazba je naša strast, i tu strast dijelimo sa svakim našim
                kupcem.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-3">
          <h2 className="text-3xl font-bold text-center mb-12">Naš Tim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20confident%20middle%20aged%20man%20in%20business%20casual%20attire%2C%20warm%20lighting%2C%20neutral%20background%2C%20friendly%20smile%2C%20high%20quality%20portrait&width=300&height=300&seq=10&orientation=squarish"
                  alt="CEO"
                  className="w-48 h-48 rounded-full mx-auto object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marko Horvat</h3>
              <p className="text-gray-600 mb-2">CEO</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <i className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i>
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-6 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20woman%20in%20business%20casual%20attire%2C%20warm%20lighting%2C%20neutral%20background%2C%20friendly%20smile%2C%20high%20quality%20portrait&width=300&height=300&seq=11&orientation=squarish"
                  alt="Marketing Director"
                  className="w-48 h-48 rounded-full mx-auto object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ana Kovačić</h3>
              <p className="text-gray-600 mb-2">Marketing Director</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <i className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i>
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-6 relative">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20middle%20aged%20man%20with%20glasses%20in%20business%20casual%20attire%2C%20warm%20lighting%2C%20neutral%20background%2C%20friendly%20smile%2C%20high%20quality%20portrait&width=300&height=300&seq=12&orientation=squarish"
                  alt="Technical Expert"
                  className="w-48 h-48 rounded-full mx-auto object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ivan Novak</h3>
              <p className="text-gray-600 mb-2">Technical Expert</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <i className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-indigo-200">Godina iskustva</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">10000+</div>
              <div className="text-indigo-200">Zadovoljnih kupaca</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-indigo-200">Brendova</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-indigo-200">Poslovnica</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;