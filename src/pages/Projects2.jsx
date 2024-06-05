import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './elements/ProjectsCardsTemplate';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const App = () => (
  <div className="flex flex-col justify-center items-center min-h-screen bg-white">
    <div className="w-full overflow-hidden">
      <svg id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 mt-[-10%]">
        <path d="M 0,400 L 0,150 C 110.17857142857142,170.92857142857144 220.35714285714283,191.85714285714286 343,171 C 465.64285714285717,150.14285714285714 600.7500000000001,87.50000000000001 726,89 C 851.2499999999999,90.49999999999999 966.6428571428571,156.14285714285714 1084,177 C 1201.357142857143,197.85714285714286 1320.6785714285716,173.92857142857144 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#0A0436" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
      </svg>
    </div> 
    <div className="text-center text-black text-6xl fade-in-scale">
      <div className="relative flex flex-col justify-center items-center">
        <div className="inline-block whitespace-nowrap absolute mb-10 text-[#0A0436] opacity-25 blur-[3px] text-[125%] font-bold">
          My Projects
        </div>
        <div className="relative text-[#3b83bd] text-6xl font-bold">
          My Projects
        </div>
      </div>
    </div>
    <div className="app text-center p-6 mt-5 fade-in-scale">
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
            image="../../../fotoportfolio.png"
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
        <SwiperSlide className='w-auto'>
          <Card
            image="../../../fotoinstagram.png"
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
            image="../../../fotoblackjack.png"
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
      </Swiper>
    </div>
  </div>
);

export default App;
