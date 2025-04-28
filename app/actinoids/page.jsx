import { FaAtom, FaRadiation, FaShieldAlt, FaBomb, FaFlask, FaIndustry } from 'react-icons/fa';
import { GiNuclear, GiRadialBalance, GiChemicalDrop } from 'react-icons/gi';
import { MdScience, MdWarning } from 'react-icons/md';

const ActinoidsSection = () => {
  // Actinides data with additional properties
  const actinides = [
    { 
      name: 'Ac', number: 89, mass: 227, fullName: 'Actinium',
      uses: ['Neutron sources', 'Radioactive therapy'], 
      properties: ['Highly radioactive', 'Silvery-white'],
      icon: <FaRadiation className="text-blue-300" />,
      radioactivity: 'High'
    },
    { 
      name: 'Th', number: 90, mass: 232.04, fullName: 'Thorium',
      uses: ['Nuclear fuel', 'Aircraft engines'],
      properties: ['Weakly radioactive', 'Ductile'],
      icon: <GiNuclear className="text-green-300" />,
      radioactivity: 'Low'
    },
    { 
      name: 'Pa', number: 91, mass: 231.04, fullName: 'Protactinium',
      uses: ['Scientific research', 'Rare laboratory uses'],
      properties: ['Extremely rare', 'Toxic'],
      icon: <MdScience className="text-purple-300" />,
      radioactivity: 'High'
    },
    { 
      name: 'U', number: 92, mass: 238.03, fullName: 'Uranium',
      uses: ['Nuclear reactors', 'Military applications'],
      properties: ['Dense', 'Malleable'],
      icon: <GiRadialBalance className="text-yellow-300" />,
      radioactivity: 'Medium'
    },
    { 
      name: 'Np', number: 93, mass: 237, fullName: 'Neptunium',
      uses: ['Neutron detection', 'Scientific research'],
      properties: ['Silvery metallic', 'Pyrophoric'],
      icon: <FaFlask className="text-red-300" />,
      radioactivity: 'High'
    },
    { 
      name: 'Pu', number: 94, mass: 244, fullName: 'Plutonium',
      uses: ['Nuclear weapons', 'Spacecraft power'],
      properties: ['Toxic', 'Multiple allotropes'],
      icon: <FaBomb className="text-orange-300" />,
      radioactivity: 'High'
    },
    { 
      name: 'Am', number: 95, mass: 243, fullName: 'Americium',
      uses: ['Smoke detectors', 'Neutron sources'],
      properties: ['Silvery-white', 'Synthetic'],
      icon: <MdWarning className="text-red-400" />,
      radioactivity: 'Medium'
    },
    { 
      name: 'Cm', number: 96, mass: 247, fullName: 'Curium',
      uses: ['Spacecraft power', 'Scientific research'],
      properties: ['Hard, brittle', 'High melting point'],
      icon: <FaIndustry className="text-teal-300" />,
      radioactivity: 'Very High'
    },
    { 
      name: 'Bk', number: 97, mass: 247, fullName: 'Berkelium',
      uses: ['Synthesis of heavier elements', 'Research'],
      properties: ['Silvery-white', 'Synthetic'],
      icon: <GiChemicalDrop className="text-emerald-300" />,
      radioactivity: 'High'
    },
    { 
      name: 'Cf', number: 98, mass: 251, fullName: 'Californium',
      uses: ['Neutron startup rods', 'Cancer treatment'],
      properties: ['Highly toxic', 'Radioactive'],
      icon: <FaShieldAlt className="text-blue-400" />,
      radioactivity: 'Very High'
    },
    { 
      name: 'Es', number: 99, mass: 252, fullName: 'Einsteinium',
      uses: ['Scientific research', 'Synthesis of heavier elements'],
      properties: ['Soft, silvery', 'Synthetic'],
      icon: <MdScience className="text-indigo-300" />,
      radioactivity: 'High'
    },
    { 
      name: 'Fm', number: 100, mass: 257, fullName: 'Fermium',
      uses: ['Scientific research', 'Nuclear studies'],
      properties: ['Unknown bulk properties', 'Synthetic'],
      icon: <GiNuclear className="text-pink-300" />,
      radioactivity: 'High'
    },
    { 
      name: 'Md', number: 101, mass: 258, fullName: 'Mendelevium',
      uses: ['Scientific research', 'Heavy element studies'],
      properties: ['Radioactive', 'Synthetic'],
      icon: <FaFlask className="text-yellow-400" />,
      radioactivity: 'High'
    },
    { 
      name: 'No', number: 102, mass: 259, fullName: 'Nobelium',
      uses: ['Scientific research', 'Nuclear physics'],
      properties: ['Short-lived isotopes', 'Synthetic'],
      icon: <FaRadiation className="text-violet-300" />,
      radioactivity: 'High'
    },
    { 
      name: 'Lr', number: 103, mass: 262, fullName: 'Lawrencium',
      uses: ['Scientific research', 'Heavy element studies'],
      properties: ['Radioactive', 'Synthetic'],
      icon: <GiChemicalDrop className="text-red-300" />,
      radioactivity: 'High'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="backdrop-blur-lg bg-white/10 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 mb-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl text-red-400 animate-pulse">
              <FaRadiation />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Actinoids Series
              </h1>
              <p className="text-white/80 mb-4">
                The 15 radioactive metallic elements with atomic numbers 89 through 103, from actinium through lawrencium.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-red-200">
                  <FaRadiation /> Radioactive elements
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-200">
                  <GiNuclear /> Nuclear applications
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <FaShieldAlt /> Handle with care
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Periodic Table Section */}
        <div className="backdrop-blur-lg bg-white/10 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 mb-8 border border-white/20">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
            Actinoids Periodic Table
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3 mb-6 sm:mb-10">
            {actinides.map((element) => (
              <ElementCard key={element.number} element={element} />
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="backdrop-blur-lg bg-white/10 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 mb-8 border border-white/20">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
            Unique Characteristics of Actinoids
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<FaRadiation className="text-3xl text-red-400" />}
              title="Radioactivity"
              description="All actinoids are radioactive, with varying half-lives. Many are used in nuclear medicine and energy production."
            />
            <FeatureCard 
              icon={<GiNuclear className="text-3xl text-green-300" />}
              title="Nuclear Applications"
              description="Several actinoids like uranium and plutonium are crucial for nuclear reactors and weapons technology."
            />
            <FeatureCard 
              icon={<FaShieldAlt className="text-3xl text-blue-300" />}
              title="Safety Considerations"
              description="Handling actinoids requires special precautions due to their radioactivity and toxicity."
            />
            <FeatureCard 
              icon={<FaBomb className="text-3xl text-orange-300" />}
              title="Weapons Potential"
              description="Certain actinoids can sustain nuclear chain reactions, making them valuable for military applications."
            />
            <FeatureCard 
              icon={<FaIndustry className="text-3xl text-teal-300" />}
              title="Industrial Uses"
              description="Used in smoke detectors, spacecraft power systems, and as neutron sources in various industries."
            />
            <FeatureCard 
              icon={<MdScience className="text-3xl text-purple-300" />}
              title="Scientific Research"
              description="Heavier actinoids are primarily used for research in nuclear physics and chemistry."
            />
          </div>
        </div>

        <div className="text-center text-white/70 text-xs sm:text-sm mt-6 sm:mt-8">
          <p>The actinoids, along with the lanthanoids, constitute the f-block elements of the periodic table.</p>
        </div>
      </div>
    </div>
  );
};

const ElementCard = ({ element }) => {
  // Determine color based on radioactivity level
  const radioactivityColor = {
    'Low': 'from-green-400 to-emerald-500',
    'Medium': 'from-yellow-400 to-amber-500',
    'High': 'from-orange-400 to-red-500',
    'Very High': 'from-red-500 to-pink-600'
  }[element.radioactivity] || 'from-purple-400 to-indigo-500';

  return (
    <div className="group relative">
      <div className={`
        bg-gradient-to-br ${radioactivityColor} rounded sm:rounded-lg p-1 sm:p-2 h-16 sm:h-20 md:h-24 
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
        shadow-lg z-20 border border-white/10
      `}>
        <div className="font-bold text-center text-red-300 mb-2">{element.fullName}</div>
        <div className="flex justify-between mb-1">
          <span className="text-gray-300">Atomic #:</span>
          <span>{element.number}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-gray-300">Mass:</span>
          <span>{element.mass.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-gray-300">Radioactivity:</span>
          <span className={`
            ${element.radioactivity === 'Very High' ? 'text-red-400' : ''}
            ${element.radioactivity === 'High' ? 'text-orange-400' : ''}
            ${element.radioactivity === 'Medium' ? 'text-yellow-400' : ''}
            ${element.radioactivity === 'Low' ? 'text-green-400' : ''}
          `}>
            {element.radioactivity}
          </span>
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
        <div className="font-bold text-red-300 text-sm">{element.fullName}</div>
        <div className="text-xs">#{element.number} • {element.mass.toFixed(2)}</div>
        <div className="text-xs mt-1">
          <span className={`
            ${element.radioactivity === 'Very High' ? 'text-red-400' : ''}
            ${element.radioactivity === 'High' ? 'text-orange-400' : ''}
            ${element.radioactivity === 'Medium' ? 'text-yellow-400' : ''}
            ${element.radioactivity === 'Low' ? 'text-green-400' : ''}
          `}>
            {element.radioactivity} Radioactivity
          </span>
        </div>
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

export default ActinoidsSection;