import React from 'react';
import { 
  ShoppingCart, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Database, 
  Users, 
  CheckCircle, 
  Star,
  Github,
  MessageCircle,
  Waves,
  Globe,
  Zap,
  TrendingUp
} from 'lucide-react';

function App() {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5511970603441?text=Olá! Gostaria de saber mais sobre o AdmBeachApp', '_blank');
  };

  const handleGithubView = () => {
    window.open('https://github.com/AstridNielsen-lab/Beach-Vibe', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">AdmBeachApp</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-blue-300 hover:text-white transition-colors">Funcionalidades</a>
              <a href="#pricing" className="text-blue-300 hover:text-white transition-colors">Preços</a>
              <a href="#contact" className="text-blue-300 hover:text-white transition-colors">Contato</a>
              <button 
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-blue-300 text-sm">Sistema Proprietário Premium</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Gerencie seu
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Quiosque</span>
                <br />
                com Inteligência
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                O AdmBeachApp é a solução completa para gestão de quiosques de praia. 
                Controle vendas, estoque e operações com tecnologia de ponta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={handleWhatsAppContact}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Começar Agora</span>
                </button>
                <button 
                  onClick={handleGithubView}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-slate-600 flex items-center justify-center space-x-3"
                >
                  <Github className="w-5 h-5" />
                  <span>Ver Código</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-8 border border-blue-500/20 backdrop-blur-sm">
                <div className="bg-slate-800 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-slate-700 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <ShoppingCart className="w-5 h-5 text-blue-400" />
                        <span className="text-white">Vendas do Dia</span>
                      </div>
                      <span className="text-green-400 font-bold">R$ 2.847,50</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-700 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="w-5 h-5 text-cyan-400" />
                        <span className="text-white">Produtos Ativos</span>
                      </div>
                      <span className="text-blue-400 font-bold">127</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-700 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-white">Crescimento</span>
                      </div>
                      <span className="text-green-400 font-bold">+23%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Funcionalidades
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Poderosas</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Tudo que você precisa para transformar a gestão do seu quiosque em uma operação profissional e eficiente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Login Seguro",
                description: "Autenticação via Google OAuth para máxima segurança e praticidade no acesso.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: ShoppingCart,
                title: "Gestão de Vendas",
                description: "Registro de transações em tempo real com controle completo de métodos de pagamento.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: BarChart3,
                title: "Controle de Estoque",
                description: "Monitoramento automático de produtos com alertas de reposição inteligentes.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Database,
                title: "Banco de Dados Local",
                description: "Armazenamento seguro com SQLite, funcionando mesmo sem conexão com a internet.",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Smartphone,
                title: "Interface Responsiva",
                description: "Experiência fluida em qualquer dispositivo com .NET MAUI e Blazor.",
                color: "from-teal-500 to-blue-500"
              },
              {
                icon: Zap,
                title: "Performance Otimizada",
                description: "Sistema rápido e eficiente, desenvolvido com as melhores práticas de programação.",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-blue-200 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Tecnologias
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Modernas</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Desenvolvido com as tecnologias mais avançadas do mercado para garantir performance e confiabilidade.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: ".NET MAUI", desc: "Multiplataforma" },
              { name: "Blazor", desc: "Interface Moderna" },
              { name: "SQLite", desc: "Banco Local" },
              { name: "Google OAuth", desc: "Autenticação" },
              { name: "C#", desc: "Linguagem Principal" },
              { name: "Entity Framework", desc: "ORM Avançado" },
              { name: "Bootstrap", desc: "Design Responsivo" },
              { name: "Azure", desc: "Cloud Services" }
            ].map((tech, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">{tech.name}</h4>
                <p className="text-blue-300 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Por que escolher o
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> AdmBeachApp?</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Maior controle sobre as operações do quiosque",
                  "Segurança no acesso e armazenamento de dados",
                  "Acesso fácil de qualquer dispositivo compatível",
                  "Eficiência na gestão de estoque e vendas",
                  "Suporte técnico especializado incluído",
                  "Atualizações constantes e melhorias"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-blue-200 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-8 border border-blue-500/20">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                  <Users className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 text-sm">Desenvolvido por Especialistas</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Equipe Profissional</h3>
                <div className="space-y-4 text-left">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-blue-300 font-semibold">💡 Gerente do Projeto</p>
                    <p className="text-white">Marcelo Oliveira Arrebola</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-blue-300 font-semibold">💻 Desenvolvedor</p>
                    <p className="text-white">Julio Campos Machado</p>
                    <p className="text-blue-200 text-sm">Like Look Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Plano
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Profissional</span>
          </h2>
          <p className="text-xl text-blue-200 mb-12">
            Invista no futuro do seu negócio com uma solução completa e acessível.
          </p>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-white mb-2">R$ 60</div>
              <div className="text-blue-300 text-xl">/mês</div>
              <div className="text-blue-200 text-sm mt-2">Sem compromisso • Cancele quando quiser</div>
            </div>

            <div className="space-y-4 mb-8 text-left">
              {[
                "Sistema completo de gestão",
                "Suporte técnico incluído",
                "Atualizações automáticas",
                "Backup automático dos dados",
                "Interface responsiva",
                "Segurança Google OAuth"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-200">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={handleWhatsAppContact}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contratar Agora</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para Revolucionar seu Quiosque?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se aos empreendedores que já transformaram seus negócios com o AdmBeachApp. 
            Entre em contato agora e comece sua jornada rumo ao sucesso!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleWhatsAppContact}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </button>
            <button 
              onClick={handleGithubView}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center space-x-3"
            >
              <Github className="w-5 h-5" />
              <span>Ver Documentação</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">AdmBeachApp</h3>
              </div>
              <p className="text-blue-200 mb-4">
                A solução completa para gestão de quiosques de praia.
              </p>
              <p className="text-blue-300 text-sm">
                © 2024 Like Look Solutions. Todos os direitos reservados.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <p className="text-blue-200">WhatsApp: +55 11 97060-3441</p>
                <p className="text-blue-200">Desenvolvedor: Julio Campos Machado</p>
                <p className="text-blue-200">Gerente: Marcelo Oliveira Arrebola</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={handleGithubView}
                  className="block text-blue-200 hover:text-white transition-colors"
                >
                  Repositório GitHub
                </button>
                <button 
                  onClick={handleWhatsAppContact}
                  className="block text-blue-200 hover:text-white transition-colors"
                >
                  Suporte WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;