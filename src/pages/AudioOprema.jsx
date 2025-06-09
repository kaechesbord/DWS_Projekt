import React from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

// --- Uvoz slika za proizvode ---
import shureSm58Img from '../slike/shure_sm58.jpg';
import focusriteScarlett2i2Img from '../slike/focusrite_scarlett_2i2.webp';
import krkRokit5G4Img from '../slike/krk_rokit_5_g4.jpg';
import sennheiserHD280ProImg from '../slike/sennheiser_hd280_pro.jpg';

// --- Podaci o audio opremi ---
const audioGearData = [
  {
    id: 'audio-1',
    name: 'Shure SM58',
    description: 'Dinamički mikrofon idealan za vokale i live nastupe',
    price: 120,
    img: shureSm58Img,
  },
  {
    id: 'audio-2',
    name: 'Focusrite Scarlett 2i2',
    description: 'USB audio interfejs za kućne studije i snimanje',
    price: 180,
    img: focusriteScarlett2i2Img,
  },
  {
    id: 'audio-3',
    name: 'KRK Rokit 5 G4',
    description: 'Studijski monitori sa preciznim zvukom i snažnim basom',
    price: 320,
    img: krkRokit5G4Img,
  },
  {
    id: 'audio-4',
    name: 'Sennheiser HD 280 Pro',
    description: 'Profesionalne studijske slušalice za monitoring',
    price: 100,
    img: sennheiserHD280ProImg,
  },
];

// Stranica za prikaz audio opreme
export default function AudioOprema() {
  const { addToCart } = useCart(); // Funkcija za dodavanje u korpu

  // Klase za SoundWave dugme
  const soundwaveButtonClasses =
    "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 inline-flex items-center justify-center";

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-20 py-20">
        <h1 className="text-4xl font-bold mb-6">Audio oprema</h1>

        {/* Prikaz svih proizvoda */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {audioGearData.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer flex flex-col overflow-hidden transform hover:scale-[1.03] duration-300 ease-in-out group"
            >
              {/* Slika proizvoda */}
              <div className="relative h-48 group-hover:h-72 rounded-t-lg overflow-hidden transition-all duration-300 ease-in-out">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-top absolute top-0 left-0
                    transform group-hover:scale-[1.1] transition duration-300 ease-in-out"
                />
              </div>
              {/* Detalji proizvoda */}
              <div className="p-6 flex flex-col flex-grow relative z-10 bg-white rounded-b-lg">
                <div className="flex-grow min-h-[90px]">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
                <p className="text-indigo-600 font-medium mb-4">${item.price}</p>
                <button
                  onClick={() => addToCart(item)}
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