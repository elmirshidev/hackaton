import React, { useState, useCallback, useRef } from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import FireData from './FireData';
// import emergency from '../assets/emergency.png'
import {GoFlame as Flame} from 'react-icons/go'
function Map({ data }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAZyo1Pvcs3oOCfnkKLk8qfNfvj88ebkoE',
        language: 'en'
    });
    const mapRef = useRef(null)
    const [hoveredInfo, setHoveredInfo] = useState(null);
    const [mapCenter, setMapCenter] = useState({
        lat: 45.4211,
        lng: -75.6903
    });
    const handleMarkerMouseOver = useCallback((item) => {
        
        setMapCenter({
            lat: item.geometries[0].coordinates[1],
            lng: item.geometries[0].coordinates[0]
        });
        
        setHoveredInfo({
            title: item.title,
            lat: item.geometries[0].coordinates[1],
            lng: item.geometries[0].coordinates[0]
        });
    }, []);

    if (data.length === 0) return 'Loading...';
    if (!isLoaded) return 'Loading...';

    return (
        <>
            <GoogleMap
                ref={mapRef}
                zoom={5}
                center={mapCenter}
                mapContainerStyle={{
                    width: '100%',
                    height: '100%'
                }}
            >
                {data.map((item, key) => {
                    if (item.categories[0].id === 8) {
                        return (
                            <MarkerF

                                icon={{
                                    url: "https://img.icons8.com/emoji/48/000000/fire.png",
                                    scaledSize: new window.google.maps.Size(30, 30),
                                }}
                                key={key}
                                position={{ lat: item.geometries[0].coordinates[1], lng: item.geometries[0].coordinates[0] }}
                                onClick={() => handleMarkerMouseOver(item)}
                            />
                        )
                    }
                    return null; 
                })}
            </GoogleMap>
            <FireData info={hoveredInfo} />
        </>
    );
}

export default Map;
