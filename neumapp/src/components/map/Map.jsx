import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { MarkerClient, MarkerProvider } from "./Markers";
import { CustomPopUp } from "./Popup";
import NavBarDash from "../dashBoard/NavBarDash";
import FooterMap from "../FooterMap";
import { Provider } from "../provider/Provider";

const arrayPopUps = [
  {
    id: 1,
    name: " María García",
    img: "/images/MapImages/provider1.png",
    imgPopUp: "/images/MapImages/popUp/provider1.png",
    lng: -58.4054294,
    lat: -34.6045541,
  },
  {
    id: 2,
    name: "José Pérez",
    img: "/images/MapImages/provider2.png",
    lng: 58.3813785,
    lat: -34.6037014,
  },
  {
    id: 3,
    name: "Alejandra Martínez",
    img: "/images/MapImages/provider3.png",
    lng: 58.3832321,
    lat: -34.5964736,
  },
  {
    id: 4,
    name: "Ana Hernández",
    img: "/images/MapImages/provider4.png",
    lng: 58.4071646,
    lat: -34.5916308,
  },
  {
    id: 5,
    name: "Pablo López",
    img: "/images/MapImages/provider5.png",
    lng: 58.4236793,
    lat: -34.598739,
  },
  {
    id: 6,
    name: "Gabriel García",
    img: "/images/MapImages/provider6.png",
    lng: 58.41515,
    lat: -34.61081,
  },
  {
    id: 7,
    name: "Alejandro López",
    img: "/images/MapImages/provider7.png",
    lng: 58.428837,
    lat: -34.6163608,
  },
  {
    id: 8,
    name: "Santiago Alsina",
    img: "/images/MapImages/provider8.png",
    lng: 58.3806046,
    lat: -34.6123712,
  },
];

const arrayProviders = [
  {
    id: 1,
    name: " María García",
    img: "/images/MapImages/provider1.png",
    imgPopUp: "/images/MapImages/popUp/provider1.png",
    lng: -58.4054294,
    lat: -34.6045541,
  },
  {
    id: 2,
    name: "José Pérez",
    img: "/images/MapImages/provider2.png",
    lng: -58.3813785,
    lat: -34.6037014,
  },
  {
    id: 3,
    name: "Alejandra Martínez",
    img: "/images/MapImages/provider3.png",
    lng: -58.3832321,
    lat: -34.5964736,
  },
  {
    id: 4,
    name: "Ana Hernández",
    img: "/images/MapImages/provider4.png",
    lng: -58.4071646,
    lat: -34.5916308,
  },
  {
    id: 5,
    name: "Pablo López",
    img: "/images/MapImages/provider5.png",
    lng: -58.4236793,
    lat: -34.598739,
  },
  {
    id: 6,
    name: "Gabriel García",
    img: "/images/MapImages/provider6.png",
    lng: -58.41515,
    lat: -34.61081,
  },
  {
    id: 7,
    name: "Alejandro López",
    img: "/images/MapImages/provider7.png",
    lng: -58.428837,
    lat: -34.6163608,
  },
  {
    id: 8,
    name: "Santiago Alsina",
    img: "/images/MapImages/provider8.png",
    lng: -58.3806046,
    lat: -34.6123712,
  },
];

export function Maping() {
  const [showPopup, setShowPopup] = useState(false);

  const [positionState, setPositionState] = useState("inherit");
  const [providerState, setProviderState] = useState(false);

  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1IjoibHVwYXR0aW4iLCJhIjoiY2x2NGZ3Y3l3MDgyNTJzcDFnYXpwa2theCJ9.-FiQ4H1sz4AbVPnPvZo52w"
        initialViewState={{
          longitude: -58.3942251,
          latitude: -34.6033355,
          zoom: 13,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={-58.3942251} latitude={-34.6033355} anchor="bottom">
          <MarkerClient></MarkerClient>
        </Marker>
        {arrayProviders.map((provider) => (
          <Marker
            key={provider.id}
            onClick={() => {
              setShowPopup(true);
              console.log(showPopup);
            }}
            longitude={provider.lng}
            latitude={provider.lat}
            anchor="bottom"
          >
            <MarkerProvider img={provider.img}></MarkerProvider>
          </Marker>
        ))}
        {arrayPopUps.map((provider) => {
          if (showPopup) {
            return (
              <Popup
                key={provider.id}
                style={{ left: "40px", borderRadius: "25px" }}
                longitude={provider.lng}
                latitude={provider.lat}
                anchor="left"
                onClose={() => setShowPopup(false)}
                borderRadius="25px"
              >
                <CustomPopUp
                  providerState={setProviderState}
                  changeToProvider={setPositionState}
                  name={provider.name}
                  img={provider.img}
                />
              </Popup>
            );
          }
          return null;
        })}{" "}
        <NavBarDash />
        <FooterMap />
        <Provider state={providerState} position={positionState}></Provider>
      </Map>
    </>
  );
}
