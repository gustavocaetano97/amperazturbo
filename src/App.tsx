import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Star, Users, BarChart3, Target, ShoppingCart, Heart, DollarSign, Repeat, Zap, TrendingUp, Users2, LineChart, ClipboardCheck } from 'lucide-react';

function App() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const storySteps = [
    { icon: Target, title: "Aquisição", description: "Atraia a atenção do público" },
    { icon: Heart, title: "Engajamento", description: "Crie interesse e vendas" },
    { icon: DollarSign, title: "Monetização", description: "Realize vendas" },
    { icon: Repeat, title: "Retenção", description: "Matenha os clientes indicando" }
  ];

  const testimonials = [
    { id: 1, name: "João Silva", role: "CEO", company: "Tech Solutions" },
    { id: 2, name: "Maria Santos", role: "Marketing Director", company: "Digital Growth" },
    { id: 3, name: "Pedro Oliveira", role: "Founder", company: "Innovation Labs" }
  ];

  const services = [
    {
      icon: TrendingUp,
      title: "Atraia os clientes certos",
      description: "Atraia os clientes certos para o seu time de atendimento."
    },
    {
      icon: Users2,
      title: "Consultoria especializada",
      description: "Receba uma consultoria para estruturação comercial."
    },
    {
      icon: LineChart,
      title: "Dados em tempo real",
      description: "Tenha previsibilidade e calcule o retorno do seu investimento com dados ao vivo."
    },
    {
      icon: ClipboardCheck,
      title: "Acompanhamento contínuo",
      description: "Acompanhamento de perto para testar novas estratégias"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-yellow-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Amperaz
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#fazemos" className="text-gray-300 hover:text-yellow-400 transition-colors">O que fazemos</a>
              <a href="#como" className="text-gray-300 hover:text-yellow-400 transition-colors">Como?</a>
              <a href="#depoimentos" className="text-gray-300 hover:text-yellow-400 transition-colors">Depoimentos</a>
              <a href="#casos" className="text-gray-300 hover:text-yellow-400 transition-colors">Casos de Sucesso</a>
              <button className="bg-[#300334] hover:bg-[#400445] text-white px-6 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 border border-yellow-400/30">
                Agendar Consultoria
              </button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden text-yellow-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#300334]/95 to-black/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent animate-fade-in">
                Amperaz Turbo
              </h1>
              <p className="text-2xl text-gray-200">Energia na medida para o seu negócio.</p>
              <p className="text-xl text-gray-300">
                Escolha algo que vá muito além da gestão de tráfego. Cresça suas oportunidades de vendas de maneira verificável.
              </p>
              <button className="bg-[#300334] hover:bg-[#400445] text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 border border-yellow-400/30">
                Agendar uma reunião de consultoria grátis
              </button>
            </div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <img
                src="/src/public/heroimage.webp"
                alt="Muito mais do que tráfego pago. Fuja da gestão de tráfego tradicional"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="fazemos" className="py-20 bg-gradient-to-b from-black to-[#300334]/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              O que fazemos?
            </h2>
            <p className="text-xl text-gray-300">
              Marketing de crescimento é usar tráfego de pago, influenciadores e inteligência de mercado para atrair a pessoa certa, no momento certo com a mensagem certa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-[#300334]/30 to-black/30 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors">
                    <service.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Section */}
      <section id="como" className="py-20 bg-gradient-to-b from-black to-[#300334]/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Como?
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Há um método científico para que você NUNCA PARE DE VENDER
            </p>
            <p className="text-lg text-gray-400">
              Se você não fizer isso, vai demorar para CRESCER
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {storySteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="p-6 rounded-lg bg-[#300334]/10 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:-translate-y-2">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                        {index + 1}
                      </div>
                      <step.icon className="w-12 h-12 text-yellow-400 mb-4" />
                      <h3 className="text-xl font-bold text-yellow-400 mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-black/90 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            O que nossos clientes dizem
          </h2>
          <div className="relative">
            <div className="flex space-x-4 items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-72 aspect-[9/16] transition-all duration-500 transform ${
                    index === activeVideo
                      ? 'scale-100 opacity-100'
                      : index === activeVideo - 1 || index === activeVideo + 1
                      ? 'scale-90 opacity-70'
                      : 'scale-75 opacity-40'
                  }`}
                  onClick={() => setActiveVideo(index)}
                >
                  <div className="w-full h-full bg-[#300334]/30 rounded-2xl overflow-hidden border border-yellow-400/20 group cursor-pointer">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-yellow-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                        <p className="font-bold text-yellow-400">{testimonial.name}</p>
                        <p className="text-sm text-gray-300">{testimonial.role}</p>
                        <p className="text-sm text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="casos" className="py-20 bg-gradient-to-t from-black to-[#300334]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Casos de Sucesso
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="p-6 rounded-lg bg-[#300334]/10 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                <div className="h-16 w-16 bg-gray-800 rounded-full mb-4"></div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Empresa {index + 1}</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Investimento anual: R$ {(index + 1) * 100}K</p>
                  <p>Receita anual: R$ {(index + 1) * 1000}K</p>
                  <div className="flex items-center mt-4">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                  <p className="italic mt-4">"Transformou completamente nossa estratégia digital."</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#300334]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Pronto para transformar seu negócio?
          </h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Agendar uma reunião de consultoria grátis
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;