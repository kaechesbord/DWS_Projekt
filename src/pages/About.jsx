import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHandshake, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/Navbar";

// Stranica "O nama"
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />

      {/* Hero sekcija */}
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

      {/* Naša priča */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-8">
                SoundWave je započela svoje putovanje 2003. godine kao mala
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

      {/* Vrijednosti */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Naše Vrijednosti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kvaliteta */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faStar} className="text-2xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Kvaliteta</h3>
              <p className="text-gray-600">
                Surađujemo samo s najboljim proizvođačima i nudimo instrumente
                vrhunske kvalitete.
              </p>
            </div>
            {/* Stručnost */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faHandshake} className="text-2xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Stručnost</h3>
              <p className="text-gray-600">
                Naš tim čine iskusni glazbenici koji vam mogu pružiti najbolje
                savjete.
              </p>
            </div>
            {/* Strast */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faHeart} className="text-2xl text-indigo-600" />
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

      {/* Tim */}
      <section className="py-16">
        <div className="container mx-auto px-3">
          <h2 className="text-3xl font-bold text-center mb-12">Naš Tim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Član tima 1 */}
            <div className="text-center">
              <div className="mb-6 relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQHQBI5iQfp2PA/profile-displayphoto-shrink_200_200/B4DZRC20eQHUAY-/0/1736288455533?e=2147483647&v=beta&t=W8y4vwdk36CdMjgJ8WnnUxYARucVQGpAzTyItZzZqT0"
                  alt="CEO"
                  className="w-48 h-48 rounded-full mx-auto object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Damir Lihtner</h3>
              <p className="text-gray-600 mb-2">CEO</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
            {/* Član tima 2 */}
            <div className="text-center">
              <div className="mb-6 relative">
                <img
                  src="https://cdn.discordapp.com/attachments/1372645046746353725/1381709191592546304/IMG_20250609_205833.png?ex=68488076&is=68472ef6&hm=a789e9af82645fae18abb0577c0e780e4560495d130851087a1b70dc39ecb303&"
                  alt="Marketing Director"
                  className="w-48 h-48 rounded-full mx-auto object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Azam Hasičić</h3>
              <p className="text-gray-600 mb-2">Čuvar Tajni</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
            {/* Član tima 3 */}
            <div className="text-center">
              <div className="mb-6 relative">
                <img
                  src="https://cdn.discordapp.com/attachments/1372645046746353725/1381719234173866174/9554c2a8-4d13-4829-85df-2476f2885499.jpg?ex=684889d0&is=68473850&hm=c199d07031a7a862e9df296deb69500af601e5a355fbc93cc98fb9e50ea1b2d5&"
                  alt="Technical Expert"
                  className="w-48 h-48 rounded-full mx-auto object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Muhamed Talić</h3>
              <p className="text-gray-600 mb-2">Expert Prodaje i Biofizike</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistika */}
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