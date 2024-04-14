import { useSectionInView } from "../hooks/useSectionInView";
import { motion } from "framer-motion";
export default function Faq() {

  const { ref } = useSectionInView("FAQ", 0.75);

  return (
    <motion.section id="faq" ref={ref}>
      <section className="bg-zinc-700 h-screen w-full flex justify-center items-center">
        <div className="relative w-full bg-zinc-600 px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
          <div className="mx-auto px-5">
            <div className="flex flex-col items-center">
              <h2 className="mt-5 text-center text-white text-3xl font-bold tracking-tight md:text-5xl">
                Preguntas frecuentes
              </h2>
            </div>
            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              <div className="m-2 p-5 bg-white rounded-lg">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-zinc-800">
                    <span> Pregunta frecuente</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum incidunt sequi quia laboriosam omnis fuga id
                    praesentium doloremque nobis porro facilis illo, rerum tempora
                    nisi cumque asperiores ab eius qui.
                  </p>
                </details>
              </div>
              <div className="m-2 p-5 bg-white rounded-lg">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-zinc-800">
                    <span> Pregunta frecuente</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum incidunt sequi quia laboriosam omnis fuga id
                    praesentium doloremque nobis porro facilis illo, rerum tempora
                    nisi cumque asperiores ab eius qui.
                  </p>
                </details>
              </div>
              <div className="m-2 p-5 bg-white rounded-lg">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-zinc-800">
                    <span> Pregunta frecuente</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum incidunt sequi quia laboriosam omnis fuga id
                    praesentium doloremque nobis porro facilis illo, rerum tempora
                    nisi cumque asperiores ab eius qui.
                  </p>
                </details>
              </div>
              <div className="m-2 p-5 bg-white rounded-lg">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-zinc-800">
                    <span> Pregunta frecuente</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum incidunt sequi quia laboriosam omnis fuga id
                    praesentium doloremque nobis porro facilis illo, rerum tempora
                    nisi cumque asperiores ab eius qui.
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
