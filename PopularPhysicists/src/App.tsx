import './App.css'
import einstein from './assets/albert_einstein.jpg'
import newton from './assets/isaac_newton.jpg'
import tesla from './assets/nikola_tesla.jpeg'
import curie from './assets/pierre_curie.jpg'
import bohr from './assets/niels_bohr.jpg'
import feynman from './assets/richard_feynman.webp'
import { useState } from 'react'



function App() {
  type Physicist = "Einstein" | "Newton" | "Tesla" | "Curie" | "Bohr" | "Feynman" | "";

  const PhysicistInfo = {
    Einstein: {
      FullName: "Альберт Эйнштейн",
      Born: "14.03.1879",
      Died: "18.04.1955",
      Years: 76,
      Country: "Германская Империя",
      KnownFor: ["ОТО", "СТО", "Фотоэлектрический эффект", "E=mc^2", "E=hf"]
    },

    Newton: {
      FullName: "Исаак Ньютон",
      Born: "4.01.1643",
      Died: "31.03.1727",
      Years: 84,
      Country: "Англия",
      KnownFor: ["Механика", "Вселенное притяжение"]
    },

    Tesla: {
      FullName: "Никола Тесла",
      Born: "10.06.1856",
      Died: "7.01.1943",
      Years: 86,
      Country: "Австро-Венгерская Империя",
      KnownFor: ["Электричество", "Механика"]
    },

    Curie: {
      FullName: "Пьер Кюри",
      Born: "15.05.1859",
      Died: "19.04.1906",
      Years: 46,
      Country: "Франция",
      KnownFor: ["Открытие полониума и радия (с Мари Кюри)", "Открытие пьезоэлектричества"]
    },

    Bohr: {
      FullName: "Нильс Бор",
      Born: "7.10.1885",
      Died: "18.11.1962",
      Years: 77,
      Country: "Дания",
      KnownFor: ["Модель Бора", "Мангетон Бора", "Теорема Бора — ван Лёвен"]
    },

    Feynman: {
      FullName: "Ричард Фейнман",
      Born: "11.05.1918",
      Died: "15.02.1988",
      Years: 69,
      Country: "США",
      KnownFor: ["Манхэттенский проект", "Уравнение акустических волн", "Диаграммы Фейнмана"]
    }
  }


  const [currentPhysicist, setCurrentPhysicist] = useState<Physicist>("");

  const physicistInfo = currentPhysicist ? PhysicistInfo[currentPhysicist] : null;



  return (
    <>
      <svg id='dna-svg'
        viewBox="0 0 800 1360"
        xmlns="http://www.w3.org/2000/svg">
      
        <defs>
      
        <linearGradient id="front"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%">
      
        <stop offset="0%" stop-color="#6fe9ff"/>
        <stop offset="50%" stop-color="#c9ffff"/>
        <stop offset="100%" stop-color="#4acfff"/>
        
        </linearGradient>
        
        <linearGradient id="back"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%">
        
        <stop offset="0%" stop-color="#3fa3d1"/>
        <stop offset="50%" stop-color="#75dfff"/>
        <stop offset="100%" stop-color="#3fa3d1"/>
      
        </linearGradient>
        
        <filter id="glow">
        
        <feGaussianBlur stdDeviation="12" result="blur"/>
        
        <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
        </feMerge>
        
        </filter>
        
        </defs>
      
        {/* <!-- ===================================== -->
        <!-- ЗАДНИЕ СЕГМЕНТЫ -->
        <!-- ===================================== --> */}
        
        <path
        d="M310 0
        C500 120 500 220 310 340"
        stroke="url(#back)"
        stroke-width="42"
        stroke-linecap="round"
        fill="none"
        opacity="0.35"/>
      
        <path
        d="M490 340
        C300 460 300 560 490 680"
        stroke="url(#back)"
        stroke-width="42"
        stroke-linecap="round"
        fill="none"
        opacity="0.35"/>
        
        <path
        d="M310 680
        C500 800 500 900 310 1020"
        stroke="url(#back)"
        stroke-width="42"
        stroke-linecap="round"
        fill="none"
        opacity="0.35"/>
        
        <path
        d="M490 1020
        C300 1140 300 1240 490 1360"
        stroke="url(#back)"
        stroke-width="42"
        stroke-linecap="round"
        fill="none"
        opacity="0.35"/>
        
        {/* <!-- ===================================== -->
        <!-- ПЕРЕДНИЕ СЕГМЕНТЫ -->
        <!-- ===================================== --> */}
        
        <path
        d="M490 0
        C300 120 300 220 490 340"
        stroke="url(#front)"
        stroke-width="48"
        stroke-linecap="round"
        fill="none"
        filter="url(#glow)"/>
        
        <path
        d="M310 340
        C500 460 500 560 310 680"
        stroke="url(#front)"
        stroke-width="48"
        stroke-linecap="round"
        fill="none"
        filter="url(#glow)"/>
        
        <path
        d="M490 680
        C300 800 300 900 490 1020"
        stroke="url(#front)"
        stroke-width="48"
        stroke-linecap="round"
        fill="none"
        filter="url(#glow)"/>
        
        <path
        d="M310 1020
        C500 1140 500 1240 310 1360"
        stroke="url(#front)"
        stroke-width="48"
        stroke-linecap="round"
        fill="none"
        filter="url(#glow)"/>
        
        {/* <!-- ===================================== -->
        <!-- ПЕРЕМЫЧКИ -->
        <!-- ===================================== --> */}
        
        <g
        stroke="#bffcff"
        stroke-width="10"
        stroke-linecap="round">
        
        <line x1="340" y1="80" x2="460" y2="80"/>
        <line x1="290" y1="150" x2="510" y2="150"/>
        <line x1="260" y1="230" x2="540" y2="230"/>
        <line x1="300" y1="300" x2="500" y2="300"/>
        
        <line x1="500" y1="420" x2="300" y2="420"/>
        <line x1="540" y1="500" x2="260" y2="500"/>
        <line x1="510" y1="580" x2="290" y2="580"/>
        <line x1="460" y1="650" x2="340" y2="650"/>
        
        <line x1="340" y1="760" x2="460" y2="760"/>
        <line x1="290" y1="840" x2="510" y2="840"/>
        <line x1="260" y1="920" x2="540" y2="920"/>
        <line x1="300" y1="990" x2="500" y2="990"/>
        
        <line x1="500" y1="1100" x2="300" y2="1100"/>
        <line x1="540" y1="1180" x2="260" y2="1180"/>
        <line x1="510" y1="1260" x2="290" y2="1260"/>
        <line x1="460" y1="1330" x2="340" y2="1330"/>
        
        </g>
        
        {/* <!-- ===================================== -->
        <!-- БЛИКИ -->
        <!-- ===================================== --> */}
        
        <ellipse cx="490" cy="340"
        rx="28"
        ry="18"
        fill="#ffffff"
        opacity="0.55"/>
        
        <ellipse cx="310" cy="680"
        rx="28"
        ry="18"
        fill="#ffffff"
        opacity="0.55"/>
        
        <ellipse cx="490" cy="1020"
        rx="28"
        ry="18"
        fill="#ffffff"
        opacity="0.55"/>
      </svg>





      <svg id='bg-svg'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080">
        
        <defs>
        
        <radialGradient id="bg1"
        cx="50%"
        cy="50%"
        r="80%">
        
        <stop offset="0%" stop-color="#123f7c"/>
        <stop offset="45%" stop-color="#07162f"/>
        <stop offset="100%" stop-color="#01040d"/>
        
        </radialGradient>
        
        <radialGradient id="glow1">
        <stop offset="0%" stop-color="#35d6ff"/>
        <stop offset="100%" stop-color="transparent"/>
        </radialGradient>
        
        <radialGradient id="glow2">
        <stop offset="0%" stop-color="#2d6cff"/>
        <stop offset="100%" stop-color="transparent"/>
        </radialGradient>
        
        <filter id="blur50">
        <feGaussianBlur stdDeviation="50"/>
        </filter>
        
        <filter id="blur150">
        <feGaussianBlur stdDeviation="150"/>
        </filter>
        
        </defs>
        
        {/* <!-- фон --> */}
        
        <rect
        width="1920"
        height="1080"
        fill="url(#bg1)"/>
        
        {/* <!-- большие засветки --> */}
        
        <circle
        cx="450"
        cy="350"
        r="250"
        fill="url(#glow1)"
        filter="url(#blur150)"
        opacity=".6"/>
        
        <circle
        cx="1450"
        cy="700"
        r="320"
        fill="url(#glow2)"
        filter="url(#blur150)"
        opacity=".4"/>
        
        {/* <!-- сетка --> */}
        
        <g opacity=".05">
        
        <path d="M0 100 H1920" stroke="#7fe8ff"/>
        <path d="M0 200 H1920" stroke="#7fe8ff"/>
        <path d="M0 300 H1920" stroke="#7fe8ff"/>
        <path d="M0 400 H1920" stroke="#7fe8ff"/>
        <path d="M0 500 H1920" stroke="#7fe8ff"/>
        <path d="M0 600 H1920" stroke="#7fe8ff"/>
        <path d="M0 700 H1920" stroke="#7fe8ff"/>
        <path d="M0 800 H1920" stroke="#7fe8ff"/>
        <path d="M0 900 H1920" stroke="#7fe8ff"/>
        <path d="M0 1000 H1920" stroke="#7fe8ff"/>
        
        <path d="M100 0 V1080" stroke="#7fe8ff"/>
        <path d="M300 0 V1080" stroke="#7fe8ff"/>
        <path d="M500 0 V1080" stroke="#7fe8ff"/>
        <path d="M700 0 V1080" stroke="#7fe8ff"/>
        <path d="M900 0 V1080" stroke="#7fe8ff"/>
        <path d="M1100 0 V1080" stroke="#7fe8ff"/>
        <path d="M1300 0 V1080" stroke="#7fe8ff"/>
        <path d="M1500 0 V1080" stroke="#7fe8ff"/>
        <path d="M1700 0 V1080" stroke="#7fe8ff"/>
        
        </g>
        
        {/* <!-- частицы --> */}
        
        <g fill="#cfffff">
        
        <circle cx="110" cy="120" r="2"/>
        <circle cx="230" cy="350" r="1"/>
        <circle cx="420" cy="900" r="2"/>
        <circle cx="530" cy="500" r="1.5"/>
        <circle cx="720" cy="300" r="2"/>
        <circle cx="900" cy="200" r="1"/>
        <circle cx="1100" cy="700" r="2"/>
        <circle cx="1250" cy="280" r="1.5"/>
        <circle cx="1380" cy="520" r="2"/>
        <circle cx="1550" cy="350" r="1"/>
        <circle cx="1700" cy="850" r="2"/>
        <circle cx="1810" cy="220" r="1"/>
        
        <circle cx="600" cy="950" r="2"/>
        <circle cx="1000" cy="980" r="2"/>
        <circle cx="1600" cy="150" r="2"/>
        
        </g>
        
        {/* <!-- научные формулы --> */}
        
        <g
        fill="#8cefff"
        opacity=".06"
        font-size="58"
        font-family="Arial">
        
        <text x="120" y="200">
        E = mc²
        </text>
        
        <text x="900" y="180">
        F = ma
        </text>
        
        <text x="1400" y="320">
        λ = h/p
        </text>
        
        <text x="250" y="600">
        ΔxΔp ≥ ħ/2
        </text>
        
        <text x="950" y="780">
        ψ(x,t)
        </text>
        
        <text x="1450" y="920">
        ∇²φ = 0
        </text>
        
        <text x="300" y="950">
        PV = nRT
        </text>
        
        </g>
        
        {/* <!-- диагональные световые лучи --> */}
        
        <g opacity=".08">
        
        <path
        d="M-200 0 L700 1080"
        stroke="#69dfff"
        stroke-width="6"/>
        
        <path
        d="M200 0 L1100 1080"
        stroke="#69dfff"
        stroke-width="4"/>
        
        <path
        d="M1000 0 L1900 1080"
        stroke="#69dfff"
        stroke-width="5"/>
        
        </g>
        
        {/* <!-- технологические круги --> */}
        
        <g
        stroke="#7be8ff"
        fill="none"
        opacity=".08">
        
        <circle
        cx="1550"
        cy="250"
        r="180"/>
        
        <circle
        cx="1550"
        cy="250"
        r="250"/>
        
        <circle
        cx="300"
        cy="850"
        r="220"/>
        
        <circle
        cx="300"
        cy="850"
        r="300"/>
        </g>
      </svg>





      <div id='window'>
        <div id='title'>
          <span id='dna-word'>ДНК</span>
          <span>великих открытий</span>
        </div>


        {physicistInfo ? (
          <div id="scientist-info">
            <h2>{physicistInfo.FullName}</h2>

            <p><strong>Дата рождения:</strong> {physicistInfo.Born}</p>

            <p><strong>Дата смерти:</strong> {physicistInfo.Died}</p>

            <p><strong>Возраст:</strong> {physicistInfo.Years}</p>

            <p><strong>Страна:</strong> {physicistInfo.Country}</p>

            <div>
              <strong>Известен благодаря:</strong>
              <ul>
                {physicistInfo.KnownFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <button id='clear-button' onClick={() => setCurrentPhysicist("")}>Clear</button>
          </div>
        ) : (
          <>
            <div id='text'>Нажмите на учёного в цепочке ДНК, чтобы узнать его биографию и вклад в науку.</div>

            <div id='select-scientist'>
              <svg id='general-icon' fill="#0d428a" width="128px" height="128px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <title>avatar-solid</title>
                <path d="M30.61,24.52a17.16,17.16,0,0,0-25.22,0,1.51,1.51,0,0,0-.39,1v6A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5v-6A1.51,1.51,0,0,0,30.61,24.52Z"></path><circle cx="18" cy="10" r="7"></circle>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
              </svg>
              <div>Выберите учёного слева</div>
            </div>
          </>
        )}
        
      </div>



      <div id='physicists'>
        <div className='physicist' id='einstein' onClick={() => setCurrentPhysicist("Einstein")}>
          <img src={einstein} alt='einstein' />
          <div>Эйнштейн</div>
        </div>

        <div className='physicist' id='newton' onClick={() => setCurrentPhysicist("Newton")}>
          <img src={newton} alt='newton' />
          <div>Ньютон</div>
        </div>

        <div className='physicist' id='tesla' onClick={() => setCurrentPhysicist("Tesla")}>
          <img src={tesla} alt='tesla' />
          <div>Тесла</div>
        </div>

        <div className='physicist' id='curie' onClick={() => setCurrentPhysicist("Curie")}>
          <img src={curie} alt='curie' />
          <div>Кюри</div>
        </div>

        <div className='physicist' id='bohr' onClick={() => setCurrentPhysicist("Bohr")}>
          <img src={bohr} alt='bohr' />
          <div>Бор</div>
        </div>

        <div className='physicist' id='feynman' onClick={() => setCurrentPhysicist("Feynman")}>
          <img src={feynman} alt='feynman' />
          <div>Фейнман</div>
        </div>
      </div>
    </>
  )
}

export default App
