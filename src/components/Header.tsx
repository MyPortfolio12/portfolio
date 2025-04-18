import { useState, useEffect } from 'react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">Portfolio</a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-800 hover:text-blue-600"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile nav toggle */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile nav menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-200">
          <div className="flex flex-col items-center py-2">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-gray-800 hover:text-blue-600"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
