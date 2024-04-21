import React from "react";
import Map from "react-map-gl";
import FooterMap from "../FooterMap";
import NavBarDash from "../dashBoard/NavBarDash";

export function MapProvider() {
  const name = localStorage.getItem("User").replace(/^"(.*)"$/, "$1");
  const img = localStorage.getItem("Photo").replace(/^"(.*)"$/, "$1");
  const correo = localStorage.getItem("Email").replace(/^"(.*)"$/, "$1");
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
        <NavBarDash name={name} img={img} correo={correo} />
        <FooterMap />
      </Map>
    </>
  );
}
