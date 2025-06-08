import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Ako imate Navbar i u ovoj komponenti

// --- Uvoz slika za bubnjeve iz lokalnog foldera ---
// OBAVEZNO: PRILAGODITE OVE PUTANJE I NAZIVE DATOTEKA PREMA VAŠOJ STVARNOJ STRUKTURI!
// Preporučena putanja: src/slike/bubnjevi/
// Primjer: ako se Bubnjevi.jsx nalazi u src/pages/, onda je putanja do slika:
// '../slike/bubnjevi/ime_slike.jpg'
//
// Koristite nazive datoteka koje zapravo imate u svom 'src/slike/bubnjevi/' folderu.
// Ja ću ovdje koristiti neke generičke nazive kao primjere.
import tamaStarclassicImg from '../slike/Tama_Starclassic_Performer.webp';
import pearlExportImg from '../slike/DW_Design_Series.jpg';
import rolandTD17Img from '../slike/Roland_GO-KEYS_3_Music_Creation_Keyboard.webp';
import mapexArmoryImg from '../slike/DW_DWe_4-Piece_Drum_Kit_Bundle.webp';
// --- Kraj uvoza slika ---


const bubnjeviData = [
  {
    id: 1,
    name: 'Tama Starclassic Walnut/Birch',
    description: 'Profesionalni bubnjevi s bogatim i punim tonom, savršeni za studio i pozornicu.',
    price: 2500,
    img: tamaStarclassicImg,
  },
  {
    id: 2,
    name: 'Pearl Export Series',
    description: 'Najprodavaniji set bubnjeva na svijetu, idealan za početnike i napredne svirače.',
    price: 800,
    img: pearlExportImg,
  },
  {
    id: 3,
    name: 'Roland TD-17KVX Electronic Drum Kit',
    description: 'Napredni elektronski bubnjevi s realističnim zvukovima i osjećajem akustičnih bubnjeva.',
    price: 1800,
    img: rolandTD17Img,
  },
  {
    id: 4,
    name: 'Mapex Armory Series',
    description: 'Svestrani bubnjevi s hibridnim ljuskama, nudeći izvrsnu projekciju i rezonancu.',
    price: 1100,
    img: mapexArmoryImg,
  },
];

export default function Bubnjevi() { // Naziv komponente je Bubnjevi
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart(prev => [...prev, item]);
  }

  const soundwaveButtonClasses = "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 inline-flex items-center justify-center";

  return (
    <>
      <Navbar /> {/* Opcionalno, ako želite navigaciju i ovdje */}
      <div className="container mx-auto px-20 py-20">
        <h1 className="text-4xl font-bold mb-6">Bubnjevi</h1> {/* Naslov */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bubnjeviData.map(bubanj => ( // mapiramo bubnjeviData
            <div
              key={bubanj.id}
              className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer flex flex-col overflow-hidden transform hover:scale-[1.03] duration-300 ease-in-out group"
            >
              <div className="relative h-48 group-hover:h-72 rounded-t-lg overflow-hidden transition-all duration-300 ease-in-out">
                <img
                  src={bubanj.img} // Koristimo img iz bubnjeviData
                  alt={bubanj.name}
                  className="w-full h-full object-cover object-top absolute top-0 left-0
                             transform group-hover:scale-[1.1] transition duration-300 ease-in-out"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow relative z-10 bg-white rounded-b-lg">
                <div className="flex-grow min-h-[120px]"> {/* Prilagodite min-h po potrebi za opis */}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{bubanj.name}</h3>
                  <p className="text-gray-600 mb-4">{bubanj.description}</p>
                </div>

                <p className="text-indigo-600 font-medium mb-4">${bubanj.price}</p>
                
                <button
                  onClick={() => addToCart(bubanj)} // Dodajemo bubanj u korpu
                  className={`${soundwaveButtonClasses} w-full mt-auto`}
                >
                  Dodaj u korpu
                </button>
              </div>
            </div>
          ))}
        </div>

        ---

        {/* Korpa - fiksirana na dnu desno (ako želite zajedničku korpu, ovo treba biti u roditeljskoj komponenti) */}
        <div className="fixed bottom-4 right-4 bg-white border p-4 rounded shadow-lg w-72 max-h-64 overflow-y-auto">
          <h3 className="font-bold text-lg mb-2">Korpa ({cart.length})</h3>
          {cart.length === 0 && <p>Korpa je prazna.</p>}
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between mb-1">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
          {cart.length > 0 && (
            <div className="mt-4 font-semibold">
              Ukupno: ${cart.reduce((sum, item) => sum + item.price, 0)}
            </div>
          )}
        </div>
      </div>
    </>
  );
}