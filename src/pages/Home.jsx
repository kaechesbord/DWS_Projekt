import React,{useState} from 'react'

const Home = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
const [userRole, setUserRole] = useState('Guest');

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-indigo-600">
              MuzikaCRO
            </a>
          </div>
          
          <div className="hidden md:flex items-center mr-4">
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              {userRole === 'Admin' ? 'Administrator' : 'Gost'}
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="font-medium hover:text-indigo-600 transition-colors">Početna</a>
            <a href="#" className="font-medium hover:text-indigo-600 transition-colors">O nama</a>
            <a href="#" className="font-medium hover:text-indigo-600 transition-colors">Prijava</a>
            <a href="#" className="font-medium hover:text-indigo-600 transition-colors">Kontakt</a>
          </div>
          
          <button 
            className="md:hidden text-gray-500 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
            onClick={toggleMenu}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
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
</div>
)
}


export default Home