
import { MessageCircle, Calendar } from 'lucide-react';
import ProfileImage from '../assets/images/profileImage2.jpg';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma sessão de psicoterapia.");
    window.open(`https://wa.me/558585276144?text=${message}`, '_blank');
  };

  // const scrollToContact = () => {
  //   const element = document.getElementById('contato');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    // from-therapy-blue via-white to-therapy-mint
    <section className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-therapy-light-pink via-skin to-therapy-off-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-therapy-lavender to-therapy-sage rounded-3xl transform rotate-3 animate-float"></div>
            <img 
              // src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
              src={ProfileImage} 
              alt="Ambiente acolhedor de terapia"
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg max-w-xs">
              <p className="text-sm text-gray-600 italic mb-2">
                "Um espaço seguro para encontrar o equilíbrio emocional que você busca."
              </p>
              <div className="flex items-center gap-2 text-xs text-therapy-skin-dark font-medium">
                <div className="w-1 h-1 bg-therapy-skin-dark rounded-full"></div>
                <span>Abordagem humanizada</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-semibold text-therapy-light-gray leading-tight mb-6">
              Você não precisa enfrentar 
              <span className="text-therapy-skin"> tudo sozinho(a)</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Terapia para adolescentes, adultos e casais – online ou presencial, 
              no seu tempo, no seu ritmo. Um espaço seguro para seu bem-estar emocional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button 
                onClick={scrollToContact}
                className="bg-therapy-blue-dark text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-medium"
              >
                <Calendar size={20} />
                Agendar Sessão
              </button> */}
              <button 
                onClick={handleWhatsAppClick}
                className="border-2 border-therapy-mint-dark text-therapy-mint-dark px-8 py-4 rounded-full hover:bg-therapy-mint-dark hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-medium"
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>
            </div>
            <div className="mt-8 flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-therapy-mint-dark rounded-full"></div>
                <span>CRP 11/01788</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-therapy-lavender-dark rounded-full"></div>
                <span>20+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-therapy-blue-dark rounded-full"></div>
                <span>35+ mil atendimentos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
