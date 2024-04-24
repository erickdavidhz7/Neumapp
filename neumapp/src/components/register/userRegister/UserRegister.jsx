import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onKeyNumbers } from "../../../utils/formatDataProvider.js";
import { registerUserSchema } from "../../../schemas/auth.js";
import useAuthUser from "../../../hooks/useAuthUser";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const UserRegister = ({ onOpen }) => {
  const { createUser } = useAuthUser();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState("Seleccionar archivo");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerUserSchema),
  });
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile("Seleccionar archivo");
    }
  };
  const handleDataModal = (dataForm) => {
    createUser(dataForm);
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(handleDataModal)}>
      <div className="mb-6">
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
          className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:outline-none text-base rounded-lg block w-full p-2.5"
          placeholder="jhon"
          {...register("firstName", {
            required: true,
          })}
        />
        {errors.firstName && (
          <p className="text-red-300 text-sm">{errors.firstName.message}</p>
        )}
      </div>
      <div className="mb-6">
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
          className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:outline-none text-base rounded-lg block w-full p-2.5"
          placeholder="smith"
          {...register("lastName", {
            required: true,
          })}
        />
        {errors.lastName && (
          <p className="text-red-300 text-sm">{errors.lastName.message}</p>
        )}
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
          className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:outline-none text-base rounded-lg block w-full p-2.5"
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
          className="bg-white border border-[#33353F] placeholder-[#9CA2A9]  text-base rounded-lg block w-full p-2.5 hover:bg-gray-100 focus:outline-none focus:text-slate-700 transition"
          placeholder="****************"
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
      <div className="mb-6">
        <label
          htmlFor="phoneClient"
          className="text-white block text-base mb-2 font-medium"
        >
          Ingresa tu número de celular
        </label>
        <div className="flex flex-col">
          <div className="flex gap-x-4">
            <input
              name="codeP"
              type="text"
              id="codeP"
              className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:outline-none text-base rounded-lg block w-1/3 p-2.5"
              placeholder="+54"
              {...register("codeP", {
                required: true,
              })}
            />
            <input
              name="phoneClient"
              type="text"
              id="phoneClient"
              onKeyDown={onKeyNumbers}
              className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:outline-none text-base rounded-lg block w-2/3 p-2.5"
              placeholder="1193475762"
              {...register("phoneClient", {
                required: true,
              })}
            />
          </div>
          <div className="flex gap-x-4">
            <div className="block w-1/3">
              {errors.codeP && (
                <p className="text-red-300 text-xs">{errors.codeP.message}</p>
              )}
            </div>
            <div className="block w-2/3">
              {errors.phoneClient && (
                <p className="text-red-300 text-xs">
                  {errors.phoneClient.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium text-white dark:text-gray-900 text-center"
          htmlFor="photo"
        >
          Adjunta una foto de perfil (opcional)
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
            <p className="text-red-300 text-sm">{errors.agreements.message}</p>
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
  );
};

export default UserRegister;
