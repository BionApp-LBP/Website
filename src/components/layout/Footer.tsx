import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-moon-light border-t border-moon-medium pt-24 pb-10">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-tomato text-4xl tracking-wide font-light lowercase mb-6">
              bion
            </div>
            <p className="text-navy/70 font-medium max-w-sm">
              The future of credit is borderless. Fast, flexible, and fully transparent stablecoin credit lines for everyone.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-navy mb-6 tracking-tight">Products</h4>
            <ul className="space-y-4 text-navy/70 font-medium">
              <li><a href="#" className="hover:text-tomato transition-colors">Personal Credit</a></li>
              <li><a href="#" className="hover:text-tomato transition-colors">Business Accounts</a></li>
              <li><a href="#" className="hover:text-tomato transition-colors">Virtual Cards</a></li>
              <li><a href="#" className="hover:text-tomato transition-colors">Global Transfers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-navy mb-6 tracking-tight">Company</h4>
            <ul className="space-y-4 text-navy/70 font-medium">
              <li><a href="#" className="hover:text-tomato transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-tomato transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-tomato transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-tomato transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-moon-medium text-sm font-medium text-navy/50">
          <p>© {new Date().getFullYear()} BION. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-navy transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
