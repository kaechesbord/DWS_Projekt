import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext.jsx';

// --- Uvoz slika bubnjeva ---
import tamaStarclassicImg from '../slike/Tama_Starclassic_Performer.webp';
import pearlExportImg from '../slike/DW_Design_Series.jpg';
import rolandTD17Img from '../slike/Roland_TD-17KVX_Electronic_Drum_Kit.jpg';
import mapexArmoryImg from '../slike/DW_DWe_4-Piece_Drum_Kit_Bundle.webp';
import ModelViewer from '../components/ModelViewer.jsx';

// --- Podaci o bubnjevima ---
const bubnjeviData = [
  {
    id: 'bubnjevi-1',
    name: 'Tama Starclassic Walnut/Birch',
    description: 'Profesionalni bubnjevi s bogatim i punim tonom, savršeni za studio i pozornicu.',
    price: 2500,
    img: tamaStarclassicImg,
    modelPath: "/models/drum_kit.glb",
  },
  {
    id: 'bubnjevi-2',
    name: 'Pearl Export Series',
    description: 'Najprodavaniji set bubnjeva na svijetu, idealan za početnike i napredne svirače.',
    price: 800,
    img: pearlExportImg,
  },
  {
    id: 'bubnjevi-3',
    name: 'Roland TD-17KVX Electronic Drum Kit',
    description: 'Napredni elektronski bubnjevi s realističnim zvukovima i osjećajem akustičnih bubnjeva.',
    price: 1800,
    img: rolandTD17Img,
  },
  {
    id: 'bubnjevi-4',
    name: 'Mapex Armory Series',
    description: 'Svestrani bubnjevi s hibridnim ljuskama, nudeći izvrsnu projekciju i rezonancu.',
    price: 1100,
    img: mapexArmoryImg,
  },
];

// Stranica za prikaz bubnjeva
export default function Bubnjevi() {
  const { cartItems, addToCart } = useCart();
  const [showModel, setShowModel] = useState(null);

  // Klase za SoundWave dugme
  const soundwaveButtonClasses =
    "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 inline-flex items-center justify-center";

  // Ukupna cijena u korpi (nije prikazana, ali možeš koristiti po potrebi)
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-20 py-20">
        <h1 className="text-4xl font-bold mb-6">Bubnjevi</h1>

        {/* Prikaz svih bubnjeva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bubnjeviData.map((bubanj) => (
            <div
              key={bubanj.id}
              className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer flex flex-col overflow-hidden transform hover:scale-[1.03] duration-300 ease-in-out group"
              onClick={() => {
                if (bubanj.modelPath) setShowModel(bubanj.modelPath);
              }}
            >
              {/* Slika bubnja */}
              <div className="relative h-48 group-hover:h-72 rounded-t-lg overflow-hidden transition-all duration-300 ease-in-out">
                <img
                  src={bubanj.img}
                  alt={bubanj.name}
                  className="w-full h-full object-cover object-top absolute top-0 left-0 transform group-hover:scale-[1.1] transition duration-300 ease-in-out"
                />
              </div>
              {/* Detalji bubnja */}
              <div className="p-6 flex flex-col flex-grow relative z-10 bg-white rounded-b-lg">
                <div className="flex-grow min-h-[120px]">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{bubanj.name}</h3>
                  <p className="text-gray-600 mb-4">{bubanj.description}</p>
                </div>
                <p className="text-indigo-600 font-medium mb-4">${bubanj.price}</p>
                <button
                  onClick={e => {
                    e.stopPropagation(); // da ne otvara model na klik na dugme
                    addToCart(bubanj);
                  }}
                  className={`${soundwaveButtonClasses} w-full mt-auto`}
                >
                  Dodaj u korpu
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal za prikaz 3D modela */}
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