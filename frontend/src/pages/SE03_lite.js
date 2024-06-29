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

import blue from '../assets/images/blue.png';
import blue_1 from '../assets/images/blue_1.png';

import golden from '../assets/images/golden.png';
import golden_1 from '../assets/images/golden_1.png';
import grp from '../assets/images/grp.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import bike1 from '../assets/images/black.png';
import { useNavigate } from "react-router-dom";
import { Spec, SE03Lite, SE03, SE03Max } from '../components/compare.js';

const RhynoSpecs = () => {
    window.scrollTo({ top: 0 });

    return (
        <div className="specifications-container">
            <div className="spec-section">
                <h2 className="spec-title">Rhyno SE03 Lite Specifications</h2>
                <div className="spec-list">
                    <div className="spec-item">
                        <div className="spec-label">Battery</div>
                        <div className="spec-value">1.8 kWh</div>
                    </div>
                    <div className="spec-item">
                        <div className="spec-label">Battery features</div>
                        <div className="spec-value">
                            LFP with 1500 cycles<br />
                            Active Balancing<br />
                            Waterproof (IP67)
                        </div>
                    </div>
                    <div className="spec-item">
                        <div className="spec-label">Battery warranty</div>
                        <div className="spec-value">3 Years</div>
                    </div>
                    <div className="spec-item">
                        <div className="spec-label">Charging time</div>
                        <div className="spec-value">3 hours (12A)</div>
                    </div>
                    <div className="spec-item">
                        <div className="spec-label">Motor</div>
                        <div className="spec-value">1500W</div>
                    </div>
                    <div className="spec-item">
                        <div className="spec-label">Max speed</div>
                        <div className="spec-value">50 km/h</div>
                    </div>
                    <div className="spec-item">
                        <div className="spec-label">Warranty on electronics</div>
                        <div className="spec-value">1 year</div>
                    </div>
                    <div className="spec-item">
                        <div className="spec-label">Max range (@30 km/h)</div>
                        <div className="spec-value">100 km</div>
                    </div>
                    <div className="spec-item">
                        <div className="spec-label">Max range (@45 km/h)</div>
                        <div className="spec-value">90 km</div>
                    </div>
                    <div className="spec-item">
                        <div className="spec-label">Max range (@full speed)</div>
                        <div className="spec-value">70 km</div>
                    </div>
                    <div className="spec-item">
                        <div className="spec-label">Other key benefits</div>
                        <div className="spec-value">
                            Fire-safe battery<br />
                            Range prediction<br />
                            Comfortable ride<br />
                            Stable and safe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SE03_lite = () => {
    const navigate = useNavigate();
    const colors = ['red', 'black', 'blue', '#FFD700'];
    const images = [
        [red, red_1, red_cross, red_cross_1, grp],
        [black, black_1, black_cross, black_cross_1, grp],
        [blue, blue_1, grp],
        [golden, golden_1, grp]
    ];
    const [imglist, setimglist] = useState([red, red_1, red_cross, red_cross_1, grp]);
    const [show, setShow] = useState(false);
    const [isChoosed, setChoosed] = useState(false);
    const [productcmp, setProductCmp] = useState();

    const handleclick = (index) => {
        setimglist(images[index]);
    };

    const Toggle = () => {
        setShow(!show);
    };

    const handleMenuClick = (e) => {
        setProductCmp(e);
        setChoosed(true);
    };

    return (
        <>
            <h1 style={{ margin: '20px' }}>SE03 lite</h1>
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
                            <div className="swiper-button-next slider-arrow" style={{ marginRight: '-10px' }}>
                                <ion-icon name="arrow-forward"></ion-icon>
                            </div>
                            <div className="swiper-pagination">df</div>
                        </div>
                    </Swiper>
                </div>
                <div className="container-sm" style={{ maxWidth: '70%' }}>
                    <p style={{ fontSize: '1em' }}>
                        Indulge in the perfect harmony of power and range with this Rhyno.
                        Offering an exhilarating experience with its robust 1500W motor, it
                        ensures a thrilling ride while still delivering an impressive 70-100km
                        range on a single charge. Like its counterparts, this machine features
                        the safety assurance of a fire-safe advanced LFP battery, along with
                        the comprehensive benefits of owning a Rhyno. Boasting a formidable
                        combination of a 1500W motor and a 1.7kWh battery, this beast is ready
                        to roar on the roads, providing an electrifying journey at every turn.
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
                <button id="compare" onClick={Toggle}>Compare</button>
            </div>
            {/* {show && (
                <div className="popup-container">
                    <div className="popup-content">
                        {isChoosed ? (
                            <div className="App">
                                <h2 style={{ color: '#131313', fontFamily: 'Calibri' }}>Choose product to compare</h2>
                                <div className="btn-group">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Compare
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" onClick={() => handleMenuClick(SE03)}>SE03</a></li>
                                        <li><a className="dropdown-item" onClick={() => handleMenuClick(SE03Max)}>SE03 Max</a></li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="App" style={{ display: 'block' }}>
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" onClick={() => { setProductCmp(SE03); }}>SE03</a></li>
                                        <li><a className="dropdown-item" onClick={() => { setProductCmp(SE03Max); }}>SE03 Max</a></li>
                                    </ul>
                                </div>
                                <Spec />
                                <SE03Lite />
                                {productcmp}
                            </>
                        )}
                        <button className="close-button" onClick={Toggle}>Close</button>
                    </div>
                </div>
            )} */}
            <RhynoSpecs />
            <h1>Check out our other products</h1>
            <div className="container">
                <div className="product-container">
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
                    <p className='click-here' onClick={() => { navigate('/products/SE03') }}>Click here to get more details</p>
                </div>
                <div className="product-container">
                    <h2>SE03 Max</h2>
                    <img src={bike1} style={{ maxWidth: '95%', height: 'auto' }} />
                    <p style={{ fontSize: '0.6em' }}>
                        This Rhyno is tuned for long drives and no thrills. Like all other
                        variants, this machine comes with a fire-safe advanced LFP battery and
                        all the other benefits of owning a Rhyno, along with a perfect blend of
                        battery capacity and motor power to provide up to 150 km range on a
                        single charge. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, While it may not provide a thrilling ride, it promises a
                        dependable and unwavering presence on the long stretches.
                    </p>
                    <p className='click-here' style={{ color: 'burlywood' }} onClick={() => { navigate('/products/SE03_max') }}>Click here to get more details</p>
                </div>
            </div>
        </>
    );
};

export default SE03_lite;
