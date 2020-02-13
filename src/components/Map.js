import React, { Component, useState } from 'react';

import GoogleMapReact from 'google-map-react';

const markerStyles = {
    position: "relative",
    left: "-50px",
    height: "auto",
    width: "100px",
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
}

export const Marker = ({ text }) => <div style={markerStyles}>{text}</div>;

const mapOptions = (map) => {
    return {
        styles: mapStyles,
        streetViewControl: true,
    }
};

const Map = ({
    markers = [],
    center,
    zoom,
    onClick,
    ...rest
}) => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                options={mapOptions}
                onClick={onClick}
                bootstrapURLKeys={{ key: "AIzaSyD9jTGYNpWqhcKSA3dI_atkepXqAIvfnck" }}
                defaultCenter={center}
                defaultZoom={zoom}
                {...rest}
            >
                {markers}
            </GoogleMapReact>
        </div>
    );
}

export default Map;

const mapStyles = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
    },
    {
        featureType: 'all',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
    },
    {
        featureType: 'administrative',
        elementType: 'labels',
        stylers: [{ visibility: 'on' }]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels',
        stylers: [{ visibility: 'on' }]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
    }
]