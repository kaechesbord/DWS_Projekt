import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext.jsx';

// --- Uvoz slika za gitare ---
import fenderImg from '../slike/fender.jpg';
import gibsonImg from '../slike/gibson.jpg';
import ibanezImg from '../slike/ibanez.webp';
import yamahaImg from '../slike/yamaha.webp';
import ModelViewer from '../components/ModelViewer.jsx';

// --- Podaci o gitarama ---
const guitarsData = [
  {
    id: 'gitare-1',
    name: 'Fender Stratocaster',
    description: 'Klasična električna gitara poznata po zvuku i stilu',
    price: 1200,
    img: fenderImg,
  },
  {
    id: 'gitare-2',
    name: 'Gibson Les Paul',
    description: 'Topla i moćna gitara za rock i blues',
    price: 1500,
    img: gibsonImg,
  },
  {
    id: 'gitare-3',
    name: 'Ibanez RG',
    description: 'Brza gitara za metal i shred tehniku',
    price: 900,
    img: ibanezImg,
    modelPath: "/models/ibanez_jem_guitar.glb", //3D model
  },
  {
    id: 'gitare-4',
    name: 'Yamaha Pacifica',
    description: 'Pristupačna gitara za početnike i amatere',
    price: 700,
    img: yamahaImg,
  },
];

// Stranica za prikaz gitara
export default function Gitare() {
  const { addToCart } = useCart();
const [showModel, setShowModel] = useState(null);
  // Klase za SoundWave dugme
  const buttonClasses =
    "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 inline-flex items-center justify-center";

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-20 py-20">
        <h1 className="text-4xl font-bold mb-6">Gitare</h1>

        {/* Prikaz svih gitara */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {guitarsData.map((guitar) => (
            <div
              key={guitar.id}
               onClick={() => {
                if (guitar.modelPath) setShowModel(guitar.modelPath);
              }}
              className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer flex flex-col overflow-hidden transform hover:scale-[1.03] duration-300 ease-in-out group"
            >
              {/* Slika gitare */}
              <div className="relative h-48 group-hover:h-72 overflow-hidden transition-all duration-300 ease-in-out">
                <img
                  src={guitar.img}
                  alt={guitar.name}
                  className="w-full h-full object-cover object-top absolute top-0 left-0
                  transform group-hover:scale-[1.1] transition duration-300 ease-in-out"
                />
              </div>
              {/* Detalji gitare */}
              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="flex-grow min-h-[90px]">
                  <h3 className="text-xl font-semibold mb-2">{guitar.name}</h3>
                  <p className="text-gray-600 mb-4">{guitar.description}</p>
                </div>
                <p className="text-indigo-600 font-medium mb-4">${guitar.price}</p>
                <button
                  onClick={() => addToCart(guitar)}
                  className={`${buttonClasses} w-full mt-auto`}
                >
                  Dodaj u korpu
                </button>
              </div>
            </div>
          ))}
        </div>
          {showModel && (
                  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 max-w-2xl w-full">
                      <ModelViewer modelPath={showModel} />
                      <button
                        onClick={() => setShowModel(null)}
                        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
                      >
                        Zatvori
                      </button>
                    </div>
                  </div>
                )}
      </div>
    </>
  );
}