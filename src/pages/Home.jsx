import React,{useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import Testimonials from '../components/Testimonials';

const Home = () => {
 
  const [searchQuery, setSearchQuery] = useState('');
  const { user, isAuthenticated } = useContext(AuthContext);
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
     <Navbar/>
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-0 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://readdy.ai/api/search-image?query=professional%20music%20studio%20with%20various%20instruments%20including%20guitars%2C%20piano%2C%20and%20drums%2C%20soft%20lighting%2C%20modern%20design%2C%20clean%20aesthetic%2C%20music%20production%20environment%2C%20high-quality%20audio%20equipment%2C%20wooden%20elements%2C%20acoustic%20treatment&width=1440&height=700&seq=1&orientation=landscape" 
            alt="Glazbeni studio" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-800/40"></div>
        </div>
        
        <div className="container mx-auto px-4 py-32 md:py-40 lg:py-48 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Otkrijte svijet glazbe
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Najbolji izbor glazbenih instrumenata i opreme za profesionalce i hobiste
            </p>
            {!isAuthenticated && (
            <Link to={"/registracija"}><button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-colors cursor-pointer !rounded-button whitespace-nowrap">
              Registrirajte se
            </button></Link>)}
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pretražite instrumente</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pretražite instrumente..."
                  className="w-full py-3 px-4 pr-12 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              
              {searchQuery && (
                <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="text-sm text-gray-500 mb-2">Rezultati pretrage za: <span className="font-semibold">{searchQuery}</span></div>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden mr-3">
                        <img 
                          src="https://readdy.ai/api/search-image?query=acoustic%20guitar%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20detailed%20wood%20grain%2C%20high%20resolution%2C%20studio%20lighting%2C%20isolated%20instrument&width=100&height=100&seq=2&orientation=squarish" 
                          alt="Akustična gitara" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <div className="font-medium">Akustična gitara</div>
                        <div className="text-sm text-gray-500">Klasični instrument</div>
                      </div>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden mr-3">
                        <img 
                          src="https://readdy.ai/api/search-image?query=electric%20guitar%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20detailed%20craftsmanship%2C%20high%20resolution%2C%20studio%20lighting%2C%20isolated%20instrument&width=100&height=100&seq=3&orientation=squarish" 
                          alt="Električna gitara" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <div className="font-medium">Električna gitara</div>
                        <div className="text-sm text-gray-500">Moderni zvuk</div>
                      </div>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden mr-3">
                        <img 
                          src="https://readdy.ai/api/search-image?query=piano%20keyboard%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20detailed%20keys%2C%20high%20resolution%2C%20studio%20lighting%2C%20isolated%20instrument&width=100&height=100&seq=4&orientation=squarish" 
                          alt="Klavir" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <div className="font-medium">Klavir</div>
                        <div className="text-sm text-gray-500">Elegantan i svestran</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popularne kategorije</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=various%20acoustic%20and%20electric%20guitars%20displayed%20in%20a%20music%20store%2C%20warm%20lighting%2C%20wooden%20background%2C%20professional%20arrangement%2C%20high-quality%20instruments%2C%20elegant%20display&width=400&height=300&seq=5&orientation=landscape" 
                  alt="Gitare" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Gitare</h3>
                <p className="text-gray-600 mb-4">Akustične, električne i bas gitare za svaki stil</p>
                <Link to="/gitare">
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                  Pregledaj <i className="fas fa-arrow-right ml-1"></i>
                  </button>
            </Link>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=various%20keyboards%20and%20pianos%20in%20a%20music%20store%2C%20warm%20lighting%2C%20wooden%20background%2C%20professional%20arrangement%2C%20high-quality%20instruments%2C%20elegant%20display&width=400&height=300&seq=6&orientation=landscape" 
                  alt="Klavijature" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Klavijature</h3>
                <p className="text-gray-600 mb-4">Klaviri, sintisajzeri i digitalni klaviri</p>
                <Link to="/klavijature">
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                    Pregledaj <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Category 3 */}
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=various%20drum%20sets%20and%20percussion%20instruments%20in%20a%20music%20store%2C%20warm%20lighting%2C%20wooden%20background%2C%20professional%20arrangement%2C%20high-quality%20instruments%2C%20elegant%20display&width=400&height=300&seq=7&orientation=landscape" 
                  alt="Bubnjevi" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bubnjevi i perkusije</h3>
                <p className="text-gray-600 mb-4">Akustični i elektronički setovi, udaraljke</p>
                <Link to="/bubnjevi">
                    <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                       Pregledaj <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                </Link>
              </div>
            </div>
            
            {/* Category 4 */}
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=various%20audio%20equipment%2C%20mixers%2C%20speakers%20and%20studio%20gear%20in%20a%20music%20store%2C%20warm%20lighting%2C%20wooden%20background%2C%20professional%20arrangement%2C%20high-quality%20equipment%2C%20elegant%20display&width=400&height=300&seq=8&orientation=landscape" 
                  alt="Audio oprema" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Audio oprema</h3>
                <p className="text-gray-600 mb-4">Miksete, zvučnici, mikrofoni i studijska oprema</p>
                <Link to="/audio-oprema">
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                     Pregledaj <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>
      
      {/* Login/Register Modal */}
      
      
      {/* Contact Section */}
            <section className="py-13 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recenzije</h2>
          <div className="flex justify-start">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">SoundWave</h3>
              <p className="text-gray-400 mb-4">Najbolji izbor glazbenih instrumenata i opreme za profesionalce i hobiste.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Brzi linkovi</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Početna</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">O nama</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Prijava</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Kategorije</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gitare</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Klavijature</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bubnjevi i perkusije</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Audio oprema</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dodatna oprema</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Pretplatite se na naš newsletter za najnovije vijesti i ponude.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Vaša email adresa" 
                  className="flex-grow px-4 py-2 rounded-l-lg border-none bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                <button 
                  type="submit" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2025 SoundWave. Sva prava pridržana.
              </p>
              {/*solution*/ }
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Pravila privatnosti</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Uvjeti korištenja</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Kolačići</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Home