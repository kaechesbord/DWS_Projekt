import React from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

// --- Uvoz slika za klavijature ---
import yamahaP145Img from '../slike/Yamaha_P145_Digital_Piano_Black.jpg';
import rolandGoKeys3Img from '../slike/Roland_GO-KEYS_3_Music_Creation_Keyboard.webp';
import rolandFP30XImg from '../slike/Roland_FP-30X_Digital_Piano.webp';
import kawaiES920Img from '../slike/Kawai_ES920_88-Key_Digital_Piano.webp';

// --- Podaci o klavijaturama ---
const klavijatureData = [
  {
    id: 'klavir-1',
    name: 'Yamaha P145 Digital Piano, Black',
    description: 'Elegantan i lagan digitalni klavir, idealan za učenje i vježbanje kod kuće.',
    price: 1200,
    img: yamahaP145Img,
  },
  {
    id: 'klavir-2',
    name: 'Roland GO-KEYS 3 Music Creation Keyboard',
    description: 'Zabavna i jednostavna klavijatura za kreiranje glazbe s intuitivnim sučeljem.',
    price: 1500,
    img: rolandGoKeys3Img,
  },
  {
    id: 'klavir-3',
    name: 'Roland FP-30X Digital Piano',
    description: 'Kompaktan i pristupačan digitalni klavir s bogatim Roland zvukom.',
    price: 900,
    img: rolandFP30XImg,
  },
  {
    id: 'klavir-4',
    name: 'Kawai ES920 88-Key Digital Piano',
    description: 'Izvrsni prijenosni digitalni klavir s realističnim zvukom i osjećajem.',
    price: 700,
    img: kawaiES920Img,
  },
];

// Stranica za prikaz klavijatura
export default function Klavijature() {
  const { addToCart } = useCart();

  // Klase za SoundWave dugme
  const soundwaveButtonClasses =
    "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 inline-flex items-center justify-center";

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-20 py-20">
        <h1 className="text-4xl font-bold mb-6">Klavijature</h1>

        {/* Prikaz svih klavijatura */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {klavijatureData.map((keyboard) => (
            <div
              key={keyboard.id}
              className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer flex flex-col overflow-hidden transform hover:scale-[1.03] duration-300 ease-in-out group"
            >
              {/* Slika klavijature */}
              <div className="relative h-48 group-hover:h-72 rounded-t-lg overflow-hidden transition-all duration-300 ease-in-out">
                <img
                  src={keyboard.img}
                  alt={keyboard.name}
                  className="w-full h-full object-cover object-top absolute top-0 left-0
                    transform group-hover:scale-[1.1] transition duration-300 ease-in-out"
                />
              </div>
              {/* Detalji klavijature */}
              <div className="p-6 flex flex-col flex-grow relative z-10 bg-white rounded-b-lg">
                <div className="flex-grow min-h-[90px]">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{keyboard.name}</h3>
                  <p className="text-gray-600 mb-4">{keyboard.description}</p>
                </div>
                <p className="text-indigo-600 font-medium mb-4">${keyboard.price}</p>
                <button
                  onClick={() => addToCart(keyboard)}
                  className={`${soundwaveButtonClasses} w-full mt-auto`}
                >
                  Dodaj u korpu
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}