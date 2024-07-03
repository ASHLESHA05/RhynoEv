import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bike from '../assets/images/img.png';
import bike1 from '../assets/images/black.png';
import bike2 from '../assets/images/red.png';
import bike3 from '../assets/images/black.png';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import '../styles/home.css';
import AboutUs from './AboutUs.js';
import { useScroll } from '../context/ScrollContext';
import { useNavigate } from 'react-router-dom';
import usp from '../components/USP.js';
import RentalOptions from './rentals.js';
import google from '../assets/images/google.png';
import apple from '../assets/images/apple.jpeg';
import red from '../assets/images/red.png';
import red_1 from '../assets/images/red_1.png';
import red_cross from '../assets/images/red_cross.png';
import red_cross_1 from '../assets/images/red_cross_1.png';
import black from '../assets/images/black.png';
import black_1 from '../assets/images/black_1.png';
import black_cross from '../assets/images/black_cross.png';
import black_cross_1 from '../assets/images/black_cross_1.png';
import blue from '../assets/images/blue.png';
import img from '../assets/images/img.png';
import blue_1 from '../assets/images/blue_1.png';
import golden from '../assets/images/golden.png';
import golden_1 from '../assets/images/golden_1.png';
import grp from '../assets/images/grp.png';

const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const phrases = ['style', 'Elegance', 'Minimalism', 'Comfort'];
  const { aboutUsRef } = useScroll();
  const { rentalref } = useScroll();
  const swiperef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showIntroSlider, setShowIntroSlider] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prev => {
        if (prev === phrases[index]) {
          clearInterval(interval);
          setTimeout(() => {
            setIndex(prevIndex => (prevIndex + 1) % phrases.length);
            setText('');
          }, 1000);
          return prev;
        }
        return phrases[index].substring(0, prev.length + 1);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [text, index, phrases]);

  useEffect(() => {
    const handleMouseOver = () => {
      if (swiperef.current && swiperef.current.swiper) {
        swiperef.current.swiper.autoplay.stop();
      }
    };

    const handleMouseOut = () => {
      if (swiperef.current && swiperef.current.swiper) {
        swiperef.current.swiper.autoplay.start();
      }
    };

    const swiperContainer = swiperef.current;
    if (swiperContainer) {
      swiperContainer.addEventListener('mouseover', handleMouseOver);
      swiperContainer.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (swiperContainer) {
        swiperContainer.removeEventListener('mouseover', handleMouseOver);
        swiperContainer.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);

  // Hide the intro slider after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroSlider(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntroSlider && (
        <Swiper
          effect={'fade'}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow]}
          style={{
            width: '100%',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          }}
        >
          <SwiperSlide>
            <img src="/favicon.png" alt="Intro Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/favicon.png" alt="Intro Image 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/favicon.png" alt="Intro Image 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </SwiperSlide>
        </Swiper>
      )}

      {!showIntroSlider && (
        <div className="home-page">
          <button type="button" className="btn btn-success" id="preBook" style={{ color: 'black', maxWidth: '120%', fontWeight: 'bold' }} onClick={() => { navigate('/products') }}>Pre Book?</button>
          <div className="fixed-text-container" style={{ marginTop: '10px' }}>
            <div className="rental-app-banner">
              <span>Get our rental App</span>
              <a href="https://play.google.com/store"><img src={google} alt="Download on Android" className="app-icon" /></a>
              <a href='https://www.apple.com/app-store/'><img src={apple} alt="Download on Apple" className="app-icon" /></a>
            </div>
            <h1 className="static-text">Let's Elevate Your Ride Experience With Rhyno" - Where Superiority Meets</h1>
            <h1 className="dynamic-text">
              {text}
              <span className="blinking-cursor">|</span>
            </h1>
          </div>

          <div className="container-sm" style={{ marginTop: '-100px' }}>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <Swiper
                  ref={swiperef}
                  effect={'fade'}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={'auto'}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 20,
                    depth: 100,
                    modifier: 10.5,
                  }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ el: '.swiper-pagination', clickable: true }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                  }}
                  modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                  className="swiper-container"
                >
                  {[
  red,
  red_1,
  red_cross,
  red_cross_1,
  black,
  black_1,
  black_cross,
  black_cross_1,
  blue,
  img,
  blue_1,
  golden,
  golden_1,
  grp
].map((src, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={src}
                        alt={`bike_${i + 1}`}
                        className="border rounded"
                        style={{ width: '100%', height: 'auto', marginTop: '110px' }}
                      />
                    </SwiperSlide>
                  ))}
                  <div className="slide-controller">
                    <div className="swiper-button-prev slider-arrow">
                      <ion-icon name="arrow-back"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                      <ion-icon name="arrow-forward"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>

          <div ref={aboutUsRef} style={{ maxWidth: '95%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AboutUs />
          </div>

          <div className="container1" style={{ maxWidth: '95%', maxHeight: '55%' }}>
            <div className="showupimg">
              <h1 className='bikeheading'>Enhance your ride</h1>
              <img src={bike} alt="bike" style={{ maxWidth: '95%', height: 'auto' }} />
            </div>
          </div>

          <div
            className='container-md'
            style={{
              border: '1px solid white',
              backgroundColor: '#424242',
              marginTop: '50px',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.1)',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            <h1>Our Products</h1>
            <div className="App" style={{ display: 'block' }}>
              <div className='container-md' style={{ backgroundColor: '#4c4a4a', borderRadius: '10px' }}>
                <h2>SE03 Lite</h2>
                <div className="container-sm">
                  <img src={bike1} style={{ maxWidth: '55%', maxHeight: '55%' }} />
                  <p style={{ fontSize: '0.6em' }}>
                    Indulge in the perfect harmony of power and range with this Rhyno.
                    Offering an exhilarating experience with its robust 2000W motor, it
                    ensures a thrilling ride while still delivering an impressive 80-100km
                    range on a single charge. Like its counterparts, this machine features
                    the safety assurance of a fire-safe advanced LFP battery, along with
                    the comprehensive benefits of owning a Rhyno. Boasting a formidable
                    combination of a 2000W motor and a 2.7kWh battery, this beast is ready
                    to roar on the roads, providing an electrifying journey at every turn.
                  </p>
                </div>
                <p className='click-here' onClick={() => { navigate('/products/SE03_lite') }} style={{ display: 'block' }}>Click here to get more details</p>
              </div>

              <div className='container-md' style={{ backgroundColor: '#4c4a4a', borderRadius: '10px' }}>
                <div className="container-sm">
                  <h2>SE03</h2>
                  <img src={bike1} style={{ maxWidth: '55%', height: 'auto' }} />
                  <p style={{ fontSize: '0.6em' }}>
                    Indulge in the perfect harmony of power and range with this Rhyno.
                    Offering an exhilarating experience with its robust 2000W motor, it
                    ensures a thrilling ride while still delivering an impressive 80-100km
                    range on a single charge. Like its counterparts, this machine features
                    the safety assurance of a fire-safe advanced LFP battery, along with
                    the comprehensive benefits of owning a Rhyno. Boasting a formidable
                    combination of a 2000W motor and a 2.7kWh battery, this beast is ready
                    to roar on the roads, providing an electrifying journey at every turn.
                  </p>
                </div>
                <p className='click-here' onClick={() => { navigate('/products/SE03') }}>Click here to get more details</p>
              </div>

              <div className='container-md' style={{ backgroundColor: '#4c4a4a', borderRadius: '10px' }}>
                <div className="container-sm" style={{ maxWidth: '100%' }}>
                  <h2>SE03 Max</h2>
                  <img src={bike1} style={{ maxWidth: '55%', height: 'auto' }} />
                  <p style={{ fontSize: '0.6em' }}>
                    This Rhyno is tuned for long drives and no thrills. Like all other
                    variants, this machine comes with a fire-safe advanced LFP battery and
                    all the other benefits of owning a Rhyno, along with a perfect blend of
                    battery capacity and motor power to provide up to 150 km range on a
                    single charge. While it may not provide a thrilling ride, it promises a
                    dependable and unwavering presence on the long stretches.
                  </p>
                </div>
                <p className='click-here' onClick={() => { navigate('/products/SE03_max') }}>Click here to get more details</p>
              </div>

            </div>
          </div>

          <div className="container-md " style={{ marginTop: '100px' }}>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <Swiper
                  ref={swiperef}
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={2}
                  coverflowEffect={{
                    rotate: -40,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                    zoom: true
                  }}
                  pagination={{ el: '.swiper-pagination', clickable: true }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                  }}
                  modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                  className="swiper-container"
                >
                  {usp.map((src, i) => (
                    <SwiperSlide key={i}>
                      {src}
                    </SwiperSlide>
                  ))}
                  <div className="slide-controller" style={{ marginTop: '-30px' }}>
                    <div className="swiper-button-prev slider-arrow">
                      <ion-icon name="arrow-back"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                      <ion-icon name="arrow-forward"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}

      <div ref={rentalref}>
        <RentalOptions />
      </div>
    </>
  );
}

export default Home;
