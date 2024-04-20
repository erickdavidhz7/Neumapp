import React from "react";
import Map from "react-map-gl";
// import NavBarMap from "../NavBarMap";
import FooterMap from "../FooterMap";
import NavBarDash from "../dashBoard/NavBarDash";

export function MapProvider() {
  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1IjoibHVwYXR0aW4iLCJhIjoiY2x2NGZ3Y3l3MDgyNTJzcDFnYXpwa2theCJ9.-FiQ4H1sz4AbVPnPvZo52w"
        initialViewState={{
          longitude: -58.3942251,
          latitude: -34.6033355,
          zoom: 14,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <NavBarDash />
        <FooterMap />
      </Map>
    </>
  );
}
