import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet marker icon not loading in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const LuxuryMap = () => {
    // New York Coordinates (Standard)
    const position = [40.7128, -74.0060];

    return (
        <div className="w-full h-[500px] md:h-[60vh] z-0 relative isolate p-4 bg-gray-50 dark:bg-black">
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                className="w-full h-full z-0 outline-none border-2 border-white/20 rounded-lg shadow-2xl"
                style={{ background: '#e5e7eb' }} // Light gray background while loading
            >
                {/* Standard Colorful OpenStreetMap Tiles */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position}>
                    <Popup className="font-serif">
                        <span className="font-bold text-slate-900">Chronos & Co. Flagship</span> <br />
                        New York City
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LuxuryMap;
