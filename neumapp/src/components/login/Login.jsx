import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "../../images/logo/Logo.jsx";
import { userSchema } from "../../schemas/auth.js";
import { FaArrowLeft, FaEyeSlash, FaEye } from "react-icons/fa";
import useAuthUser from "../../hooks/useAuthUser.jsx";
import { Link, Button } from "@nextui-org/react";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { loginUser } = useAuthUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (data) => {
    loginUser(data);
  };

  return (
    <section
      id="login"
      className="min-h-screen bg-zinc-700 flex justify-center items-center"
    >
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto gap-y-8 lg:gap-0">
        <div className="flex flex-row-reverse justify-center items-center mx-10 mt-10 lg:flex-col lg:m-0 lg:items-start">
          <section className="flex  justify-start items-center mx-auto lg:mx-0 h-full">
            <Logo width={"10vw"} color="white" />
            <span className="text-4xl lg:text-9xl text-white antialiased">
              Neumapp
            </span>
          </section>
          <Button
            href="/"
            as={Link}
            size="sm"
            variant="light"
            startContent={
              <FaArrowLeft color="white" size={30} className="mx-2 lg:mx-0" />
            }
          >
            <span className="  text-lg text-white ml-5 hidden lg:block lg:mx-5">
              Volver al Inicio
            </span>
          </Button>
          <div className="flex items-center lg:h-1/6"></div>
        </div>
        <div className="flex items-center lg:h-1/6"></div>
        <article className="h-full w-full lg:w-1/3 p-8 rounded-2xl">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("email")}
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
                {...register("password")}
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
                <p className="text-red-300 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-6 flex justify-end">
              <Link
                href="/recuperar"
                className="ml-2 text-primary font-semibold"
              >
                Olvidé mi contraseña
              </Link>
            </div>
            <button
              type="submit"
              className="bg-[#929292] hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Ingresar
            </button>
          </form>
          <div className="text-center mt-4">
            <span className="text-white">
              ¿Aún no tienes una cuenta?{" "}
              <Link
                className="ml-2 text-primary font-semibold"
                href="/registrar"
              >
                Registrate
              </Link>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Login;
