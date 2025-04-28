import { FaAtom } from 'react-icons/fa';
import Link from 'next/link'

const FBlockElements = () => {
  // Lanthanides data
  const lanthanides = [
    { name: 'La', number: 57, mass: 138.91, fullName: 'Lanthanum' },
    { name: 'Ce', number: 58, mass: 140.12, fullName: 'Cerium' },
    { name: 'Pr', number: 59, mass: 140.91, fullName: 'Praseodymium' },
    { name: 'Nd', number: 60, mass: 144.24, fullName: 'Neodymium' },
    { name: 'Pm', number: 61, mass: 145, fullName: 'Promethium' },
    { name: 'Sm', number: 62, mass: 150.36, fullName: 'Samarium' },
    { name: 'Eu', number: 63, mass: 151.96, fullName: 'Europium' },
    { name: 'Gd', number: 64, mass: 157.25, fullName: 'Gadolinium' },
    { name: 'Tb', number: 65, mass: 158.93, fullName: 'Terbium' },
    { name: 'Dy', number: 66, mass: 162.50, fullName: 'Dysprosium' },
    { name: 'Ho', number: 67, mass: 164.93, fullName: 'Holmium' },
    { name: 'Er', number: 68, mass: 167.26, fullName: 'Erbium' },
    { name: 'Tm', number: 69, mass: 168.93, fullName: 'Thulium' },
    { name: 'Yb', number: 70, mass: 173.05, fullName: 'Ytterbium' },
    { name: 'Lu', number: 71, mass: 174.97, fullName: 'Lutetium' },
  ];

  // Actinides data
  const actinides = [
    { name: 'Ac', number: 89, mass: 227, fullName: 'Actinium' },
    { name: 'Th', number: 90, mass: 232.04, fullName: 'Thorium' },
    { name: 'Pa', number: 91, mass: 231.04, fullName: 'Protactinium' },
    { name: 'U', number: 92, mass: 238.03, fullName: 'Uranium' },
    { name: 'Np', number: 93, mass: 237, fullName: 'Neptunium' },
    { name: 'Pu', number: 94, mass: 244, fullName: 'Plutonium' },
    { name: 'Am', number: 95, mass: 243, fullName: 'Americium' },
    { name: 'Cm', number: 96, mass: 247, fullName: 'Curium' },
    { name: 'Bk', number: 97, mass: 247, fullName: 'Berkelium' },
    { name: 'Cf', number: 98, mass: 251, fullName: 'Californium' },
    { name: 'Es', number: 99, mass: 252, fullName: 'Einsteinium' },
    { name: 'Fm', number: 100, mass: 257, fullName: 'Fermium' },
    { name: 'Md', number: 101, mass: 258, fullName: 'Mendelevium' },
    { name: 'No', number: 102, mass: 259, fullName: 'Nobelium' },
    { name: 'Lr', number: 103, mass: 262, fullName: 'Lawrencium' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center flex items-center justify-center">
          <FaAtom className="mr-2 sm:mr-3" /> F-Block Elements
        </h1>
        
        {/* Glass morphism container */}
        <div className="backdrop-blur-lg bg-white/10 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 mb-8 sm:mb-10 border border-white/20">
         <Link href="/lanthanoids"> <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Lanthanides</h2></Link>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3 mb-6 sm:mb-10">
            {lanthanides.map((element) => (
              <ElementCard key={element.number} element={element} color="from-cyan-400 to-blue-500" />
            ))}
          </div>
          <Link href="/actinoids">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Actinides</h2></Link>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3">
            {actinides.map((element) => (
              <ElementCard key={element.number} element={element} color="from-pink-500 to-rose-500" />
            ))}
          </div>
        </div>
        
        <div className="text-center text-white/70 text-xs sm:text-sm mt-6 sm:mt-8">
          <p>Hover over elements to see details. F-block elements are the two rows at the bottom of the periodic table.</p>
        </div>
      </div>
    </div>
  );
};

const ElementCard = ({ element, color }) => {
  return (
    <div className="group relative">
      <div className={`
        bg-gradient-to-br ${color} rounded sm:rounded-lg p-1 sm:p-2 h-16 sm:h-20 md:h-24 
        flex flex-col items-center justify-center
        shadow-md sm:shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl
        border border-white/20 hover:border-white/40 hover:z-10
      `}>
        <div className="text-[10px] sm:text-xs absolute top-1 left-1 text-white/80">{element.number}</div>
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{element.name}</div>
        <div className="text-[10px] sm:text-xs text-white/80 mt-0.5 sm:mt-1">{element.mass.toFixed(2)}</div>
      </div>
      
      {/* Tooltip on hover - hidden on touch devices */}
      <div className={`
        hidden sm:block
        absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 sm:w-40 p-2 sm:p-3 rounded-lg
        bg-black/80 backdrop-blur-sm text-white text-xs sm:text-sm opacity-0 invisible
        group-hover:opacity-100 group-hover:visible transition-all duration-200
        shadow-lg z-20 border border-white/10
      `}>
        <div className="font-bold text-center">{element.fullName}</div>
        <div className="flex justify-between mt-1">
          <span>Atomic #:</span>
          <span>{element.number}</span>
        </div>
        <div className="flex justify-between">
          <span>Mass:</span>
          <span>{element.mass.toFixed(2)}</span>
        </div>
        <div className="absolute -top-2 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-black/80 transform -translate-x-1/2 rotate-45"></div>
      </div>

      {/* Mobile tooltip - appears on click */}
      <div className={`
        sm:hidden absolute top-0 left-0 w-full h-full bg-black/50 rounded
        flex flex-col items-center justify-center opacity-0 pointer-events-none
        group-focus:opacity-100 group-focus:pointer-events-auto transition-opacity duration-200
        text-white text-center p-2
      `}>
        <div className="font-bold">{element.fullName}</div>
        <div>Atomic #: {element.number}</div>
        <div>Mass: {element.mass.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default FBlockElements;
