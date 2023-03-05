import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 34.020882,
      lng: -6.841650
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
   
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBzcR5S3N8kdskRxiakWUx3LgtD4B_HARs" }}
        defaultCenter={defaultProps.center}
        
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>

  );
}