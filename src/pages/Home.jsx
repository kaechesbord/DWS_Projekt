import React,{useState} from 'react'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userRole, setUserRole] = useState<'Admin' | 'Guest'>('Guest');
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-indigo-600">
              MuzikaCRO
            </a>
          </div>
          
          {/* User role indicator */}
          <div className="hidden md:flex items-center mr-4">
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              {userRole === 'Admin' ? 'Administrator' : 'Gost'}
            </span>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="font-medium hover:text-indigo-600 transition-colors">Početna</a>
            <a href="#" className="font-medium hover:text-indigo-600 transition-colors">O nama</a>
            <a href="#" className="font-medium hover:text-indigo-600 transition-colors">Prijava</a>
            <a href="#" className="font-medium hover:text-indigo-600 transition-colors">Kontakt</a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
            onClick={toggleMenu}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              <a href="#" className="font-medium hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">Početna</a>
              <a href="#" className="font-medium hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">O nama</a>
              <a href="#" className="font-medium hover:text-indigo-600 transition-colors py-2 border-b border-gray-100">Prijava</a>
              <a href="#" className="font-medium hover:text-indigo-600 transition-colors py-2">Kontakt</a>
              <div className="flex items-center py-2">
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {userRole === 'Admin' ? 'Administrator' : 'Gost'}
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
      
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
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-colors cursor-pointer !rounded-button whitespace-nowrap">
              Registrirajte se
            </button>
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
                <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                  Pregledaj <i className="fas fa-arrow-right ml-1"></i>
                </button>
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
                <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                  Pregledaj <i className="fas fa-arrow-right ml-1"></i>
                </button>
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
                <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                  Pregledaj <i className="fas fa-arrow-right ml-1"></i>
                </button>
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
                <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                  Pregledaj <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Login/Register Modal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-indigo-600 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Dobrodošli natrag!</h2>
                <p className="mb-8">Prijavite se na svoj račun kako biste pristupili svim našim uslugama i ekskluzivnim ponudama.</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-indigo-300 mr-3"></i>
                    <span>Pristup 3D pregledima instrumenata</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-indigo-300 mr-3"></i>
                    <span>Personalizirane preporuke</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-indigo-300 mr-3"></i>
                    <span>Spremanje omiljenih instrumenata</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Prijava</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email ili korisničko ime</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      placeholder="Unesite email ili korisničko ime"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lozinka</label>
                    <input 
                      type="password" 
                      className="w-full px-4 py-3 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      placeholder="Unesite lozinku"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        id="remember-me" 
                        type="checkbox" 
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Zapamti me
                      </label>
                    </div>
                    
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                      Zaboravili ste lozinku?
                    </a>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Prijavi se
                  </button>
                  
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                      Nemate račun? 
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-800 ml-1">
                        Registrirajte se
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kontaktirajte nas</h2>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <form className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ime i prezime</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      placeholder="Unesite ime i prezime"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      placeholder="Unesite email adresu"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Predmet</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Unesite predmet poruke"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Poruka</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none h-32"
                    placeholder="Unesite vašu poruku"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Pošalji poruku
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/2">
              <div className="h-64 md:h-80 lg:h-full rounded-xl overflow-hidden shadow-lg mb-8">
                {/* Google Maps iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89894.14789906631!2d15.8861499!3d45.8150108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902cc39%3A0x3a45249628fbc28a!2sZagreb!5e0!3m2!1sen!2shr!4v1621523456789!5m2!1sen!2shr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
              
              <div className="bg-gray-50 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Kontakt informacije</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">Adresa</p>
                      <p className="text-sm text-gray-600">Ilica 256, 10000 Zagreb, Hrvatska</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">Telefon</p>
                      <p className="text-sm text-gray-600">+385 1 234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">info@muzikacro.hr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">Radno vrijeme</p>
                      <p className="text-sm text-gray-600">Pon - Pet: 9:00 - 20:00</p>
                      <p className="text-sm text-gray-600">Sub: 9:00 - 15:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">MuzikaCRO</h3>
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
                &copy; 2025 MuzikaCRO. Sva prava pridržana.
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