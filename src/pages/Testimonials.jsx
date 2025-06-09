import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Testimonials = () => {
  const { isAuthenticated } = useContext(AuthContext);

  // Fiksne recenzije koje se uvijek prikazuju
  const reviews = [
    {
      id: 1,
      name: 'Marko K.',
      text: 'Odlična ponuda instrumenata i brza dostava. Preporučujem svima!',
    },
    {
      id: 2,
      name: 'Ivana M.',
      text: 'Izvrsna korisnička podrška i kvalitetni proizvodi. Super iskustvo!',
    },
    {
      id: 3,
      name: 'Petar S.',
      text: 'Kupio sam gitaru i oduševljen sam zvukom i izradom. Svaka preporuka!',
    },
  ];

  const [showForm, setShowForm] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleStarClick = (star) => setRating(star);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Pošalji recenziju na backend (json-server)
    await fetch("http://localhost:5000/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Anonimni korisnik", // ili zamijeni s imenom ako imaš
        text: reviewText,
        rating,
        date: new Date().toISOString()
      }),
    });
    setShowForm(false);
    setReviewText('');
    setRating(0);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="bg-white py-12 px-4 max-w-4xl mx-auto rounded-lg shadow-md mt-12">
      <h2 className="text-2xl font-semibold text-left mb-8 text-indigo-600">Šta kažu naši korisnici</h2>
      <div className="space-y-8">
        {reviews.map(({ id, name, text }) => (
          <blockquote key={id} className="border-l-4 border-indigo-600 pl-6 italic text-gray-700">
            <p className="mb-2">&ldquo;{text}&rdquo;</p>
            <footer className="text-sm font-semibold text-indigo-800">— {name}</footer>
          </blockquote>
        ))}
      </div>
      {isAuthenticated && (
        <div className="flex flex-col items-start mt-11">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow transition-colors mb-4"
            onClick={() => setShowForm((prev) => !prev)}
          >
            Dodaj svoju recenziju
          </button>
          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-3"
            >
              <label className="font-medium">Vaša recenzija:</label>
              <textarea
                className="border rounded p-2"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
              <label className="font-medium">Ocjena:</label>
              <div className="flex gap-1 text-2xl mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    onClick={() => handleStarClick(star)}
                  >
                    {star <= rating ? '★' : '☆'}
                  </span>
                ))}
              </div>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded"
              >
                Pošalji
              </button>
            </form>
          )}
          {success && (
            <div className="text-green-600 mt-2">Recenzija je uspješno poslana!</div>
          )}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
