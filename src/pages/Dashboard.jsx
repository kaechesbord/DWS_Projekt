// Dashboard stranica za upravljanje instrumentima i kategorijama
// Koristi Tailwind CSS za stilizaciju
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
//--------------------------------------


// --- Fiksne kategorije instrumenata ---
const categories = [
    {
      id: 'gitare',
      name: 'Gitare',
      count: 42,
      stock: 'Dobro',
      icon: 'fa-guitar',
      image: 'https://readdy.ai/api/search-image?query=Professional%20electric%20and%20acoustic%20guitars%20arranged%20on%20a%20modern%20display%20with%20soft%20lighting%2C%20clean%20white%20background%2C%20high-quality%20musical%20instruments%20with%20detailed%20wood%20grain%20texture%20and%20polished%20hardware%2C%20professional%20studio%20photography&width=400&height=300&seq=1&orientation=landscape'
    },
    {
      id: 'klaviri',
      name: 'Klaviri i klavijature',
      count: 35,
      stock: 'Srednje',
      icon: 'fa-piano-keyboard',
      image: 'https://readdy.ai/api/search-image?query=Professional%20piano%20and%20keyboard%20instruments%20displayed%20on%20elegant%20stand%2C%20soft%20lighting%20on%20clean%20white%20background%2C%20high-quality%20musical%20instruments%20with%20detailed%20textures%20and%20polished%20surfaces%2C%20professional%20studio%20photography&width=400&height=300&seq=2&orientation=landscape'
    },
    {
      id: 'bubnjevi',
      name: 'Bubnjevi i udaraljke',
      count: 28,
      stock: 'Dobro',
      icon: 'fa-drum',
      image: 'https://readdy.ai/api/search-image?query=Professional%20drum%20set%20and%20percussion%20instruments%20arranged%20on%20modern%20display%2C%20soft%20lighting%20on%20clean%20white%20background%2C%20high-quality%20musical%20instruments%20with%20detailed%20textures%20and%20polished%20hardware%2C%20professional%20studio%20photography&width=400&height=300&seq=3&orientation=landscape'
    },
    {
      id: 'puhacki',
      name: 'Puhački instrumenti',
      count: 31,
      stock: 'Nisko',
      icon: 'fa-trumpet',
      image: 'https://readdy.ai/api/search-image?query=Professional%20wind%20instruments%20including%20saxophones%2C%20trumpets%20and%20flutes%20arranged%20on%20modern%20display%2C%20soft%20lighting%20on%20clean%20white%20background%2C%20high-quality%20brass%20and%20woodwind%20instruments%20with%20detailed%20textures%2C%20professional%20studio%20photography&width=400&height=300&seq=4&orientation=landscape'
    },
    {
      id: 'gudacki',
      name: 'Gudački instrumenti',
      count: 24,
      stock: 'Srednje',
      icon: 'fa-violin',
      image: 'https://readdy.ai/api/search-image?query=Professional%20string%20instruments%20including%20violins%2C%20cellos%20and%20violas%20arranged%20on%20elegant%20display%2C%20soft%20lighting%20on%20clean%20white%20background%2C%20high-quality%20wooden%20instruments%20with%20detailed%20grain%20textures%20and%20polished%20surfaces%2C%20professional%20studio%20photography&width=400&height=300&seq=5&orientation=landscape'
    },
    {
      id: 'studio',
      name: 'Studio oprema',
      count: 53,
      stock: 'Dobro',
      icon: 'fa-microphone',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20equipment%20including%20microphones%2C%20audio%20interfaces%20and%20headphones%20arranged%20on%20modern%20display%2C%20soft%20lighting%20on%20clean%20white%20background%2C%20high-quality%20recording%20equipment%20with%20detailed%20textures%20and%20modern%20design%2C%20professional%20studio%20photography&width=400&height=300&seq=6&orientation=landscape'
    },
    {
      id: 'pojacala',
      name: 'Pojačala i zvučnici',
      count: 38,
      stock: 'Dobro',
      icon: 'fa-volume-up',
      image: 'https://readdy.ai/api/search-image?query=Professional%20amplifiers%20and%20speakers%20for%20musical%20instruments%20arranged%20on%20modern%20display%2C%20soft%20lighting%20on%20clean%20white%20background%2C%20high-quality%20audio%20equipment%20with%20detailed%20textures%20and%20modern%20design%2C%20professional%20studio%20photography&width=400&height=300&seq=7&orientation=landscape'
    },
    {
      id: 'tradicionalni',
      name: 'Tradicionalni instrumenti',
      count: 19,
      stock: 'Nisko',
      icon: 'fa-mandolin',
      image: 'https://readdy.ai/api/search-image?query=Professional%20traditional%20Croatian%20folk%20instruments%20including%20tamburica%20and%20other%20ethnic%20instruments%20arranged%20on%20elegant%20display%2C%20soft%20lighting%20on%20clean%20white%20background%2C%20high-quality%20handcrafted%20instruments%20with%20detailed%20wood%20textures%2C%20professional%20studio%20photography&width=400&height=300&seq=8&orientation=landscape'
    },
    {
      id: 'dodaci',
      name: 'Glazbeni dodaci',
      count: 67,
      stock: 'Dobro',
      icon: 'fa-guitar-pick',
      image: 'https://readdy.ai/api/search-image?query=Professional%20music%20accessories%20including%20guitar%20picks%2C%20strings%2C%20capos%20and%20other%20small%20musical%20tools%20arranged%20on%20modern%20display%2C%20soft%20lighting%20on%20clean%20white%20background%2C%20high-quality%20accessories%20with%20detailed%20textures%2C%20professional%20studio%20photography&width=400&height=300&seq=9&orientation=landscape'
    }
  ];

  //-------------------------

  // --- Glavna komponenta Dashboard ---
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('nadzorna-ploca');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [instruments, setInstruments] = useState([]);
  const [instrumentForm, setInstrumentForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    code: "",
    description: ""
  });


  // Učitavanje instrumenata s backend servera
  useEffect(() => {
    fetch("http://localhost:5000/instruments")
      .then(res => res.json())
      .then(data => setInstruments(data));
  }, []);
  
  //------------------------


  // Statistički podaci
  const stats = [
    { id: 'total', name: 'Ukupno proizvoda', value: instruments.length, icon: 'fa-box' },
    { id: 'sale', name: 'Na akciji', value: 42, icon: 'fa-tag' },
    { id: 'low', name: 'Niska zaliha', value: 18, icon: 'fa-exclamation-circle' },
    { id: 'best', name: 'Najprodavaniji', value: 24, icon: 'fa-crown' }
  ];

  // --- Dodavanje novog instrumenta ---
const handleInstrumentSubmit = async (e) => {
  e.preventDefault();
  await fetch("http://localhost:5000/instruments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(instrumentForm)
  });

  //------------------------------ 
  // Osvježi instrumente
  const res = await fetch("http://localhost:5000/instruments");
  const data = await res.json();
  setInstruments(data);
  closeModal();
};

  //-----------------------------
  // --- Echarts grafikon prodaje i zaliha ---
  useEffect(() => {
    const chartDom = document.getElementById('sales-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['Prodaja', 'Zaliha'] },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: [{ type: 'category', data: categories.map(c => c.name) }],
        yAxis: [{ type: 'value' }],
        series: [
          { name: 'Prodaja', type: 'bar', data: [15, 12, 8, 10, 7, 18, 14, 5, 22], color: '#4F46E5' },
          { name: 'Zaliha', type: 'bar', data: [42, 35, 28, 31, 24, 53, 38, 19, 67], color: '#10B981' }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize', () => myChart.resize());
      return () => {
        window.removeEventListener('resize', () => myChart.resize());
        myChart.dispose();
      };
    }
  }, [categories]);

  // Funkcija za otvaranje modala za uređivanje kategorije
  const handleEditCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowEditModal(true);
  };

  // Funkcija za filtriranje kategorija prema upitu za pretraživanje
  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Modal logika
  const closeModal = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setSelectedCategory(null);
    setInstrumentForm({
      name: "",
      category: "",
      price: "",
      stock: "",
      code: "",
      description: ""
    });
  };

  // Komponenta za modal dodavanja novog instrumenta
  const AddInstrumentModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Dodaj novi instrument</h2>
          <button 
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <form className="space-y-6" onSubmit={handleInstrumentSubmit}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Naziv instrumenta</label>
      <input 
        type="text"
        name="name"
        value={instrumentForm.name}
        onChange={e => setInstrumentForm({ ...instrumentForm, name: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Unesite naziv instrumenta"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Kategorija</label>
      <div className="relative">
        <select
          name="category"
          value={instrumentForm.category}
          onChange={e => setInstrumentForm({ ...instrumentForm, category: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
          required
        >
          <option value="">Odaberi kategoriju</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <i className="fas fa-chevron-down text-gray-400"></i>
        </div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Cijena (HRK)</label>
      <input 
        type="text"
        name="price"
        value={instrumentForm.price}
        onChange={e => setInstrumentForm({ ...instrumentForm, price: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="0.00"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Količina na zalihi</label>
      <input 
        type="number"
        name="stock"
        value={instrumentForm.stock}
        onChange={e => setInstrumentForm({ ...instrumentForm, stock: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="0"
        min="0"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Šifra proizvoda</label>
      <input 
        type="text"
        name="code"
        value={instrumentForm.code}
        onChange={e => setInstrumentForm({ ...instrumentForm, code: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="MZK-0000"
        required
      />
    </div>
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Opis</label>
    <textarea 
      rows={4}
      name="description"
      value={instrumentForm.description}
      onChange={e => setInstrumentForm({ ...instrumentForm, description: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Unesite opis instrumenta..."
      required
    ></textarea>
  </div>
  <div className="flex justify-end space-x-3">
    <button 
      type="button" 
      onClick={closeModal}
      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
    >
      Odustani
    </button>
    <button 
      type="submit"
      className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
    >
      Spremi instrument
    </button>
  </div>
</form>
      </div>
    </div>
  );

  // Komponenta za modal uređivanja kategorije
  const EditCategoryModal = () => {
    const category = categories.find(c => c.id === selectedCategory);
    
    if (!category) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Uredi kategoriju: {category.name}</h2>
            <button 
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center">
                <i className={`fas ${category.icon} text-indigo-600 text-2xl`}></i>
              </div>
              <div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} proizvoda u kategoriji</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Naziv kategorije</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue={category.name}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Minimalna zaliha</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="5"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status kategorije</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 appearance-none">
                    <option value="active">Aktivna</option>
                    <option value="hidden">Skrivena</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Popust na kategoriju (%)</label>
              <input 
                type="number" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="0"
                min="0"
                max="100"
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                type="button" 
                onClick={closeModal}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Odustani
              </button>
              <button 
                type="button" 
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Spremi promjene
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Glavni sadržaj */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


        {/* Naslov i traka za pretraživanje */}
        <div className="md:flex md:items-center md:justify-between mb-6">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Upravljanje instrumentima
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <div className="relative rounded-md shadow-sm max-w-xs w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
                placeholder="Pretraži instrumente"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-plus mr-2"></i>
              Dodaj novi instrument
            </button>
          </div>
        </div>


        {/* Statistički widgeti */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`h-12 w-12 rounded-md bg-indigo-100 flex items-center justify-center`}>
                      <i className={`fas ${stat.icon} text-indigo-600 text-xl`}></i>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {stat.value}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Grafikon prodaje */}
        <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
          <div className="p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Pregled prodaje i zaliha po kategorijama
            </h3>
            <div id="sales-chart" className="h-80 w-full"></div>
          </div>
        </div>


        {/* Kategorije instrumenata */}
        <div className="mb-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Kategorije instrumenata
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                        <i className={`fas ${category.icon} text-indigo-600`}></i>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">{category.name}</h4>
                        <p className="text-sm text-gray-500">{category.count} proizvoda</p>
                      </div>
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        category.stock === 'Dobro' 
                          ? 'bg-green-100 text-green-800' 
                          : category.stock === 'Srednje' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {category.stock}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() => {}}
                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="fas fa-eye mr-1.5"></i>
                      Pregledaj
                    </button>
                    <button
                      onClick={() => handleEditCategory(category.id)}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="fas fa-edit mr-1.5"></i>
                      Uredi
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
         {/* Dodani instrumenti */}
            <div className="mb-8">
  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
    Dodani instrumenti
  </h3>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {instruments.map((inst) => (
      <div
        key={inst.id}
        className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-md"
      >
        <div className="p-5 flex flex-col h-full">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
              <i className="fas fa-music text-indigo-600"></i>
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-medium text-gray-900">{inst.name}</h4>
              <p className="text-sm text-gray-500 capitalize">{categories.find(c => c.id === inst.category)?.name || inst.category}</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-700 mb-1">
              <span className="font-semibold">Cijena:</span> {inst.price} kn
            </div>
            <div className="text-sm text-gray-700 mb-1">
              <span className="font-semibold">Šifra:</span> {inst.code}
            </div>
            <div className="text-xs text-gray-500 mt-2">{inst.description}</div>
          </div>
          <div className="mt-4 flex justify-between">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              Količina: {inst.stock}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>  </main>

      {/* Modali */}
      {showAddModal && <AddInstrumentModal />}
      {showEditModal && selectedCategory && <EditCategoryModal />}
    </div>
  );
};

export default Dashboard;
