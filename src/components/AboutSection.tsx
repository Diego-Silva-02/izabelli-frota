
import { GraduationCap, Heart, Users, Award } from 'lucide-react';
import ProfileImage from '../assets/images/profileImage2.jpg';

const AboutSection = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Formação Sólida",
      description: "Psicologia pela USP, especialização em TCC"
    },
    {
      icon: Heart,
      title: "Abordagem Empática",
      description: "Escuta ativa e acolhimento em cada sessão"
    },
    {
      icon: Users,
      title: "Experiência Diversa",
      description: "Atendimento a adolescentes, adultos e casais"
    },
    {
      icon: Award,
      title: "Resultados Comprovados",
      description: "Centenas de vidas transformadas"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-therapy-sage">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-therapy-lavender to-therapy-blue rounded-3xl transform -rotate-3"></div>
            <img 
              src={ProfileImage}
              alt="Dra. Izabelli Frota"
              className="relative rounded-3xl shadow-xl w-full h-[600px] object-cover"
            />
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-therapy-skin">5+</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-playfair font-semibold text-gray-900 mb-6">
              Sobre a <span className="text-therapy-skin">Dra. Izabelli</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Olá! Sou a Dra. Izabelli Frota, psicóloga clínica formada pela Universidade de São Paulo, 
              com especialização em Terapia Cognitivo-Comportamental e Terapia de Casal.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Acredito que cada pessoa possui recursos internos únicos para superar desafios. 
              Meu papel é oferecer um espaço seguro, livre de julgamentos, onde você pode 
              explorar seus sentimentos e desenvolver estratégias eficazes para uma vida mais equilibrada.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {qualifications.map((qual, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-therapy-blue rounded-lg">
                      <qual.icon size={20} className="text-therapy-skin" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{qual.title}</h3>
                      <p className="text-sm text-gray-600">{qual.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Minha Abordagem Terapêutica</h3>
              <p className="text-gray-600 leading-relaxed">
                Utilizo principalmente a <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, 
                uma abordagem cientificamente comprovada que ajuda a identificar e modificar 
                padrões de pensamento e comportamento que causam sofrimento emocional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
