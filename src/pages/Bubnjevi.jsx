import React from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext.jsx';

// --- Uvoz slika bubnjeva ---
import tamaStarclassicImg from '../slike/Tama_Starclassic_Performer.webp';
import pearlExportImg from '../slike/DW_Design_Series.jpg';
import rolandTD17Img from '../slike/Roland_TD-17KVX_Electronic_Drum_Kit.jpg';

import mapexArmoryImg from '../slike/DW_DWe_4-Piece_Drum_Kit_Bundle.webp';
import ModelViewer from '../components/ModelViewer.jsx';
// --- Kraj uvoza slika ---

const bubnjeviData = [
  {
    id: 'bubnjevi-1',
    name: 'Tama Starclassic Walnut/Birch',
    description: 'Profesionalni bubnjevi s bogatim i punim tonom, savršeni za studio i pozornicu.',
    price: 2500,
    img: tamaStarclassicImg,
    modelPath:"../models/drum_kit.glb", // Putanja do 3D modela bubnjeva
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

export default function Bubnjevi() {
  const { cartItems, addToCart } = useCart();

  const soundwaveButtonClasses =
    "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 inline-flex items-center justify-center";

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-20 py-20">
        <h1 className="text-4xl font-bold mb-6">Bubnjevi</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bubnjeviData.map((bubanj) => (
            <div
            onClick={ <ModelViewer modelPath={bubanj.modelPath} />}
              key={bubanj.id}
              className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer flex flex-col overflow-hidden transform hover:scale-[1.03] duration-300 ease-in-out group"
            >
              <div className="relative h-48 group-hover:h-72 rounded-t-lg overflow-hidden transition-all duration-300 ease-in-out">
                <img
                  src={bubanj.img}
                  alt={bubanj.name}
                  className="w-full h-full object-cover object-top absolute top-0 left-0 transform group-hover:scale-[1.1] transition duration-300 ease-in-out"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow relative z-10 bg-white rounded-b-lg">
                <div className="flex-grow min-h-[120px]">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{bubanj.name}</h3>
                  <p className="text-gray-600 mb-4">{bubanj.description}</p>
                </div>

                <p className="text-indigo-600 font-medium mb-4">${bubanj.price}</p>

                <button
                  onClick={() => {
    console.log('Klik na Dodaj u korpu', bubanj);
    addToCart(bubanj);
  }}
                  className={`${soundwaveButtonClasses} w-full mt-auto`} // Dodajemo u globalnu korpu, bez navigacije
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