import { Volume2 } from "lucide-react";
import doctorImage from "@/assets/doctor-james.png";

const universities = [
  { name: "nature", subtitle: "neuro", bg: "bg-green-600" },
  { name: "HARVARD", subtitle: "UNIVERSITY", bg: "bg-red-700" },
  { name: "COLUMBIA", subtitle: "UNIVERSITY", bg: "bg-blue-700" },
  { name: "JNeurosci", subtitle: "THE JOURNAL", bg: "bg-cyan-600" },
  { name: "Nalanda", subtitle: "UNIVERSITY", bg: "bg-orange-500" },
];

const VSLPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="px-4 pt-6 pb-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-xl md:text-2xl font-bold leading-tight mb-3">
            <span className="text-white">Si Tienes Más de 50 y </span>
            <span className="text-cyan-400 underline decoration-cyan-400 decoration-2 underline-offset-2">
              Olvidas Nombres o Pierdes las Llaves
            </span>
            <span className="text-white">...</span>
          </h1>

          {/* Red Banner */}
          <div className="bg-red-600 text-white py-3 px-4 mb-3">
            <p className="text-base md:text-lg font-bold leading-snug">
              Este Video Podría Salvarte de un Futuro Devastador"
            </p>
          </div>

          {/* Subheadline */}
          <p className="text-gray-400 text-sm mb-6">
            La causa del deterioro cerebral <span className="text-white font-semibold underline">NO ES LA EDAD</span>. Es esto...
          </p>

          {/* Video Player Container */}
          <div className="max-w-[400px] mx-auto mb-4">
            <div className="relative bg-black rounded-md overflow-hidden border border-gray-700" style={{ paddingTop: '144%' }}>
              <iframe
                src="https://scripts.converteai.net/c769c542-d617-489a-9826-dbd8c5007327/players/6967db5616e3821ec3e1e962/v4/embed.html"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; encrypted-media"
                referrerPolicy="origin"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* Audio Notice */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <Volume2 className="w-4 h-4 text-red-500" />
            </div>
            <span>
              Quédate hasta el final para{" "}
              <span className="text-white font-semibold">
                probar esta revolucionaria tecnología
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Scientific References Section */}
      <section className="bg-gray-100 py-6 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-gray-800 font-semibold mb-5 text-sm">
            Referencias Científicas y Estudios Clínicos:
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {universities.map((uni, index) => (
              <div
                key={index}
                className={`${uni.bg} w-14 h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center text-white shadow-md`}
              >
                <span className="text-[10px] md:text-xs font-bold leading-tight text-center px-1">{uni.name}</span>
                <span className="text-[7px] md:text-[8px] opacity-90 uppercase">{uni.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Testimonial Section */}
      <section className="py-10 px-4 bg-black">
        <div className="max-w-sm mx-auto">
          <div className="bg-[#1a1f2e] rounded-2xl p-8 text-center border border-[#2a3040]">
            {/* Doctor Avatar */}
            <div className="relative w-28 h-28 mx-auto mb-5">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-[3px] border-cyan-500/60"></div>
              {/* Inner image container */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden bg-gray-800">
                <img
                  src={doctorImage}
                  alt="Dr. James Mendoza"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Verified Badge */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Doctor Info */}
            <h3 className="text-white font-bold text-xl tracking-wide mb-1">DR. JAMES MENDOZA</h3>
            <p className="text-cyan-400 text-sm mb-6">Neurocientífico</p>

            {/* Quote Box */}
            <div className="relative bg-[#0d1117] rounded-lg p-5">
              <span className="text-cyan-400 text-3xl font-bold absolute left-3 top-2 leading-none">"</span>
              <p className="text-gray-300 italic text-sm leading-relaxed px-4">
                No se trata de hacer más... sino de pensar mejor.
              </p>
              <span className="text-cyan-400 text-3xl font-bold absolute right-3 bottom-1 leading-none">"</span>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for Offer Section - Will be added when Vturb video is ready */}
      {/* This section will include: pricing, CTA button, payment methods, bonuses, FAQ, etc. */}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white text-sm font-medium mb-1">
            Copyright 2026 – Memory Pulse ®
          </p>
          <p className="text-gray-500 text-xs mb-4">
            Todos los Derechos Reservados
          </p>

          {/* Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">
              Términos de Uso
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">
              Privacidad
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-600 text-[10px] leading-relaxed max-w-xl mx-auto">
            Este sitio no forma parte del sitio web de Facebook o de Meta Platforms, Inc. y NO está
            respaldado por Facebook de ninguna manera. Facebook es una marca comercial de Meta
            Platforms, Inc. Queda estrictamente prohibida la reproducción, distribución o modificación
            total o parcial de este sitio web y de los materiales relacionados. Este sitio web y todos sus
            contenidos están protegidos por las leyes de derechos de autor y propiedad intelectual de
            todos los países. El autor se reserva el derecho a reclamar daños y perjuicios si no se
            respetan estas condiciones. Se ha hecho todo lo posible para representar con exactitud este
            programa. No hay ninguna garantía de que vaya a conseguir la abundancia deseada.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VSLPage;
