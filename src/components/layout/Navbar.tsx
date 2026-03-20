import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] bg-moon-light rounded-full px-8 py-3 z-50 flex justify-between items-center shadow-sm">
      
      {/* Logo */}
      <div className="text-tomato text-4xl tracking-wide font-light lowercase">
        bion
      </div>
      
      {/* Center Links & Right Button */}
      <div className="flex items-center gap-10">
        <div className="flex gap-8 items-center font-medium text-[1.05rem] text-navy">
          <span className="cursor-pointer hover:text-tomato transition-colors">Home</span>
          <span className="cursor-pointer hover:text-tomato transition-colors">Blog</span>
        </div>
        
        <button className="flex items-center gap-2 bg-tomato text-moon-light px-6 py-2.5 rounded-[18px] font-medium border-2 border-peachy hover:bg-peachy transition-all">
          <span className="text-navy font-bold">Pay Now</span>
          <svg className="text-navy" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M12 17V10"></path>
            <path d="M9 13l3-3 3 3"></path>
          </svg>
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;
