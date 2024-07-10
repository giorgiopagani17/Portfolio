import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './ProjectsCardsTemplate.jsx';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Slider = () => (
  <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    initialSlide={1}
    className="p-2.5 pb-10"
  >
    <SwiperSlide className='w-auto'>
      <Card
        image="/fotoemailsender.webp"
        repository="https://github.com/giorgiopagani17/instagram-project-work-py"
        tech1="WordPress"
        techimage1="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/2048px-WordPress_blue_logo.svg.png"
        tech2="Python"
        techimage2="https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png"
        tech3="Linux"
        techimage3="https://w7.pngwing.com/pngs/1013/132/png-transparent-linux-distribution-tux-free-software-linux-kernel-linux-logo-bird-linux-thumbnail.png"
        title="Email Sender From Csv"
        content={
          <div>
            <p>
              Ho creato una web app (hostata su Linux) utilizzata per inviare email con le credenziali <span className="inline-block whitespace-nowrap">Wi-Fi</span> agli utenti presenti in un file CSV. Inoltre ho aggiunto al sito WordPress dell'azienda una 
              <a href="https://www.be-tech.biz/wi-fi/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank"> pagina tutorial</a> per l'accesso alla rete.
            </p>
          </div>
        }      
      />
    </SwiperSlide>
    <SwiperSlide className='w-auto'>
      <Card
        image="/fotoinstagram.webp"
        repository="https://github.com/giorgiopagani17/instagram-project-work-py"
        tech1="React"
        techimage1="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        tech2="Python"
        techimage2="https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png"
        tech3="Bootstrap"
        techimage3="https://iconape.com/wp-content/png_logo_vector/bootstrap-framework-logo.png"
        title="Instagram Web"
        content="Ho riprodotto l'applicazione web di Instagram usando React, Python, Php e Bootstrap. Questo progetto comprende le funzioni di Login e Register, Creazione Post, Commenti, Like, Follow e Change delle foto profilo."
      />
    </SwiperSlide>
    <SwiperSlide className='w-auto'>
      <Card
        image="/fotoblackjack.webp"
        repository="https://github.com/giorgiopagani17/blackjack"
        tech1="Html"
        techimage1="https://cdn-icons-png.flaticon.com/512/732/732212.png"
        tech2="Css"
        techimage2="https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png"
        tech3="JavaScript"
        techimage3="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"
        title="BlackJack Online"
        content="Ho ricreato il gioco online del BlackJack usando Html, Css e Javascript. Ovviamente nel progetto non si possono fare scommesse reali ma è solo a scopo di divertimento. Il Dealer segue le regole del vero Blackjack."
      />
    </SwiperSlide>
    <SwiperSlide className='w-auto'>
      <Card
        image="/fotoportfolio.webp"
        repository="https://github.com/giorgiopagani17/Portfolio"
        tech1="React"
        techimage1="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        tech2="Tailwind"
        techimage2="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
        tech3="Vite"
        techimage3="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png"
        title="Portfolio Personale"
        content="Questo è il mio Portfolio personale, l'ho creato utilizzando React, Tailwind e Vitejs. Nel Progetto potete trovare una descrizione di me, di quali sono le mie skills e troverete anche una sezione per contattarmi."
      />
    </SwiperSlide>
  </Swiper>
);

export default Slider;
