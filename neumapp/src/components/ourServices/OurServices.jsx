
import React from 'react';
import { motion } from 'framer-motion';

// Datos de los servicios, reemplaza estos con tus datos reales
const serviceData = [
  {
    id: 1,
    title: 'Servicio A',
    includes: 'Descripción de lo que incluye el Servicio A.',
    value: '$100'
  },
  {
    id: 2,
    title: 'Servicio B',
    includes: 'Descripción de lo que incluye el Servicio B.',
    value: '$200'
  },
  {
    id: 3,
    title: 'Servicio C',
    includes: 'Descripción de lo que incluye el Servicio C.',
    value: '$300'
  },
  {
    id: 4,
    title: 'Servicio D',
    includes: 'Descripción de lo que incluye el Servicio A.',
    value: '$100'
  },
  {
    id: 5,
    title: 'Servicio E',
    includes: 'Descripción de lo que incluye el Servicio B.',
    value: '$200'
  },
  {
    id: 6,
    title: 'Servicio F',
    includes: 'Descripción de lo que incluye el Servicio C.',
    value: '$300'
  },
  
];

const OurServices = () => {
  return (
    <motion.section
      id="servicios"
      className="min-h-screen flex flex-col justify-center items-center"
      style={{ background: 'rgba(67, 67, 67, 1)' }} // Estilo en línea para el color de fondo
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl my-5 sm:mb-12">
        Nuestros servicios
      </h3>
      <ul className="w-full lg:w-[1192px] grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {serviceData.map((service, index) => (
          <li
            key={service.id}
            className="w-full h-52 flex flex-col items-center justify-center rounded-3xl bg-slate-300 hover:bg-slate-500 transition-all ease-in-out duration-600 p-4"
          >
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="text-white my-2">{service.includes}</p>
            <p className="text-white mb-4">{service.value}</p>
            <button className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded">
              Solicitar
            </button>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default OurServices;
