import React, { useState, useEffect } from "react";
import Map from "react-map-gl";
import FooterMap from "../FooterMap";
import NavBarDash from "../dashBoard/NavBarDash";
import User from "../../images/user.svg";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { Marker } from "react-map-gl";
import { MarkerClient } from "./Markers";

export function MapProvider() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showModal, setShowModal] = useState(false);

  const [buttonTitle, setButtonState] = useState("declinar");
  const [buttonDisplay, setButtonDisplay] = useState("block");

  useEffect(() => {
    let count = 0;
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch("https://neumapp.site:3001/orders");
        const data = await response.json();
        const order = data.find(
          (order) => order.id === "fc383217-fb53-42ce-8ea4-52280a311998"
        );
        if (order.status === "started") {
          setTimeout(() => {
            clearInterval(intervalId);
            setShowModal(true);
            onOpen();
          }, 2000);
        }
        count++;
        if (count >= 5) {
          clearInterval(intervalId);
        }
      } catch (error) {
        console.error("Error al realizar la llamada a la API:", error);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  async function handleServiceInProcess() {
    const serviceStatus = await fetch(
      "https://neumapp.site:3001/orders/fc383217-fb53-42ce-8ea4-52280a311998",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "in process",
        }),
      }
    );
    setButtonDisplay("none");
    setButtonState("Haga click para finalizar el servicio");
  }
  async function handleServiceFinished() {
    await fetch(
      "https://neumapp.site:3001/orders/fc383217-fb53-42ce-8ea4-52280a311998",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "finished",
        }),
      }
    );
  }
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
        <Marker longitude={-58.3942251} latitude={-34.6033355} anchor="bottom">
          <MarkerClient></MarkerClient>
        </Marker>
        {showModal && (
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            radius="xl"
            classNames={{
              body: "p-8",
              backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
              base: "border-[#292f46] bg-[#4036ED] dark:bg-[#4036ED] text-[#ffffff]",
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="text-3xl text-white font-bold">
                    Nueva Solicitud
                  </ModalHeader>
                  <ModalBody className="flex flex-row gap-4">
                    <div className="w-1/3">
                      <img
                        src="https://res.cloudinary.com/disv40hau/image/upload/v1713480345/Neumapp/providers/tmp-5-1713480345236.png"
                        alt="user"
                      />
                    </div>
                    <div className="w-2/3 flex flex-col gap-4">
                      <span className="text-xl text-white">Cliente</span>
                      <span className="text-xl text-white">
                        Servicio solicitado
                      </span>
                      <span className="text-xl text-white">
                        Distancia: 700m
                      </span>
                    </div>
                  </ModalBody>
                  <ModalFooter className="flex flex-row justify-center gap-4">
                    <Button
                      onClick={() => {
                        handleServiceInProcess();
                      }}
                      style={{ display: buttonDisplay }}
                      color="danger"
                    >
                      Aceptar
                    </Button>
                    <Button
                      onClick={() => {
                        handleServiceFinished();
                      }}
                      color="primary"
                      onPress={onClose}
                    >
                      {buttonTitle}
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
        <NavBarDash />
        <FooterMap />
      </Map>
    </>
  );
}
