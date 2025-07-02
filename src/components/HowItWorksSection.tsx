
import { Video, MapPin, Calendar, MessageSquare, CheckCircle, Clock } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Primeiro Contato",
      description: "Entre em contato via WhatsApp ou formulário para conversarmos sobre suas necessidades",
      icon: MessageSquare
    },
    {
      number: "02", 
      title: "Agendamento",
      description: "Escolha o melhor horário e modalidade (online ou presencial) que funciona para você",
      icon: Calendar
    },
    {
      number: "03",
      title: "Primeira Sessão",
      description: "Conheceremos sua história e definiremos objetivos terapêuticos em um ambiente acolhedor",
      icon: CheckCircle
    },
    {
      number: "04",
      title: "Acompanhamento",
      description: "Sessões regulares com estratégias personalizadas para seu crescimento e bem-estar",
      icon: Clock
    }
  ];

  const modalities = [
    {
      icon: Video,
      title: "Atendimento Online",
      description: "Terapia por videochamada segura",
      benefits: ["Conforto da sua casa", "Flexibilidade de horários", "Mesma eficácia do presencial"],
      bgColor: "bg-therapy-blue"
    },
    {
      icon: MapPin,
      title: "Atendimento Presencial", 
      description: "Consultório acolhedor e privativo",
      benefits: ["Ambiente profissional", "Contato direto", "Espaço reservado"],
      bgColor: "bg-therapy-mint"
    }
  ];

  return (
    <section id="atendimento" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Como funciona */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-semibold text-gray-900 mb-4">
            Como funciona o <span className="text-therapy-blue-dark">atendimento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um processo simples e acolhedor para você começar sua jornada de autoconhecimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-therapy-lavender p-3 rounded-xl">
                    <step.icon size={24} className="text-therapy-lavender-dark" />
                  </div>
                  <span className="text-3xl font-bold text-therapy-blue-dark opacity-20">{step.number}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-therapy-blue-dark to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Modalidades */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-playfair font-semibold text-gray-900 mb-4">
            Modalidades de <span className="text-therapy-mint-dark">Atendimento</span>
          </h3>
          <p className="text-lg text-gray-600">
            Escolha o formato que melhor se adapta ao seu estilo de vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modalities.map((modality, index) => (
            <div key={index} className={`${modality.bgColor} p-8 rounded-3xl text-center hover:transform hover:scale-105 transition-transform duration-300`}>
              <div className="bg-white p-4 rounded-2xl inline-block mb-6">
                <modality.icon size={32} className="text-gray-800" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{modality.title}</h3>
              <p className="text-gray-700 mb-6">{modality.description}</p>
              <div className="space-y-3">
                {modality.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
