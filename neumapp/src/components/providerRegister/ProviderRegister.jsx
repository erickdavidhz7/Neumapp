import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "../../images/logo/Logo.jsx";
import { lenderSchema } from "../../schemas/auth.js";
// import SelectConuntry from "./SelectConuntry.jsx";
import { providerRegisterRequest } from "../../api/auth.js";
import { formatData } from "../../utils/formatDataProvider.js";
const ProviderRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(lenderSchema),
  });
  const onSubmit = async (data) => {
    try {
      const formatedData = formatData(data);
      console.log(formatedData);
      const response = await providerRegisterRequest(formatedData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <section
      id="register"
      className="min-h-screen bg-zinc-700 flex justify-center items-center"
    >
      <div className="flex flex-col lg:flex-row justify-between w-[90%] max-w-7xl mx-auto gap-y-8 lg:gap-0">
        <article className="flex justify-start items-center mx-auto lg:mx-0">
          {/* <img src={Logo} alt="Logo" className="h-20 lg:h-28" /> */}
          <Logo width={"10vw"} color="white" />
          <span className="text-5xl lg:text-9xl text-white">Neumapp</span>
        </article>
        <article className="h-full w-full lg:w-1/3 p-8 rounded-2xl">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
                  className=" bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:text-slate-900 text-base rounded-lg block w-full p-2.5"
                  placeholder="Jhon"
                  {...register("firstName", {
                    required: true,
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-300 text-sm">
                    {errors.firstName.message}
                  </p>
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
                  className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:text-slate-900 text-base rounded-lg block w-full p-2.5"
                  placeholder="Smith"
                  {...register("lastName", {
                    required: true,
                  })}
                />
                {errors.lastName && (
                  <p className="text-red-300 text-sm">
                    {errors.lastName.message}
                  </p>
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
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:text-slate-900 text-base rounded-lg block w-full p-2.5"
                placeholder="myemail@gmail.com"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="text-red-300 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="text-white block text-base mb-2 font-medium"
              >
                Contraseña
              </label>
              <input
                name="password"
                type="text"
                id="password"
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:text-slate-900 text-base rounded-lg block w-full p-2.5"
                placeholder="****************"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password && (
                <p className="text-red-300 text-sm">
                  {errors.password.message}
                </p>
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
                    className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:text-slate-900 text-base rounded-lg block w-1/3 p-2.5"
                    placeholder="+54"
                    {...register("codeP", {
                      required: true,
                    })}
                  />
                  {/* <SelectConuntry register={register}/> */}
                  <input
                    name="phoneClient"
                    type="number"
                    id="phoneClient"
                    className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:text-slate-900 text-base rounded-lg block w-2/3 p-2.5"
                    placeholder="1193475762"
                    {...register("phoneClient", {
                      required: true,
                    })}
                  />
                </div>
                <div className="flex gap-x-4">
                  <div className="block w-1/3">
                    {errors.codeP && (
                      <p className="text-red-300 text-xs">
                        {errors.codeP.message}
                      </p>
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
                    className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:text-slate-900 text-base rounded-lg block w-1/3 p-2.5"
                    placeholder="+54"
                    {...register("codeL", {
                      required: true,
                    })}
                  />
                  <input
                    name="phoneProvider"
                    type="number"
                    id="phoneProvider"
                    className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:text-slate-900 text-base rounded-lg block w-2/3 p-2.5"
                    placeholder="1193475762"
                    {...register("phoneProvider", {
                      required: true,
                    })}
                  />
                </div>
                <div className="flex gap-x-4">
                  <div className="block w-1/3">
                    {errors.codeL && (
                      <p className="text-red-300 text-xs">
                        {errors.codeL.message}
                      </p>
                    )}
                  </div>
                  <div className="block w-2/3">
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
                Adjunta una foto de perfil (opcional)
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
                name="photo"
                id="photo"
                accept=".png, .jpg, .jpeg"
                {...register("photo")}
              />
              <div className="flex gap-x-4">
                {errors.photo ? (
                  <p className="text-red-300 text-sm">{errors.photo.message}</p>
                ) : (
                  <p
                    className="mt-1 text-sm text-gray-300 dark:text-gray-900"
                    id="photo_help"
                  >
                    JPG ,JPGE ,PNG o WEBP (5MB Max).
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
                <label className="ml-2 text-xs" htmlFor="checkbox">
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
        </article>
      </div>
    </section>
  );
};

export default ProviderRegister;