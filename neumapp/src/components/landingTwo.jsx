import React from "react";
import { Button } from "@nextui-org/react";
const LandingTwo = () => {
  return (
    <section className="bg-zinc-700 mt-12 sm:h-auto sm:mt-28 flex justify-center items-center sm:text-start text-center">
      <div className=" w-full flex flex-wrap-reverse sm:flex-nowrap justify-center content-between gap-5">
        <div className=" w-3/4 sm:w-full lg:mr-16">
          <div className="h-52 rounded-3xl  sm:min-h-[52vh] lg:min-h-[70vh] bg-cover bg-center bg-default-400 flex justify-center items-center">
            <h4 className=" text-white text-4xl">image</h4>
          </div>
          {/* <img
            className="w-full max-h-screen rounded-3xl"
            src="https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg"
            alt="banner"
          ></img> */}
        </div>

        <div className="w-full p-5 sm:w-1/2 sm:mx-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl">
            Titulos de esta sección
          </h1>
          <p className=" text-white mt-6 text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            alias autem dolores tempore dolorem fuga ut vero asperiores amet
            eius molestias illum maiores similique sint recusandae. Laborum a
            nesciunt quis.
          </p>
          <div className="my-8">
            <Button
              color="default"
              size="lg"
              radius="full"
              className=" w-unit-5xl py-unit-7 sm:w-unit-6xl"
            >
              button
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandingTwo;
