import { useState } from 'react';
import {
  ArrowRight, Menu, X, Truck, Bus, CarFront, Warehouse,
  ShieldCheck, PackageCheck, Clock3, MapPin, Instagram,
  MessageCircle, ChevronRight, CheckCircle2
} from 'lucide-react';

const whatsappLink = 'https://wa.me/?text=' + encodeURIComponent('Olá! Gostaria de solicitar um orçamento com a RIMK Pneus e Paletes.');
const instagramLink = 'https://www.instagram.com/';

const categories = [
  {
    icon: Truck,
    title: 'Pneus para caminhões',
    text: 'Desempenho e resistência para encarar longas jornadas.',
    image: 'https://images.unsplash.com/photo-1650212607236-0e5b1684e5f1?auto=format&fit=crop&w=1000&q=85',
    alt: 'Pneu de caminhão em close'
  },
  {
    icon: CarFront,
    title: 'Pneus para caminhonetes',
    text: 'Opções para trabalho, estrada e uso diário.',
    image: 'https://images.unsplash.com/photo-1560707839-8b78099ae077?auto=format&fit=crop&w=1000&q=85',
    alt: 'Pneu e roda de veículo'
  },
  {
    icon: Bus,
    title: 'Pneus para ônibus e vans',
    text: 'Soluções para frotas e transporte de passageiros.',
    image: 'https://images.unsplash.com/photo-1739950163040-0080f40dcdb5?auto=format&fit=crop&w=1000&q=85',
    alt: 'Pneu de ônibus em close'
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span>Atendimento comercial para sua empresa</span>
          <a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={14} /> Solicite um orçamento</a>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="RIMK início" onClick={closeMenu}>
            <span className="brand-mark">R</span>
            <span className="brand-copy"><strong>RIMK</strong><small>PNEUS <i>&</i> PALETES</small></span>
          </a>
          <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#pneus" onClick={closeMenu}>Pneus</a>
            <a href="#paletes" onClick={closeMenu}>Paletes</a>
            <a href="#sobre" onClick={closeMenu}>A RIMK</a>
            <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer" onClick={closeMenu}>Fale com a equipe <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="eyebrow"><span /> SOLUÇÕES PARA QUEM MOVE O BRASIL</div>
            <h1>Seu negócio em movimento. <em>Seu estoque preparado.</em></h1>
            <p>Pneus para veículos comerciais e paletes para sua operação. Conte com a RIMK para encontrar as soluções que sua empresa precisa.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={18} /></a>
              <a className="btn btn-ghost" href="#pneus">Conheça nossos produtos</a>
            </div>
            <div className="hero-note"><ShieldCheck size={18} /> Atendimento comercial com foco na sua necessidade</div>
          </div>
          <div className="hero-bottom container">
            <span>RIMK PNEUS E PALETES</span><span className="hero-line" /><span>PARCERIA QUE MOVIMENTA</span>
          </div>
        </section>

        <section className="intro section-pad" id="sobre">
          <div className="container intro-grid">
            <div>
              <div className="section-kicker">SOBRE A RIMK</div>
              <h2>Mais do que produtos.<br /><em>Parceria para sua operação.</em></h2>
            </div>
            <div className="intro-copy">
              <p>A RIMK reúne soluções em pneus e paletes para atender empresas, transportadores e operações que precisam de qualidade, praticidade e confiança na hora de comprar.</p>
              <p>Nosso objetivo é facilitar sua rotina com atendimento próximo e opções alinhadas à necessidade do seu negócio.</p>
              <a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer">Converse com nossa equipe <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="products section-pad" id="pneus">
          <div className="container">
            <div className="section-heading">
              <div><div className="section-kicker">LINHA DE PRODUTOS</div><h2>Pneus para cada <em>trajeto.</em></h2></div>
              <p>Encontre opções para diferentes tipos de veículos e aplicações comerciais.</p>
            </div>
            <div className="category-grid">
              {categories.map(({ icon: Icon, title, text }, index) => (
                <article className="category-card" key={title}>
                  <div className="category-photo">
                    <img src={categories[index].image} alt={categories[index].alt} loading="lazy" />
                    <span className="category-number">0{index + 1}</span>
                    <span className="category-photo-icon"><Icon size={22} strokeWidth={1.8} /></span>
                  </div>
                  <div className="category-card-copy">
                    <h3>{title}</h3><p>{text}</p>
                    <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label={'Consultar ' + title}>Consultar disponibilidade <ChevronRight size={17} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pallet-section section-pad" id="paletes">
          <div className="container pallet-grid">
            <div className="pallet-photo">
              <img src="https://images.unsplash.com/photo-1739204618173-3e89def7140f?auto=format&fit=crop&w=1200&q=85" alt="Estrutura de armazenagem e paletes em ambiente logístico" loading="lazy" />
              <div className="photo-tag"><Warehouse size={18} /> LOGÍSTICA E ARMAZENAGEM</div>
            </div>
            <div className="pallet-copy">
              <div className="section-kicker">SOLUÇÕES EM PALETES</div>
              <h2>Organização e eficiência para <em>sua logística.</em></h2>
              <p>Paletes para apoiar o armazenamento, a movimentação e a organização de mercadorias. Consulte nossa equipe para encontrar a opção adequada à sua operação.</p>
              <ul>
                <li><CheckCircle2 size={18} /> Soluções para diferentes necessidades</li>
                <li><CheckCircle2 size={18} /> Atendimento para empresas e operações</li>
                <li><CheckCircle2 size={18} /> Orçamento rápido e personalizado</li>
              </ul>
              <a className="btn btn-dark" href={whatsappLink} target="_blank" rel="noreferrer">Consultar paletes <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="why section-pad">
          <div className="container">
            <div className="section-kicker">POR QUE ESCOLHER A RIMK</div>
            <div className="why-grid">
              <div><PackageCheck /><h3>Portfólio versátil</h3><p>Pneus e paletes em um só lugar para facilitar suas compras.</p></div>
              <div><MessageCircle /><h3>Atendimento próximo</h3><p>Uma equipe pronta para entender sua necessidade e orientar sua consulta.</p></div>
              <div><Clock3 /><h3>Agilidade no orçamento</h3><p>Entre em contato e consulte disponibilidade e condições comerciais.</p></div>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contato">
          <div className="container contact-inner">
            <div><div className="section-kicker">VAMOS CONVERSAR?</div><h2>Conte com a RIMK para <em>seguir em frente.</em></h2><p>Fale com nossa equipe e solicite um orçamento de pneus ou paletes.</p></div>
            <a className="btn btn-primary contact-btn" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Falar pelo WhatsApp <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <a className="brand brand-footer" href="#inicio"><span className="brand-mark">R</span><span className="brand-copy"><strong>RIMK</strong><small>PNEUS <i>&</i> PALETES</small></span></a>
          <p>Soluções que acompanham o ritmo do seu negócio.</p>
          <div className="footer-social"><a href={instagramLink} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} RIMK Pneus e Paletes. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div>
      </footer>
    </div>
  );
}

export default App;