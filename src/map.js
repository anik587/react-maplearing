import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as data from "./data.json";

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    console.log(data);
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.4211, lng: -75.6903 }}>
      {data.result.map(park => (
       
		
		<Marker
          key={park.trackingId}
          position={{
            lat: park.endPoint.coordinates[0],
            lng: park.endPoint.coordinates[1]
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
        />
      ))}

      {/* {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )} */}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App1() {
  return (
    <div style={{ width: "90vw", height: "80vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDpU81OkkK6llq0EGVlteQ9IWVVXAmuaME`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
