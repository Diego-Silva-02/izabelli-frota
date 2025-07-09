
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma sessão de psicoterapia.");
    window.open(`https://wa.me/558585276144?text=${message}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-semibold text-therapy-skin">
            Dra. Izabelli Frota
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-therapy-skin-dark transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('atendimento')}
              className="text-gray-700 hover:text-therapy-skin-dark transition-colors"
            >
              Atendimentos
            </button>
            <button 
              onClick={() => scrollToSection('publico')}
              className="text-gray-700 hover:text-therapy-skin-dark transition-colors"
            >
              Público
            </button>
            {/* <button 
              onClick={() => scrollToSection('contato')}
              className="bg-therapy-skin text-white px-6 py-2 rounded-full hover:brightness-110 transition-colors"
            >
              Agendar Sessão
            </button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-therapy-skin-dark transition-colors py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('atendimento')}
                className="text-left text-gray-700 hover:text-therapy-skin-dark transition-colors py-2"
              >
                Atendimento
              </button>
              <button 
                onClick={() => scrollToSection('publico')}
                className="text-left text-gray-700 hover:text-therapy-skin-dark transition-colors py-2"
              >
                Público
              </button>
              <button 
                onClick={() => handleWhatsAppClick()}
                className="bg-therapy-skin text-white px-6 py-3 rounded-full hover:bg-therapy-skin-dark transition-colors text-center"
              >
                Agendar Sessão
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
