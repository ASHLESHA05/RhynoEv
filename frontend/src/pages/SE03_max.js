import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import '../styles/product1.css';

import red from '../assets/images/red.png';
import red_1 from '../assets/images/red_1.png';
import red_cross from '../assets/images/red_cross.png';
import red_cross_1 from '../assets/images/red_cross_1.png';

import black from '../assets/images/black.png';
import black_1 from '../assets/images/black_1.png';
import black_cross from '../assets/images/black_cross.png';
import black_cross_1 from '../assets/images/black_cross_1.png';
import img from '../assets/images/img.png';

import blue from '../assets/images/blue.png';
import blue_1 from '../assets/images/blue_1.png';

import golden from '../assets/images/golden.png';
import golden_1 from '../assets/images/golden_1.png';
import grp from '../assets/images/grp.png';

import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import bike1 from '../assets/images/black.png';

const SpecificationsContainer = styled.div`
    max-width: 1000px;
    margin: 100px auto;
`;

const SpecSection = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 20px;
`;

const SpecTitle = styled.h2`
    font-size: 24px;
    color: ;
    margin-bottom: 10px;
`;

const SpecList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
`;

const SpecItem = styled.div`
    padding: 10px;
`;

const SpecLabel = styled.div`
    font-weight: bold;
    color: #555;
`;

const SpecValue = styled.div`
    margin-top: 5px;
    line-height: 1.4;
    color: #777;
`;

const RhynoSpecs = () => {
    window.scrollTo({ top: 0 });
    return (
        <SpecificationsContainer>
            <SpecSection>
                <SpecTitle>Rhyno SE03 Lite Specifications</SpecTitle>
                <SpecList>
                    <SpecItem>
                        <SpecLabel>Battery</SpecLabel>
                        <SpecValue>2.7 kWh</SpecValue>
                    </SpecItem>
                    <SpecItem>
                        <SpecLabel>Battery features</SpecLabel>
                        <SpecValue>
                            LFP with 1500 cycles<br />
                            Active Balancing<br />
                            Waterproof (IP67)
                        </SpecValue>
                    </SpecItem>
                    <SpecItem>
                        <SpecLabel>Battery warranty</SpecLabel>
                        <SpecValue>3 Years</SpecValue>
                    </SpecItem>
                    <SpecItem>
                        <SpecLabel>Charging time</SpecLabel>
                        <SpecValue>4 hours (12A)</SpecValue>
                    </SpecItem>
                    <SpecItem>
                        <SpecLabel>Motor</SpecLabel>
                        <SpecValue>2000W</SpecValue>
                    </SpecItem>
                    <SpecItem>
                        <SpecLabel>Max speed</SpecLabel>
                        <SpecValue>65 km/h</SpecValue>
                    </SpecItem>
                    <SpecItem>
                        <SpecLabel>Warranty on electronics</SpecLabel>
                        <SpecValue>1 year</SpecValue>
                    </SpecItem>
                    <SpecItem>
                        <SpecLabel>Max range (@30 km/h)</SpecLabel>
                        <SpecValue>120 km</SpecValue>
                    </SpecItem>
                    <SpecItem>
                        <SpecLabel>Max range (@45 km/h)</SpecLabel>
                        <SpecValue>100 km</SpecValue>
                    </SpecItem>
                    <SpecItem>
                        <SpecLabel>Max range (@full speed)</SpecLabel>
                        <SpecValue>80 km</SpecValue>
                    </SpecItem>
                    <SpecItem>
                        <SpecLabel>Other key benefits</SpecLabel>
                        <SpecValue>
                            Fire-safe battery<br />
                            Range prediction<br />
                            Comfortable ride<br />
                            Stable and safe
                        </SpecValue>
                    </SpecItem>
                </SpecList>
            </SpecSection>
        </SpecificationsContainer>
    );
};

const SE03_lite = () => {
    const navigate=useNavigate()
    const colors = ['red', 'black', 'blue', '#FFD700'];
    const images = [
        [red, red_1, red_cross, red_cross_1, grp],
        [black, black_1, black_cross, black_cross_1, grp],
        [blue, blue_1, grp],
        [golden, golden_1, grp]
    ];
    const [imglist, setimglist] = useState([red, red_1, red_cross, red_cross_1, grp]);

    function handleclick(index) {
        setimglist(images[index]);
    }

    return (
        <>
            <h1 style={{ margin: '20px' }}>SE03 Max</h1>
            <div className="App">
                <div className="product-container">
                    <Swiper
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
                            modifier: 1.5,
                        }}
                        autoplay={{
                            delay: 4000,
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
                        {imglist.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div style={{ overflow: 'visible' }}>
                                    <ReactImageMagnify
                                        {...{
                                            smallImage: {
                                                alt: 'Product image',
                                                src: src,
                                                isFluidWidth: true,
                                                width: 600,
                                                height: 600,
                                            },
                                            largeImage: {
                                                src: src,
                                                isFluidWidth: true,
                                                width: 1200,
                                                height: 1200,
                                                overflow: true
                                            },
                                            isHintEnabled: true,
                                            enlargedImagePosition: "over",
                                            lensStyle: { backgroundColor: 'rgba(0,0,0,0.6)' },
                                             // Ensure the zoomed image appears above other elements
                                            enlargedImageContainerDimensions: {
                                                width: '600px',
                                                height: '600px',
                                            },
                                            enlargedImageContainerStyle: {
                                                zIndex: 20,
                                                overflow: 'visible',
                                            }
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="slide-controller">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow" style={{marginRight:'-10px'}}>
                                <ion-icon name="arrow-forward"></ion-icon>
                            </div>
                            <div className="swiper-pagination">df</div>
                        </div>
                    </Swiper>
                </div>
                <div className="container-sm" style={{ maxWidth: '70%' }}>
                    <p style={{ fontSize: '1em' }}>
                    This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches. 
                    </p>
                </div>
            </div>

            <div className="color-buttons-container">
                {colors.map((color, index) => (
                    <button
                        key={index}
                        className='color-button'
                        style={{ backgroundColor: color }}
                        onClick={() => handleclick(index)}
                    />
                ))}
            </div>
            <div className="buy-buttons-container">
                <button id="prebook">Pre-book</button>
                <a id="testDrive">book testDrive?</a>
            </div>
            <RhynoSpecs />
            
            <h1>Chheckout our other products</h1>
            <div className="container" style={{display:'flex'}}>
                <div className="product-container">
            <h2>SE03 Lite</h2>
            <img src={bike1} style={{ maxWidth: '95%', height: 'auto' }} />
            <p style={{ fontSize: '0.6em' }}>
            Indulge in the perfect harmony of power and range with this Rhyno.
                        Offering an exhilarating experience with its robust 1500W motor, it
                        ensures a thrilling ride while still delivering an impressive 70-100km
                        range on a single charge. Like its counterparts, this machine features
                        the safety assurance of a fire-safe advanced LFP battery, along with
                        the comprehensive benefits of owning a Rhyno. Boasting a formidable
                        combination of a 1500W motor and a 1.7kWh battery, this beast is ready
                        to roar on the roads, providing an electrifying journey at every turn.
            </p>
            <p className ='click-here'  onClick={()=>{navigate('/products/SE03_lite')}}>Click here to get more details</p>
          </div>
          <div className="product-container" >
            <h2>SE03</h2>
            <img src={bike1} style={{ maxWidth: '95%', height: 'auto' }} />
            <p style={{ fontSize: '0.6em' }}>
            Indulge in the perfect harmony of power and range with this Rhyno.
              Offering an exhilarating experience with its robust 1500W motor, it
              ensures a thrilling ride while still delivering an impressive 80-100km
              range on a single charge. Like its counterparts, this machine features
              the safety assurance of a fire-safe advanced LFP battery, along with
              the comprehensive benefits of owning a Rhyno. Boasting a formidable
              combination of a 1500W motor and a 2.7kWh battery, this beast is ready
              to roar on the roads, providing an electrifying journey at every turn.
            </p>
            <p className="click-here" onClick={()=>{navigate('/products/SE03')}}>Click here to get more details</p>
          </div>
            </div>

        </>
    );
};

export default SE03_lite;
