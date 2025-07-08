
import { Brain, Smile, MessageCircle, TrendingUp, Shield, Lightbulb } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Melhora da Autoestima",
      description: "Desenvolva uma visão mais positiva e realista sobre si mesmo, fortalecendo sua confiança pessoal."
    },
    {
      icon: Smile,
      title: "Redução da Ansiedade",
      description: "Aprenda técnicas eficazes para gerenciar a ansiedade e recuperar o controle sobre suas emoções."
    },
    {
      icon: MessageCircle,
      title: "Melhora na Comunicação",
      description: "Desenvolva habilidades de comunicação mais assertiva em relacionamentos pessoais e profissionais."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Pessoal",
      description: "Alcance seus objetivos com maior clareza, motivação e estratégias práticas para o sucesso."
    },
    {
      icon: Shield,
      title: "Resiliência Emocional",
      description: "Construa ferramentas para enfrentar desafios da vida com maior estabilidade emocional."
    },
    {
      icon: Lightbulb,
      title: "Autoconhecimento",
      description: "Compreenda melhor seus padrões de pensamento, emoções e comportamentos para mudanças duradouras."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-semibold text-gray-900 mb-4">
            Benefícios da <span className="text-therapy-skin">Terapia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A psicoterapia oferece ferramentas concretas para transformar sua vida, 
            promovendo bem-estar duradouro e crescimento pessoal significativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-therapy-blue p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon size={24} className="text-therapy-skin-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 bg-gradient-to-r from-therapy-blue to-therapy-lavender p-8 rounded-3xl text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Pronto para começar sua transformação?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Cada sessão é um passo em direção a uma versão mais equilibrada e plena de você mesmo. 
            O momento certo para cuidar da sua saúde mental é agora.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-therapy-blue-dark text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-medium"
          >
            Agendar Minha Primeira Sessão
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default BenefitsSection;
