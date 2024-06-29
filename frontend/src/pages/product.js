import React from "react";
import bike1 from '../assets/images/black.png';
import { useNavigate } from "react-router-dom";


const Products=()=>{
    const navigate=useNavigate()
    // window.scrollTo(0)
    return(
    <div>
                <h1>Our Products</h1>
        <div className="App">
          <div className="product-container">
            <h2>SE03 Lite</h2>
            <img src={bike1} style={{ maxWidth: '95%', height: 'auto' }} />
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
            <p className ='click-here'  onClick={()=>{navigate('/products/SE03_lite')}}>Click here to get more details</p>
          </div>
          <div className="product-container">
            <h2>SE03</h2>
            <img src={bike1} style={{ maxWidth: '95%', height: 'auto' }} />
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
            <p className ='click-here'  onClick={()=>{navigate('/products/SE03')}}>Click here to get more details</p>
          </div>
          <div className="product-container" style={{ maxWidth: '120%' }}>
            <h2>SE03 Max</h2>
            <img src={bike1} style={{ maxWidth: '100%', height: '110%' }} />
            <p style={{ fontSize: '0.6em' }}>
              This Rhyno is tuned for long drives and no thrills. Like all other
              variants, this machine comes with a fire-safe advanced LFP battery and
              all the other benefits of owning a Rhyno, along with a perfect blend of
              battery capacity and motor power to provide up to 150 km range on a
              single charge. While it may not provide a thrilling ride, it promises a
              dependable and unwavering presence on the long stretches.
            </p>
            <p className ='click-here'  onClick={()=>{navigate('/products/SE03_max')}}>Click here to get more details</p>
          </div>
        </div>
    </div>
    )
}
export default Products