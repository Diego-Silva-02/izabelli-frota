
import { Users, Heart, UserCheck } from 'lucide-react';

const AudienceSection = () => {
  const audiences = [
    {
      icon: Users,
      title: "Adolescentes",
      subtitle: "Apoio emocional para os desafios dessa fase",
      description: "Navegando pelas transformações da adolescência com autoestima e confiança",
      issues: ["Ansiedade escolar", "Autoestima", "Relacionamentos", "Pressão social", "Identidade"],
      bgColor: "bg-therapy-lavender",
      textColor: "text-therapy-lavender-dark"
    },
    {
      icon: Heart,
      title: "Adultos", 
      subtitle: "Autoconhecimento, equilíbrio e saúde mental",
      description: "Desenvolvendo ferramentas para uma vida adulta mais plena e equilibrada",
      issues: ["Ansiedade", "Depressão", "Estresse", "Autoconhecimento", "Mudanças de vida"],
      bgColor: "bg-therapy-blue",
      textColor: "text-therapy-blue-dark"
    },
    {
      icon: UserCheck,
      title: "Casais",
      subtitle: "Diálogo, reconexão e resolução de conflitos", 
      description: "Fortalecendo vínculos e construindo relacionamentos mais saudáveis",
      issues: ["Comunicação", "Conflitos", "Intimidade", "Confiança", "Planejamento futuro"],
      bgColor: "bg-therapy-mint",
      textColor: "text-therapy-mint-dark"
    }
  ];

  return (
    <section id="publico" className="py-20 bg-gradient-to-br from-therapy-sage to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-semibold text-gray-900 mb-4">
            Quem eu <span className="text-therapy-skin">atendo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada fase da vida apresenta desafios únicos e para cada um deles ofereço suporte especializado seja
            para adolescentes, adultos ou casais em suas jornadas de crescimento pessoal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="group">
              <div className={`${audience.bgColor} p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 h-full`}>
                <div className="text-center mb-6">
                  <div className="bg-white p-4 rounded-2xl inline-block mb-4">
                    <audience.icon size={32} className={audience.textColor} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{audience.title}</h3>
                  <p className={`${audience.textColor} font-medium mb-3`}>{audience.subtitle}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{audience.description}</p>
                </div>
                
                <div className="bg-white/70 p-4 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-3 text-center">Principais questões trabalhadas:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {audience.issues.map((issue, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-xs text-gray-700 shadow-sm">
                        {issue}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-3xl shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Não encontrou seu perfil?
            </h3>
            <p className="text-gray-600 mb-6">
              Cada pessoa é única e cada situação merece atenção especializada. 
              Entre em contato para conversarmos sobre como posso ajudar você.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-therapy-skin text-white px-8 py-3 rounded-full hover:bg-therapy-skin-dark transition-colors"
            >
              Fale Comigo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
