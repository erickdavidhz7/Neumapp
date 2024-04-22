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

export function MapProvider() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
      onOpen();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onOpen]);

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
                      <img src={User} alt="user" />
                    </div>
                    <div className="w-2/3 flex flex-col gap-4">
                      <span className="text-xl text-white">Name</span>
                      <span className="text-xl text-white">
                        Servicio solicitado
                      </span>
                      <span className="text-xl text-white">
                        Distancia: 700m
                      </span>
                    </div>
                  </ModalBody>
                  <ModalFooter className="flex flex-row gap-4">
                    <Button color="danger" onPress={onClose}>
                      Aceptar
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Declinar
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
