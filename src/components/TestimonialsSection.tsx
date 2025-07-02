
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana M.",
      age: "28 anos",
      text: "A Dra. Izabelli me ajudou a superar uma fase muito difícil da minha vida. Sua abordagem acolhedora e as técnicas de TCC fizeram toda a diferença para controlar minha ansiedade.",
      rating: 5,
      therapy: "Ansiedade"
    },
    {
      name: "Carlos e Marina",
      age: "Casal, 35 anos",
      text: "Salvamos nosso casamento graças à terapia de casal. Aprendemos a nos comunicar melhor e hoje temos um relacionamento muito mais forte e saudável.",
      rating: 5,
      therapy: "Terapia de Casal"
    },
    {
      name: "João P.",
      age: "17 anos",
      text: "No início eu não queria fazer terapia, mas a Dra. Izabelli me deixou muito à vontade. Hoje consigo lidar melhor com a pressão da escola e me sinto mais confiante.",
      rating: 5,
      therapy: "Adolescente"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-therapy-sage to-therapy-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-semibold text-gray-900 mb-4">
            Depoimentos de <span className="text-therapy-blue-dark">Pacientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias reais de transformação e crescimento pessoal
          </p>
          <p className="text-sm text-gray-500 mt-2">
            *Nomes alterados para preservar a privacidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 -left-3 bg-therapy-lavender p-2 rounded-full">
                <Quote size={20} className="text-therapy-lavender-dark" />
              </div>
              
              <div className="flex items-center gap-1 mb-4 mt-2">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.age}</p>
                  </div>
                  <div className="bg-therapy-mint px-3 py-1 rounded-full">
                    <span className="text-xs text-therapy-mint-dark font-medium">
                      {testimonial.therapy}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/70 p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Sua história pode ser a próxima!
            </h3>
            <p className="text-gray-600 mb-4">
              Junte-se a centenas de pessoas que já transformaram suas vidas com terapia.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-therapy-blue-dark text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Começar Minha Jornada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
