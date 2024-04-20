import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { lenderSchema } from "../../../schemas/auth.js";
// import SelectConuntry from "./SelectConuntry.jsx";
import { onKeyNumbers } from "../../../utils/formatDataProvider.js";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import useAuthUser from "../../../hooks/useAuthUser.jsx";
import { useDisclosure } from "@nextui-org/react";
import AccessLocation from "../../modal/AccessLocation.jsx";
import { grantPermission } from "../../../utils/locationData.js";
import { toast, ToastContainer } from "react-toastify";



const ProviderRegister = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [dataForm, setDataForm] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { createProvider } = useAuthUser();
  const [selectedFile, setSelectedFile] = useState("Seleccionar archivo");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(lenderSchema),
  });
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile("Seleccionar archivo");
    }
  };
  const handleGrantPermission = async () => {
    try {
      const coordenadas = await grantPermission();
      onClose();
      createProvider(dataForm, coordenadas);
    } catch (error) {
      console.log(error);
      toast.error(error.message, { position: "bottom-right" });
      onClose();
    }
  };

  const handleDataModal = async (dataForm) => {
    onOpen();
    setDataForm(dataForm);
  };
  return (
    <React.Fragment>
      <AccessLocation
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        handleGrantPermission={handleGrantPermission}
      />
      <ToastContainer />

      <form className="flex flex-col" onSubmit={handleSubmit(handleDataModal)}>
        <div className="mb-6 flex flex-row justify-center w-full">
          {/* input name */}
          <div className="w-4/5 mr-1 sm:mr-3">
            <label
              htmlFor="firstName"
              className="text-white block mb-2 text-base font-medium"
            >
              Nombre
            </label>
            <input
              name="firstName"
              type="text"
              id="firstName"
              className="bg-white border border-[#33353F] placeholder-[#9CA2A9]  text-base rounded-lg block w-full p-2.5 hover:bg-gray-100 focus:outline-none focus:text-slate-700 transition"
              placeholder="Jhon"
              {...register("firstName", {
                required: true,
              })}
            />
            {errors.firstName && (
              <p className="text-red-300 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          {/* input lastName */}
          <div className="w-4/5 ml-1 sm:ml-3">
            <label
              htmlFor="lastName"
              className="text-white block mb-2 text-base font-medium"
            >
              Apellido
            </label>
            <input
              name="lastName"
              type="text"
              id="lastName"
              className="bg-white border border-[#33353F] placeholder-[#9CA2A9]  text-base rounded-lg block w-full p-2.5 hover:bg-gray-100 focus:outline-none focus:text-slate-700 transition"
              placeholder="Smith"
              {...register("lastName", {
                required: true,
              })}
            />
            {errors.lastName && (
              <p className="text-red-300 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block text-base mb-2 font-medium"
          >
            Correo
          </label>
          <input
            name="email"
            type="text"
            id="email"
            autoComplete="email"
            className="bg-white border border-[#33353F] placeholder-[#9CA2A9]  text-base rounded-lg block w-full p-2.5 hover:bg-gray-100 focus:outline-none focus:text-slate-700 transition"
            placeholder="myemail@gmail.com"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <p className="text-red-300 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-6 relative">
          <label
            htmlFor="password"
            className="text-white block text-base mb-2 font-medium"
          >
            Contraseña
          </label>
          <input
            name="password"
            type={isVisible ? "text" : "password"}
            id="password"
            placeholder="**********"
            className="bg-white border border-[#33353F] placeholder-[#9CA2A9]  text-base rounded-lg block w-full p-2.5 hover:bg-gray-100 focus:outline-none focus:text-slate-700 transition"
            {...register("password", {
              required: true,
            })}
          />

          <button
            className=" absolute inset-y-0 right-0 pr-2.5 flex items-center  focus:outline-none  mt-7"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <FaEye className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>

          {errors.password && (
            <p className="text-red-300 text-sm">{errors.password.message}</p>
          )}
        </div>
        {/* Numero de celular personal */}
        <div className="mb-6">
          <label
            htmlFor="phoneClient"
            className="text-white block text-base mb-2 font-medium"
          >
            Ingresa tu número personal
          </label>
          <div className="flex flex-col">
            <div className="flex gap-x-4">
              <input
                name="codeP"
                type="text"
                id="codeP"
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9]  text-base rounded-lg block w-full p-2.5 hover:bg-gray-100 focus:outline-none focus:text-slate-700 transition"
                placeholder="+54"
                {...register("codeP", {
                  required: true,
                })}
              />
              {/* <SelectConuntry register={register}/> */}
              <input
                name="phoneClient"
                type="text"
                id="phoneClient"
                onKeyDown={onKeyNumbers}
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9]  text-base rounded-lg block w-full p-2.5 hover:bg-gray-100 focus:outline-none focus:text-slate-700 transition"
                placeholder="1193475762"
                {...register("phoneClient", {
                  required: true,
                })}
              />
            </div>
            <div className="flex justify-start w-full">
              <div className="w-1/2">
                {errors.codeP && (
                  <p className="text-red-300 text-xs">{errors.codeP.message}</p>
                )}
              </div>
              <div className="w-1/2 ml-3">
                {errors.phoneClient && (
                  <p className="text-red-300 text-xs">
                    {errors.phoneClient.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* input Numero laboral */}

        <div className="mb-6">
          <label
            htmlFor="phoneProvider"
            className="text-white block text-base mb-2 font-medium"
          >
            Ingresa tu número laboral
          </label>
          <div className="flex flex-col">
            <div className="flex gap-x-4">
              <input
                name="codeL"
                type="text"
                id="codeL"
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9]  text-base rounded-lg block w-full p-2.5 hover:bg-gray-100 focus:outline-none focus:text-slate-700 transition"
                placeholder="+54"
                {...register("codeL", {
                  required: true,
                })}
              />
              <input
                name="phoneProvider"
                type="text"
                id="phoneProvider"
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9]  text-base rounded-lg block w-full p-2.5 hover:bg-gray-100 focus:outline-none focus:text-slate-700 transition"
                placeholder="1193475762"
                onKeyDown={onKeyNumbers}
                {...register("phoneProvider", {
                  required: true,
                })}
              />
            </div>
            <div className="flex justify-start w-full">
              <div className="w-1/2">
                {errors.codeL && (
                  <p className="text-red-300 text-xs">{errors.codeL.message}</p>
                )}
              </div>

              <div className="w-1/2 ml-3">
                {errors.phoneProvider && (
                  <p className="text-red-300 text-xs">
                    {errors.phoneProvider.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* input subir imagen */}
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-medium text-white dark:text-gray-900 text-center"
            htmlFor="photo"
          >
            Adjunta una foto de perfil.
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            hidden
            {...register("photo", {
              required: true,
              onChange: handleFileInputChange,
            })}
          />
          {selectedFile === "Seleccionar archivo" ? (
            <label
              htmlFor="photo"
              className="block mr-4 py-2 px-4
            rounded-md border-0 text-sm font-semibold bg-purple-50
            text-primary hover:bg-purple-100 cursor-pointer text-center"
            >
              Seleccionar archivo
            </label>
          ) : (
            <label
              htmlFor="photo"
              className="block mr-4 py-2 px-4
            rounded-md border-0 text-sm font-semibold bg-purple-400
            text-white hover:bg-purple-500 cursor-pointer text-center"
            >
              {selectedFile}
            </label>
          )}

          <div className="flex gap-x-4">
            {errors.photo ? (
              <p className="text-red-300 text-sm">{errors.photo.message}</p>
            ) : (
              <p
                className="mt-1 text-sm text-gray-300 dark:text-gray-900"
                id="photo_error"
              >
                JPG ,JPGE ,PNG o WEBP (10MB Max).
              </p>
            )}
          </div>
        </div>
        <div className="mb-6 flex-col">
          <div className="flex gap-x-4">
            <input
              className="h-8 w-8 border-0 outline-none"
              name="agreements"
              type="checkbox"
              id="agreements"
              {...register("agreements", {
                required: true,
              })}
            />
            <label className="ml-2 text-xs text-white" htmlFor="agreements">
              Estoy de acuerdo con los términos y condicones y politicas de
              seguridad y confirmo que soy mayor de edad
            </label>
          </div>

          <div className="flex gap-x-4">
            {errors.agreements && (
              <p className="text-red-300 text-sm">
                {errors.agreements.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#929292] hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Crear Usuario
        </button>
      </form>
    </React.Fragment>
  );
};

export default ProviderRegister;
