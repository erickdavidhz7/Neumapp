import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Logo from "../../images/logo/Logo.jsx";
import Upload from "../../images/upload.svg";
import { lenderSchema } from "../../schemas/auth.js";
import SelectConuntry from "./SelectConuntry.jsx";

const ProviderRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors,isValid, submitCount },
  } = useForm({
    resolver: zodResolver(lenderSchema),
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

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
                  htmlFor="name"
                  className="text-white block mb-2 text-base font-medium"
                >
                  Nombre
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  className=" bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:text-slate-900 text-base rounded-lg block w-full p-2.5"
                  placeholder="Jhon"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name && (
                  <p className="text-red-300 text-sm">{errors.name.message}</p>
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
                htmlFor="phonePersonal"
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
                    name="phonePersonal"
                    type="number"
                    id="phonePersonal"
                    className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:text-slate-900 text-base rounded-lg block w-2/3 p-2.5"
                    placeholder="1193475762"
                    {...register("phonePersonal", {
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
                    {errors.phonePersonal && (
                      <p className="text-red-300 text-xs">
                        {errors.phonePersonal.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* input Numero laboral */}

            <div className="mb-6">
              <label
                htmlFor="phoneLaboral"
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
                    name="phoneLaboral"
                    type="number"
                    id="phoneLaboral"
                    className="bg-white border border-[#33353F] placeholder-[#9CA2A9] focus:text-slate-900 text-base rounded-lg block w-2/3 p-2.5"
                    placeholder="1193475762"
                    {...register("phoneLaboral", {
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
                    {errors.phoneLaboral && (
                      <p className="text-red-300 text-xs">
                        {errors.phoneLaboral.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* input subir imagen */}
            <div className="mb-6">
              <label
                htmlFor="upload"
                className="text-white block text-base mb-2 font-medium text-center"
              >
                Adjunta una foto de perfil (opcional)
              </label>
              <div className="flex justify-center items-center w-full">
                <label htmlFor="upload" className="w-full">
                  <img src={Upload} alt="Upload" className="w-full" />
                </label>
                <input
                  name="upload"
                  type="file"
                  id="upload"
                  className="hidden"
                  {...register("upload")}
                />
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
