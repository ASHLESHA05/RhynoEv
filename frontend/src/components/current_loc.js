// CurrentLocationMap.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CurrentLocationMap = () => {
  const [position, setPosition] = useState(null);



  return (
    <div>
      {position ? (
        <MapContainer
          center={position}
          zoom={12}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}></Marker>
          <Circle center={position} radius={10000} />
        </MapContainer>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CurrentLocationMap;
