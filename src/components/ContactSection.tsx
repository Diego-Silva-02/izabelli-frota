
import { useState } from 'react';
import { Calendar, MessageCircle, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preference: 'online',
    reason: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui normalmente enviaria os dados para um backend
    console.log('Dados do formulário:', formData);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entrarei em contato em até 24 horas. Obrigada!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      preference: 'online',
      reason: '',
      message: ''
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá Dra. Izabelli! Gostaria de agendar uma sessão de psicoterapia. 

Nome: ${formData.name || '[Seu nome]'}
Interesse: ${formData.reason || 'Conversar sobre terapia'}
Preferência: ${formData.preference === 'online' ? 'Atendimento Online' : 'Atendimento Presencial'}

Aguardo seu retorno!`);
    
    window.open(`https://wa.me/558585276144?text=${message}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-white to-therapy-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-semibold text-gray-900 mb-4">
            Agende sua <span className="text-therapy-blue-dark">Sessão</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dê o primeiro passo em direção ao seu bem-estar. Entre em contato e vamos conversar sobre como posso ajudar você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Formulário de Contato</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-therapy-blue-dark focus:border-transparent transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-therapy-blue-dark focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-therapy-blue-dark focus:border-transparent transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="preference" className="block text-gray-700 font-medium mb-2">
                    Preferência de atendimento *
                  </label>
                  <select
                    id="preference"
                    name="preference"
                    required
                    value={formData.preference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-therapy-blue-dark focus:border-transparent transition-colors bg-white"
                  >
                    <option value="online">Online</option>
                    <option value="presencial">Presencial</option>
                    <option value="ambos">Ambos</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-gray-700 font-medium mb-2">
                  Motivo da consulta
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-therapy-blue-dark focus:border-transparent transition-colors bg-white"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="ansiedade">Ansiedade</option>
                  <option value="depressao">Depressão</option>
                  <option value="relacionamento">Problemas de relacionamento</option>
                  <option value="autoestima">Autoestima</option>
                  <option value="estresse">Estresse</option>
                  <option value="casal">Terapia de casal</option>
                  <option value="adolescente">Questões da adolescência</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensagem adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-therapy-blue-dark focus:border-transparent transition-colors resize-none"
                  placeholder="Conte um pouco mais sobre o que gostaria de trabalhar na terapia..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-therapy-blue-dark text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <Send size={20} />
                  Enviar Mensagem
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-green-600 text-white px-6 py-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-therapy-blue p-2 rounded-lg">
                    <Phone size={20} className="text-therapy-blue-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-therapy-mint p-2 rounded-lg">
                    <Mail size={20} className="text-therapy-mint-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">E-mail</p>
                    <p className="text-gray-600">izabelli_frota@hotmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-therapy-lavender p-2 rounded-lg">
                    <MapPin size={20} className="text-therapy-lavender-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Consultório</p>
                    <p className="text-gray-600">Rua das Flores, 123<br />São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Horários de Atendimento</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-therapy-blue-dark" />
                  <span className="text-gray-700">Segunda a Sexta: 8h às 18h</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-therapy-blue-dark" />
                  <span className="text-gray-700">Sábado: 8h às 12h</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-gray-blue-dark" />
                  <span className="text-gray-700">Domingo: Fechado</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-therapy-lavender to-therapy-sage p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Primeira Sessão</h3>
              <p className="text-gray-700 mb-4">
                A primeira sessão é um momento especial onde nos conheceremos melhor e 
                traçaremos um planejamento terapêutico personalizado para você.
              </p>
              <div className="flex items-center gap-2 text-therapy-blue-dark">
                <Calendar size={16} />
                <span className="font-medium">Duração: 50 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
