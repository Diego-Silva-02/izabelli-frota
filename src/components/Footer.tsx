
import { Heart, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-therapy-light-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Informações principais */}
          <div>
            <h3 className="text-white text-2xl font-playfair font-semibold mb-4">Dra. Izabelli Frota</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Psicóloga Clínica especializada em Terapia Cognitivo-Comportamental, 
              oferecendo atendimento humanizado para adolescentes, adultos e casais.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-therapy-mint-dark rounded-full"></div>
              <span>CRP 06/123456</span>
            </div>
          </div>

          {/* Contato rápido */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} />
                <span>(85) 98527-6144</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} />
                <span>contato@izabellifrota.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} />
                <span>Rua das Flores, 123 - São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Links e redes sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Siga-me</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://instagram.com/psi.izabellifrota" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-therapy-light-brown p-3 rounded-full hover:bg-therapy-skin transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:contato@izabellifrota.com"
                className="bg-therapy-light-brown p-3 rounded-full hover:bg-therapy-skin transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="space-y-2 text-sm text-gray-300">
              <p>• Política de Privacidade</p>
              <p>• Termos de Uso</p>
              <p>• Código de Ética Profissional</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Dra. Izabelli Frota. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span>Feito com</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>para cuidar da sua saúde mental</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
