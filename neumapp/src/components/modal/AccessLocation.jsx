import React, { useEffect, useState } from "react";
import IconLocation from "../../images/logo/IconLocation";
import { toast, ToastContainer } from "react-toastify";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { grantPermission } from "../../utils/locationData";
import "react-toastify/dist/ReactToastify.css";

function AccessLocation({ isOpen, onOpenChange, onClose }) {
    
  const handleGrantPermission = async () => {
    try {
      const coordenadas = await grantPermission(onClose);
      onClose();
      toast.success("Locacion guardada !", {
        position: "bottom-right",
      });
    } catch (error) {
      onClose();
      toast.error(error.message, { position: "bottom-right" });
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
            {(onClose) => (
            <>
              <div className="flex justify-center items-center">
                <IconLocation width="200" color="#4036ED" />
              </div>
              <ModalHeader className="flex flex-col gap-1 text-primary text-center font-bold text-2xl lg:text-3xl">
                Permitir a Neumapp acceso<spam>a tu ubicación</spam>
              </ModalHeader>
              <ModalBody>
                <p className="text-primary text-center font-semibold">
                  Usaremos tu ubicación para mostrarte los servicios más
                  cercanos
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-col items-center justify-center w-full">
                <Button
                  color="primary"
                  variant="solid"
                  onPress={handleGrantPermission}
                  className="px-unit-12 py-unit-7 sm:w-unit-6xl"
                >
                  Permitir
                </Button>
                <Button
                  color="primary"
                  variant="bordered"
                  onPress={onClose}
                  className="px-unit-12 py-unit-7 sm:w-unit-6xl"
                >
                  Rechazar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default AccessLocation;
