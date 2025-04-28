import { FaAtom, FaFlask, FaMagnet, FaLightbulb, FaIndustry } from 'react-icons/fa';
import { GiChemicalDrop, GiCrystalBars } from 'react-icons/gi';
import { MdScience, MdColorLens } from 'react-icons/md';

const LanthanoidsSection = () => {
  // Lanthanides data with additional properties
  const lanthanides = [
    { 
      name: 'La', number: 57, mass: 138.91, fullName: 'Lanthanum',
      uses: ['Camera lenses', 'Catalysts'], 
      properties: ['Soft metal', 'Reactive'],
      icon: <MdColorLens className="text-blue-300" />
    },
    { 
      name: 'Ce', number: 58, mass: 140.12, fullName: 'Cerium',
      uses: ['Self-cleaning ovens', 'Polishing powders'],
      properties: ['Most abundant', 'Oxidizes easily'],
      icon: <FaIndustry className="text-amber-300" />
    },
    { 
      name: 'Pr', number: 59, mass: 140.91, fullName: 'Praseodymium',
      uses: ['Aircraft engines', 'Special glasses'],
      properties: ['Green salts', 'Paramagnetic'],
      icon: <GiCrystalBars className="text-green-300" />
    },
    { 
      name: 'Nd', number: 60, mass: 144.24, fullName: 'Neodymium',
      uses: ['Powerful magnets', 'Lasers'],
      properties: ['Strongly magnetic', 'Purple salts'],
      icon: <FaMagnet className="text-purple-300" />
    },
    { 
      name: 'Pm', number: 61, mass: 145, fullName: 'Promethium',
      uses: ['Nuclear batteries', 'Luminous paint'],
      properties: ['Radioactive', 'Glows in dark'],
      icon: <FaLightbulb className="text-yellow-300" />
    },
    { 
      name: 'Sm', number: 62, mass: 150.36, fullName: 'Samarium',
      uses: ['Cancer treatment', 'Headphones'],
      properties: ['Moderately hard', 'Stable'],
      icon: <MdScience className="text-red-300" />
    },
    { 
      name: 'Eu', number: 63, mass: 151.96, fullName: 'Europium',
      uses: ['Euro banknotes', 'TV screens'],
      properties: ['Most reactive', 'Red phosphor'],
      icon: <MdColorLens className="text-red-400" />
    },
    { 
      name: 'Gd', number: 64, mass: 157.25, fullName: 'Gadolinium',
      uses: ['MRI contrast', 'Nuclear reactors'],
      properties: ['Neutron absorber', 'Ferromagnetic'],
      icon: <FaFlask className="text-teal-300" />
    },
    { 
      name: 'Tb', number: 65, mass: 158.93, fullName: 'Terbium',
      uses: ['Solid-state devices', 'Sonar systems'],
      properties: ['Silvery-white', 'Malleable'],
      icon: <GiChemicalDrop className="text-emerald-300" />
    },
    { 
      name: 'Dy', number: 66, mass: 162.50, fullName: 'Dysprosium',
      uses: ['Data storage', 'Electric vehicles'],
      properties: ['High melting point', 'Neutron absorber'],
      icon: <FaIndustry className="text-blue-400" />
    },
    { 
      name: 'Ho', number: 67, mass: 164.93, fullName: 'Holmium',
      uses: ['Nuclear control rods', 'Lasers'],
      properties: ['Highest magnetic strength', 'Soft'],
      icon: <FaMagnet className="text-indigo-300" />
    },
    { 
      name: 'Er', number: 68, mass: 167.26, fullName: 'Erbium',
      uses: ['Fiber optics', 'Dental lasers'],
      properties: ['Pink compounds', 'Slow neutron absorber'],
      icon: <FaLightbulb className="text-pink-300" />
    },
    { 
      name: 'Tm', number: 69, mass: 168.93, fullName: 'Thulium',
      uses: ['Portable X-rays', 'Euro banknotes'],
      properties: ['Rarest', 'Blue fluorescence'],
      icon: <MdScience className="text-blue-300" />
    },
    { 
      name: 'Yb', number: 70, mass: 173.05, fullName: 'Ytterbium',
      uses: ['Stress gauges', 'Atomic clocks'],
      properties: ['Soft', 'Ductile'],
      icon: <FaFlask className="text-yellow-400" />
    },
    { 
      name: 'Lu', number: 71, mass: 174.97, fullName: 'Lutetium',
      uses: ['PET scans', 'Catalysts'],
      properties: ['Hard', 'Dense'],
      icon: <GiChemicalDrop className="text-violet-300" />
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="backdrop-blur-lg bg-white/10 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 mb-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl text-blue-300">
              <FaAtom />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Lanthanoids Series
              </h1>
              <p className="text-white/80 mb-4">
                The 15 metallic chemical elements with atomic numbers 57 through 71, from lanthanum through lutetium.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <FaMagnet /> Strong magnetic properties
                </div>
                <div className="flex items-center gap-2 text-sm text-green-200">
                  <MdColorLens /> Vibrant colored compounds
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-200">
                  <FaIndustry /> Critical for modern technology
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Periodic Table Section */}
        <div className="backdrop-blur-lg bg-white/10 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 mb-8 border border-white/20">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
            Lanthanoids Periodic Table
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3 mb-6 sm:mb-10">
            {lanthanides.map((element) => (
              <ElementCard key={element.number} element={element} />
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="backdrop-blur-lg relative bg-white/10 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 mb-8 border border-white/20 z-0">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
            Unique Characteristics of Lanthanoids
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<FaMagnet className="text-3xl text-purple-300" />}
              title="Magnetic Properties"
              description="Many lanthanoids like neodymium and samarium form exceptionally strong permanent magnets used in headphones and electric motors."
            />
            <FeatureCard 
              icon={<MdColorLens className="text-3xl text-blue-300" />}
              title="Colorful Compounds"
              description="Lanthanoids produce vibrant colors in compounds, used in phosphors for displays, lighting, and lasers."
            />
            <FeatureCard 
              icon={<FaIndustry className="text-3xl text-amber-300" />}
              title="Industrial Applications"
              description="Essential in catalysts, polishing powders, and specialty glasses for cameras and scientific instruments."
            />
            <FeatureCard 
              icon={<FaLightbulb className="text-3xl text-yellow-300" />}
              title="Light Emission"
              description="Used in energy-efficient lighting and display technologies due to their unique luminescent properties."
            />
            <FeatureCard 
              icon={<GiChemicalDrop className="text-3xl text-green-300" />}
              title="Chemical Similarity"
              description="Despite their differences, all lanthanoids share similar chemical properties due to their electron configuration."
            />
            <FeatureCard 
              icon={<MdScience className="text-3xl text-red-300" />}
              title="Scientific Importance"
              description="Critical in medical imaging, cancer treatment, and as dopants in various materials science applications."
            />
          </div>
        </div>

        <div className="text-center text-white/70 text-xs sm:text-sm mt-6 sm:mt-8">
          <p>The lanthanoids, along with the actinoids, constitute the f-block elements of the periodic table.</p>
        </div>
      </div>
    </div>
  );
};

const ElementCard = ({ element }) => {
  return (
    <div className="group relative">
      <div className={`
        bg-gradient-to-br from-cyan-400 to-blue-500 rounded sm:rounded-lg p-1 sm:p-2 h-16 sm:h-20 md:h-24 
        flex flex-col items-center justify-center
        shadow-md sm:shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl
        border border-white/20 hover:border-white/40 hover:z-10
      `}>
        <div className="text-[10px] sm:text-xs absolute top-1 left-1 text-white/80">{element.number}</div>
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{element.name}</div>
        <div className="text-[10px] sm:text-xs text-white/80 mt-0.5 sm:mt-1">{element.mass.toFixed(2)}</div>
        <div className="absolute bottom-1 right-1 text-xs opacity-70">
          {element.icon}
        </div>
      </div>
      
      {/* Enhanced Tooltip */}
      <div className={`
        hidden sm:block
        absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 sm:w-56 p-3 rounded-lg
        bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm text-white text-sm opacity-0 invisible
        group-hover:opacity-100 group-hover:visible transition-all duration-200
        shadow-lg z-50 border border-white/10 
      `}>
        <div className="font-bold text-center text-blue-300 mb-2">{element.fullName}</div>
        <div className="flex justify-between mb-1">
          <span className="text-gray-300">Atomic #:</span>
          <span>{element.number}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-gray-300">Mass:</span>
          <span>{element.mass.toFixed(2)}</span>
        </div>
        <div className="border-t border-white/10 my-2 pt-2">
          <div className="text-xs text-blue-200 mb-1">Properties:</div>
          <ul className="text-xs space-y-1">
            {element.properties.map((prop, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-300 mr-1">•</span> {prop}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-white/10 my-2 pt-2">
          <div className="text-xs text-green-200 mb-1">Uses:</div>
          <ul className="text-xs space-y-1">
            {element.uses.map((use, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-300 mr-1">•</span> {use}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute -top-2 left-1/2 w-4 h-4 bg-gradient-to-br from-gray-800 to-gray-900 transform -translate-x-1/2 rotate-45"></div>
      </div>

      {/* Mobile overlay */}
      <div className={`
        sm:hidden absolute inset-0 bg-black/70 rounded flex flex-col items-center justify-center p-2
        opacity-0 pointer-events-none transition-opacity duration-200
        group-focus:opacity-100 group-focus:pointer-events-auto
        text-white text-center
      `}>
        <div className="font-bold text-blue-300 text-sm">{element.fullName}</div>
        <div className="text-xs">#{element.number} • {element.mass.toFixed(2)}</div>
        <div className="text-xs mt-2 text-left w-full">
          <div className="text-blue-200">Properties:</div>
          <ul className="pl-4">
            {element.properties.map((prop, i) => (
              <li key={i} className="text-xs">• {prop}</li>
            ))}
          </ul>
        </div>
        <div className="text-xs mt-1 text-left w-full">
          <div className="text-green-200">Uses:</div>
          <ul className="pl-4">
            {element.uses.map((use, i) => (
              <li key={i} className="text-xs">• {use}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all">
      <div className="flex items-start gap-4">
        <div className="mt-1">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LanthanoidsSection;