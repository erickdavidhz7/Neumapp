import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onKeyNumbers } from "../../../utils/formatDataProvider.js";
import { registerUserSchema } from "../../../schemas/auth.js";
import useAuthUser from "../../../hooks/useAuthUser";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const UserRegister = () => {
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
          className="text-primary block mb-2 text-base font-medium"
        >
          Nombre
        </label>
        <input
          name="firstName"
          type="text"
          id="firstName"
          color="danger"
          className={
            errors.firstName === undefined
              ? "bg-white border border-[#9CA2A9] placeholder-[#9CA2A9] focus:outline-none text-base rounded-lg block w-full p-2.5"
              : "bg-white border-2 border-secondInk placeholder-[#9CA2A9] text-secondInk focus:outline-none text-base rounded-lg block w-full p-2.5"
          }
          placeholder="jhon"
          {...register("firstName", {
            required: true,
          })}
        />
        {errors.firstName && (
          <p className="text-secondInk text-sm">{errors.firstName.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="lastName"
          className="text-primary block mb-2 text-base font-medium"
        >
          Apellido
        </label>
        <input
          name="lastName"
          type="text"
          id="lastName"
          className={
            errors.lastName === undefined
              ? "bg-white border border-[#9CA2A9] placeholder-[#9CA2A9] focus:outline-none text-base rounded-lg block w-full p-2.5"
              : "bg-white border-2 border-secondInk placeholder-[#9CA2A9] text-secondInk focus:outline-none text-base rounded-lg block w-full p-2.5"
          }
          placeholder="smith"
          {...register("lastName", {
            required: true,
          })}
        />
        {errors.lastName && (
          <p className="text-secondInk text-sm">{errors.lastName.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-primary block text-base mb-2 font-medium"
        >
          Correo
        </label>
        <input
          name="email"
          type="text"
          id="email"
          className={
            errors.email === undefined
              ? "bg-white border border-[#9CA2A9] placeholder-[#9CA2A9] focus:outline-none text-base rounded-lg block w-full p-2.5"
              : "bg-white border-2 border-secondInk placeholder-[#9CA2A9] text-secondInk focus:outline-none text-base rounded-lg block w-full p-2.5"
          }
          placeholder="myemail@gmail.com"
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && (
          <p className="text-secondInk text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-6 relative">
        <label
          htmlFor="password"
          className="text-primary block text-base mb-2 font-medium"
        >
          Contraseña
        </label>
        <input
          name="password"
          type={isVisible ? "text" : "password"}
          id="password"
          className={
            errors.password === undefined
              ? "bg-white border border-[#33353F] placeholder-[#9CA2A9]  text-base rounded-lg block w-full p-2.5 hover:bg-gray-100 focus:outline-none focus:text-slate-700 transition"
              : "bg-white border-2 border-secondInk placeholder-[#9CA2A9]  text-base text-secondInk rounded-lg block w-full p-2.5 focus:outline-none transition"
          }
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
          <p className="text-secondInk text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="phoneClient"
          className="text-primary block text-base mb-2 font-medium"
        >
          Ingresa tu número de celular
        </label>
        <div className="flex flex-col">
          <div className="flex gap-x-4">
            <input
              name="codeP"
              type="text"
              id="codeP"
              className={
                errors.codeP === undefined
                  ? "bg-white border border-[#9CA2A9] placeholder-[#9CA2A9] focus:outline-none text-base rounded-lg block w-full p-2.5"
                  : "bg-white border-2 border-secondInk placeholder-[#9CA2A9] text-secondInk focus:outline-none text-base rounded-lg block w-full p-2.5"
              }
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
              className={
                errors.phoneClient === undefined
                  ? "bg-white border border-[#9CA2A9] placeholder-[#9CA2A9] focus:outline-none text-base rounded-lg block w-full p-2.5"
                  : "bg-white border-2 border-secondInk placeholder-[#9CA2A9] text-secondInk focus:outline-none text-base rounded-lg block w-full p-2.5"
              }
              placeholder="1193475762"
              {...register("phoneClient", {
                required: true,
              })}
            />
          </div>
          <div className="flex gap-x-4">
            <div className="block w-1/3">
              {errors.codeP && (
                <p className="text-secondInk text-xs">{errors.codeP.message}</p>
              )}
            </div>
            <div className="block w-2/3">
              {errors.phoneClient && (
                <p className="text-secondInk text-xs">
                  {errors.phoneClient.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium text-primary dark:text-gray-900 text-center"
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
            rounded-md border-0 text-sm font-semibold bg-secondInk
            text-white hover:bg-secondInk-700 cursor-pointer text-center transition-colors"
          >
            Seleccionar archivo
          </label>
        ) : (
          <label
            htmlFor="photo"
            className="block mr-4 py-2 px-4
            rounded-md border-0 text-sm font-semibold bg-thirdInk-300
            text-secondInk hover:bg-thirdInk-700 cursor-pointer text-center transition-colors"
          >
            {selectedFile}
          </label>
        )}

        <div className="flex gap-x-4">
          {errors.photo ? (
            <p className="text-secondInk text-sm">{errors.photo.message}</p>
          ) : (
            <p
              className="mt-1 text-sm text-primary dark:text-gray-900"
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
            className="h-8 w-8 border-0 outline-none "
            name="agreements"
            type="checkbox"
            id="agreements"
            {...register("agreements", {
              required: true,
            })}
          />
          <label className="ml-2 text-xs text-primary" htmlFor="agreements">
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
        className="bg-primary hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
      >
        Crear Usuario
      </button>
    </form>
  );
};

export default UserRegister;
