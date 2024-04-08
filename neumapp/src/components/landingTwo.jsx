import React from "react";
import { Button } from "@nextui-org/react";
const LandingTwo = () => {
  return (
    <section className="bg-zinc-700 min-h-screen flex justify-center items-center sm:text-start text-center">
      <div className=" w-full flex flex-wrap-reverse sm:flex-wrap items-center justify-center gap-5">
        <div className=" w-4/5 sm:w-1/4 m-5 ">
          <img
            className="w-full h-auto rounded-3xl"
            src="https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg"
            alt="banner"
          ></img>
        </div>

        <div className="w-full p-5 sm:w-1/2 sm:mx-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-8xl">
            Titulos de esta sección
          </h1>
          <p className=" text-white mt-6 text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            alias autem dolores tempore dolorem fuga ut vero asperiores amet
            eius molestias illum maiores similique sint recusandae. Laborum a
            nesciunt quis.
          </p>
          <div className="my-8 bg ">
            <Button
              color="default"
              size="lg"
              radius="full"
              className="w-unit-10 py-unit-7 min-w-unit-6xl"
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
