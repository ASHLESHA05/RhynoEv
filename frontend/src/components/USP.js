import React, { useState } from "react";
import lfp from '../assets/images/ESP/lfp_battery.png';
import wide_tyre from '../assets/images/ESP/wide_tyre.png';
import range from '../assets/images/ESP/range.png';
import caliber from '../assets/images/ESP/caliber.png';
import simple from '../assets/images/ESP/simple.jpg';
import '../styles/USP.css'
import CurrentLocationMap from "./current_loc";
import { useNavigate } from "react-router-dom";

const LFP=()=>{
    return(
        <div className="extraordinary-container" style={{
            maxWidth:'100%',
            maxHeight:'180%' ,
            border:'1px solid white', 
            backgroundColor:'burlywood',
            color:'black',
            marginTop:'100px',
            marginBottom:'100px',
            borderRadius:'20px',
            textShadow:'2px 2px 5px #89caf0',
            fontFamily:'Times new Roman',
            height:'500px'
            
            }}>
            <h1 style={{fontStyle:'bold'}}>LFP Battery</h1>
            <img src={lfp} style={{maxWidth: '30%', height: '35%'}}/>
            <p style={{fontSize:'0.6em' , maxInlineSize: '10'}}> Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
                renowned for their safety features  -eliminating the risk of fire associated with other
                Lithium batteries. These batteries boast a broader temperature range, ideal for the
                diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
                by an Active Balancing Smart Battery Management System (BMS) for extended life
                and reduced maintenance. Each battery undergoes rigorous waterproofing tests
                according to IP76 standards. But it doesn't stop there—our technology goes the extra
                mile in ensuring the battery's lasting durability. Connect with us to discover the
                thoughtful engineering behind our batteries!</p>
        </div>

    )
}
const wide_Tyre=()=>{
    return(
        <div className="extraordinary-container" style={{
            maxWidth:'100%',
            maxHeight:'180%' ,
            border:'1px solid white', 
            backgroundColor:'burlywood',
            color:'black',
            marginTop:'100px',
            marginBottom:'100px',
            borderRadius:'20px',
            textShadow:'2px 2px 5px #89caf0',
            fontFamily:'Times new Roman',
            height:'500px'
            
            }}>
            <h1 style={{fontStyle:'bold'}}>Wider tyres</h1>
            <img src={wide_tyre} style={{maxWidth: '30%', height: '35%'}}/>
            <p style={{fontSize:'0.6em' , maxInlineSize: '10',marginTop:'30px'}}> Now, say goodbye to skidding and embrace the leaning turns!
Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
beast that ensures stability on different terrains such as wet roads, mud, and sand.</p>
        </div>
    )
}

const Range=()=>{
    return(
        <div className="extraordinary-container" style={{
            maxWidth:'100%',
            maxHeight:'180%' ,
            border:'1px solid white', 
            backgroundColor:'burlywood',
            color:'black',
            marginTop:'100px',
            marginBottom:'100px',
            borderRadius:'20px',
            textShadow:'2px 2px 5px #89caf0',
            fontFamily:'Times new Roman',
            height:'500px'
            
            }}>
            <h1 style={{fontStyle:'bold'}}>Range prediction</h1>
            <img src={range} style={{maxWidth: '30%', height: '35%'}}/>
            <p style={{fontSize:'0.6em' , maxInlineSize: '10',marginTop:'30px'}}>  Rhyno is more than just a mode of transportation. It is
an experience of sheer comfort and style! A seamless fusion of minimalism,
sophistication, and a touch of masculinity!
</p>
        </div>
    )
}

const Extraordinary=()=>{
    return(
        <div className="extraordinary-container" style={{
            maxWidth:'100%',
            maxHeight:'180%' ,
            border:'1px solid white', 
            backgroundColor:'burlywood',
            color:'black',
            marginTop:'100px',
            marginBottom:'100px',
            borderRadius:'20px',
            textShadow:'2px 2px 5px #89caf0',
            fontFamily:'Times new Roman',
            height:'500px',
            hover:{
                transform: 'scale(1.1)', /* Zoom in effect */
                boxShadow: '0 0 20px rgba(0, 0, 255, 0.5)', /* Blue shadow glow */
                zIndex: '1' /* Bring the hovered slide to the front */
            }
            
            }}>
            <h1 style={{fontStyle:'bold'}}>Extraordinary Experience</h1>
            <img src={caliber} style={{maxWidth: '30%', height: '35%'}}/>
            <p style={{fontSize:'0.6em' , maxInlineSize: '10',marginTop:'30px'}}>  Rhyno is more than just a mode of transportation. It is
an experience of sheer comfort and style! A seamless fusion of minimalism,
sophistication, and a touch of masculinity!
</p>
        </div>
    )
}
const Experience=()=>{
    const [flag,setFlag]=useState(false)
    const navigate=useNavigate()
    return(
        <><div className="extraordinary-container" style={{
            maxWidth:'100%',
            maxHeight:'180%' ,
            border:'1px solid white', 
            backgroundColor:'burlywood',
            color:'black',
            marginTop:'100px',
            marginBottom:'100px',
            borderRadius:'20px',
            textShadow:'2px 2px 5px #89caf0',
            fontFamily:'Times new Roman',
            height:'550px'
            
            }}>
            <h1 style={{fontStyle:'bold'}}>Rugged and Simple Design</h1>
            <img src={simple} style={{maxWidth: '30%', height: '35%'}}/>
            <p style={{fontSize:'0.6em' , maxInlineSize: '10'}}>   We’ve had enough of the EVs looking and feeling like
fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
ending up spending weeks and months at service stations for complex repairs. We
took a bold step of making something raw, rugged, and practical. We kept it so
simple that even your trusted local mechanic can understand and repair most of it. If
you have reached this far, why not to take a test ride? 
</p>
<p id='loc' onClick={()=>{setFlag(true)}} style={{fontSize:'0.6em' , maxInlineSize: '10'}}> Click here to locate your
nearest dealership or </p>
<p id='book-test-ride' onClick={()=>{navigate('/preBook')}} style={{fontSize:'0.6em' , maxInlineSize: '10'}}> book a test ride at your home!</p>
        </div>
            {flag &&(
                
                <>
                <ion-icon onClick={setFlag(false)} name="arrow-undo-outline"></ion-icon>
                <CurrentLocationMap/>
                </>
            )}
        </>
        
    )
}

export default [LFP,wide_Tyre,Range,Extraordinary,Experience];