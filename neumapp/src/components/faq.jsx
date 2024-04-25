import { useSectionInView } from "../hooks/useSectionInView";
import { motion } from "framer-motion";
export default function Faq() {
  const { ref } = useSectionInView("FAQ", 0.75);

  return (
    <motion.section id="faq" ref={ref} className="scroll-mt-40 sm:scroll-mt-32">

      <section className="h-[90%] w-full flex justify-center ">
        <div className="relative w-full px-6 mb-24 mt-6 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10 " >
          <div className="mx-auto px-5">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl lg:text-5xl text-secondInk text-center font-bold  text-shadow-lg shadow-firstShadow-300/15">
                Preguntas frecuentes
              </h3>
            </div>
            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              <div className="m-2 p-5 bg-firstInk-800 rounded-lg">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-secondInk-100">
                    <span>¿ Cómo me registro ?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-secondInk-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum incidunt sequi quia laboriosam omnis fuga id
                    praesentium doloremque nobis porro facilis illo, rerum
                    tempora nisi cumque asperiores ab eius qui.
                  </p>
                </details>
              </div>
              <div className="m-2 p-5 bg-firstInk-800 rounded-lg">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-secondInk-100">
                    <span>¿ Cómo son los medios de pago ?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-secondInk-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum incidunt sequi quia laboriosam omnis fuga id
                    praesentium doloremque nobis porro facilis illo, rerum
                    tempora nisi cumque asperiores ab eius qui.
                  </p>
                </details>
              </div>
              <div className="m-2 p-5 bg-firstInk-800 rounded-lg">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-secondInk-100">
                    <span>¿ Cómo me conecto con el prestador ?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-secondInk-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum incidunt sequi quia laboriosam omnis fuga id
                    praesentium doloremque nobis porro facilis illo, rerum
                    tempora nisi cumque asperiores ab eius qui.
                  </p>
                </details>
              </div>
              <div className="m-2 p-5 bg-firstInk-800 rounded-lg">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-secondInk-100">
                    <span>¿ Es segura la aplicación ?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-secondInk-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum incidunt sequi quia laboriosam omnis fuga id
                    praesentium doloremque nobis porro facilis illo, rerum
                    tempora nisi cumque asperiores ab eius qui.
                  </p>
                </details>
              </div>
              <div className="m-2 p-5 bg-firstInk-800 rounded-lg">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-secondInk-100">
                    <span>¿ Qué necesito para unirme ?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-secondInk-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum incidunt sequi quia laboriosam omnis fuga id
                    praesentium doloremque nobis porro facilis illo, rerum
                    tempora nisi cumque asperiores ab eius qui.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
