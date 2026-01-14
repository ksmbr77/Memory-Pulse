import { Volume2 } from "lucide-react";

const universities = [
  { name: "nature", subtitle: "neuro", bg: "bg-emerald-700" },
  { name: "HARVARD", subtitle: "UNIVERSITY", bg: "bg-red-800" },
  { name: "COLUMBIA", subtitle: "UNIVERSITY", bg: "bg-blue-800" },
  { name: "JNeurosci", subtitle: "The Journal", bg: "bg-cyan-700" },
  { name: "Nalanda", subtitle: "UNIVERSITY", bg: "bg-amber-700" },
];

const VSLPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            <span className="text-foreground">Si Tienes Más de 50 y </span>
            <span className="text-accent underline decoration-accent">
              Olvidas Nombres o Pierdes las Llaves
            </span>
            <span className="text-foreground">...</span>
          </h1>

          {/* Red Banner */}
          <div className="bg-primary text-primary-foreground py-3 px-6 rounded-sm mb-4">
            <p className="text-lg md:text-xl font-bold">
              Este Video Podría Salvarte de un Futuro Devastador"
            </p>
          </div>

          {/* Subheadline */}
          <p className="text-muted-foreground text-sm md:text-base mb-8">
            La causa del deterioro cerebral <span className="underline text-foreground font-semibold">NO ES LA EDAD</span>. Es esto...
          </p>

          {/* Video Player Container */}
          <div className="max-w-[400px] mx-auto mb-4">
            <div className="relative bg-card rounded-lg overflow-hidden border border-border" style={{ paddingTop: '144%' }}>
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
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Volume2 className="w-5 h-5 text-muted-foreground" />
            <span>
              Quédate hasta el final para{" "}
              <span className="text-foreground font-semibold">
                probar esta revolucionaria tecnología
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Scientific References Section */}
      <section className="bg-secondary py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-foreground font-semibold mb-6 text-sm md:text-base">
            Referencias Científicas y Estudios Clínicos:
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {universities.map((uni, index) => (
              <div
                key={index}
                className={`${uni.bg} w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center text-white`}
              >
                <span className="text-xs md:text-sm font-bold leading-tight">{uni.name}</span>
                <span className="text-[8px] md:text-[10px] opacity-80">{uni.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Testimonial Section */}
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-xl p-6 text-center border border-border">
            {/* Doctor Avatar */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-800 overflow-hidden border-2 border-border">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face"
                  alt="Dr. James Mendoza"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Verified Badge */}
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Doctor Info */}
            <h3 className="text-foreground font-bold text-lg mb-1">DR. JAMES MENDOZA</h3>
            <p className="text-accent text-sm mb-4">Neurocientífico</p>

            {/* Quote */}
            <div className="relative">
              <span className="text-primary text-3xl font-serif absolute -left-2 -top-2">"</span>
              <p className="text-muted-foreground italic text-sm px-4">
                No se trata de hacer más... sino de pensar mejor.
              </p>
              <span className="text-primary text-3xl font-serif absolute -right-2 -bottom-4">"</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-foreground text-sm font-medium mb-1">
            Copyright 2026 – Memory Pulse ®
          </p>
          <p className="text-muted-foreground text-xs mb-4">
            Todos los Derechos Reservados
          </p>

          {/* Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
              Términos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
              Privacidad
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-muted-foreground text-[10px] leading-relaxed max-w-xl mx-auto">
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
