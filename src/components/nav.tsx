import logo from '../assets/logo.png';

interface NavbarProps {
  balance: number;
}
const Navbar = ({ balance }: NavbarProps) => {

  return (
  <nav className="sticky top-0 z-50 flex items-center justify-between px-12 py-3 bg-white/70 w-full">
      
      {/* Logo Section */}
      <div className="shrink-0 cursor-pointer">
        <img 
          src={logo}
          alt="Cricket Logo" 
          className="h-14 w-auto" 
        />
      </div>

      {/* Menu & Action Section */}
      <div className="flex items-center gap-10">
        
      
        <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-500">
          <li>
            <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900 transition-colors">Fixture</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900 transition-colors">Teams</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900 transition-colors">Schedules</a>
          </li>
        </ul>

       
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
          <span className="font-bold text-gray-900 text-[15px]">Balance <span className="text-lg font-bold text-yellow-500 leading-none">$</span>{balance} </span>
        
          
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;