import { Volume2, Check, ChevronDown, ChevronUp, ThumbsUp, Heart } from "lucide-react";
import doctorImage from "@/assets/doctor-james.png";
import { useState, useEffect } from "react";

const universities = [
  { name: "nature", subtitle: "neuro", bg: "bg-green-600" },
  { name: "HARVARD", subtitle: "UNIVERSITY", bg: "bg-red-700" },
  { name: "COLUMBIA", subtitle: "UNIVERSITY", bg: "bg-blue-700" },
  { name: "JNeurosci", subtitle: "THE JOURNAL", bg: "bg-cyan-600" },
  { name: "Nalanda", subtitle: "UNIVERSITY", bg: "bg-orange-500" },
];

const benefits = [
  "Escucha, la onda MEMORY PULSE comienza a limpiar tu mente desde el primer uso",
  "La activación gamma sincroniza tus pensamientos",
  "Mejora tu enfoque y te hace sentir mentalmente renovado",
  "Desbloquea habilidades dormidas",
  "Recupera tu agudeza mental sin suplementos ni ejercicios",
  "MEMORY PULSE no es magia ni meditación: es ciencia neurológica diseñada para activar tu poder mental latente",
  "Vas a notar cómo tu mente se aclara, tu energía mejora",
  "Siente que recuperas el control total de tu capacidad mental",
];

const bonus1Benefits = [
  "Aprende algo nuevo y guardalo en tu memoria en solo 60 segundos",
  "Funciona mientras haces fila, cocinas o tomas café",
  "Convierte lo nuevo en memoria de largo plazo",
  "Olvidarse ya no es una opción",
];

const bonus2Benefits = [
  "Descubre qué alimentos comunes están saboteando tu memoria y siguen en tu carrito de compras.",
  "Con solo aplicar uno de los trucos, vas a ahorrar dinero y alimentar mejor a tu cerebro.",
  "Come más inteligente, piensa más claro y gasta menos.",
  "No importa dónde compres, estos errores son universales y este plan los soluciona.",
];

const comments = [
  {
    name: "Alejandro Fernandez",
    text: "Memory Pulse es una guía excepcional para aprender cómo alinear tus pensamientos, emociones y acciones para lograr mejorar la agudeza mental. La activación gamma sincroniza tus pensamientos, mejora tu enfoque y te hace sentir mentalmente renovado.",
    time: "hace un momento",
    likes: 59,
  },
  {
    name: "Ana Villa",
    text: "Aprendés más rápido que antes, incluso superando a personas mucho más jóvenes....Wuuu!!!",
    time: "3 min",
    likes: 39,
  },
  {
    name: "Sofia Robles",
    text: "Mi marido no creía que esto fuera posible, así que sin avisarle decidí arriesgarme y confiar. Estoy sin palabras, ahora él quiere que le enseñe cómo es que mi vida dio un giro 360°...",
    time: "5 min",
    likes: 112,
  },
  {
    name: "Juan Calderón",
    text: "Memory Pulse no es solo un curso, es una experiencia vas a notar cómo tu mente se aclara, tu energía mejora y sentís que recuperás el control total de tu capacidad mental.",
    time: "8 min",
    likes: 92,
  },
  {
    name: "Gabriela Herrera",
    text: "AMIGOS...Esto es fantástico. Lo usé una vez y sentí como si mi mente se despejara por completo. ¡No recordaba pensar con tanta claridad desde hace años",
    time: "15 min",
    likes: 45,
  },
  {
    name: "Carolina Sanchez",
    text: "¡No sé cómo es que esto está tan barato! deberías subirle el precio. Literal me cambiaste la vida!",
    time: "19 min",
    likes: 95,
  },
  {
    name: "Alejandro Felipe",
    text: "He pasado por muchos cursos, pero con Memory Pulse mi productividad se duplicó. Siento como si tuviera una hora extra cada día, y mi cabeza no se agota.",
    time: "21 min",
    likes: 119,
  },
  {
    name: "Maria D' Castillo",
    text: "¿en verdad este método funciona?",
    time: "31 min",
    likes: 67,
    replies: [
      {
        name: "Maria Larco",
        text: "María D' Castillo Me encontraba igual que tú, muy incrédula, pero perdía más no intentándolo...ahora vivo super feliz al lado de mis familia. Antes dependía de suplementos para concentrarme. Con esto, es como si mi cerebro se activara solo.",
        time: "35 min",
        likes: 45,
      },
      {
        name: "Ellen Xiau",
        text: "María D' Castillo me ha enseñado a creer en mí misma y en mis capacidades para lograr cualquier cosa que me proponga...este programa es una bendición en mi vida.",
        time: "41 min",
        likes: 63,
      },
      {
        name: "María D' Castillo",
        text: "Muchas Gracias sus comentarios me dan animo, lo intentaré 😊",
        time: "42 min",
        likes: 85,
      },
    ],
  },
  {
    name: "Luis Miguel Lora",
    text: "Si buscas un curso que te ayude a transformar tu vida en todos los sentidos, Memory Pulse es definitivamente la respuesta.",
    time: "51 min",
    likes: 57,
  },
  {
    name: "Vielka Villacorta",
    text: "Pagaría hasta 500 dólares por este programa, en verdad me cambió la vida y de mi familia.",
    time: "1h",
    likes: 39,
  },
  {
    name: "Mónica Sanchez",
    text: "Gracias a Memory Pulse, estoy leyendo y reteniendo información como nunca antes. Lo recomiendo a todos mis alumnos.",
    time: "2h",
    likes: 26,
  },
];

const faqs = [
  {
    question: "¿Qué es MEMORY PULSE?",
    answer: "MEMORY PULSE es un programa de ciencia neurológica diseñado para activar tu poder mental latente. Utiliza tecnología de ondas gamma para sincronizar tus pensamientos y mejorar tu enfoque mental.",
  },
  {
    question: "¿Cómo realizar el pago?",
    answer: "El pago se realiza de forma segura a través de Hotmart. Aceptamos Visa, Mastercard, American Express y PayPal. Tu información está 100% protegida.",
  },
  {
    question: "¿Como accedo al contenido del programa?",
    answer: "Inmediatamente después de tu compra, recibirás un email con tus credenciales de acceso. Podrás acceder desde cualquier dispositivo, en cualquier momento.",
  },
  {
    question: "¿Ofrecen garantía?",
    answer: "Sí, ofrecemos una garantía de satisfacción de 7 días. Si no estás satisfecho con el programa, te devolvemos el 100% de tu dinero sin hacer preguntas.",
  },
  {
    question: "¿En cuanto tiempo tendré resultados?",
    answer: "Muchos usuarios reportan mejoras desde la primera sesión. Los resultados significativos generalmente se observan entre la primera y segunda semana de uso constante.",
  },
  {
    question: "¿Que pasa si tengo preguntas?",
    answer: "Tendrás acceso a nuestro soporte por email donde responderemos todas tus dudas en menos de 24 horas.",
  },
  {
    question: "¿Qué es el grupo VIP?",
    answer: "El grupo VIP es una comunidad exclusiva donde compartimos contenido adicional, sesiones en vivo y soporte personalizado con otros miembros del programa.",
  },
];

const CHECKOUT_URL = "https://pay.hotmart.com/F103870284C?checkoutMode=10";
const OFFER_TIME_SECONDS = 24 * 60 + 50; // 24:50 in seconds

const VSLPage = () => {
  const [showOffer, setShowOffer] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Show offer after 24:50 (for demo, we'll show it immediately or use a timer)
    // In production, this would listen to Vturb video events
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, OFFER_TIME_SECONDS * 1000);

    // For testing, also show immediately if URL has ?show=true
    if (window.location.search.includes('show=true')) {
      setShowOffer(true);
    }

    return () => clearTimeout(timer);
  }, []);

  // For demo purposes, let's show the offer section
  useEffect(() => {
    setShowOffer(true);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="px-4 pt-6 pb-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight mb-3">
            <span className="text-white">Si Tienes Más de 50 y </span>
            <span className="text-red-500 underline decoration-red-500 decoration-2 underline-offset-2">
              Olvidas Nombres o Pierdes las Llaves
            </span>
            <span className="text-white">...</span>
          </h1>

          {/* Red Banner */}
          <div className="bg-red-600 text-white py-3 px-4 mb-3">
            <p className="text-sm sm:text-base md:text-lg font-bold leading-snug">
              Este Video Podría Salvarte de un Futuro Devastador"
            </p>
          </div>

          {/* Subheadline */}
          <p className="text-gray-400 text-xs sm:text-sm mb-6">
            La causa del deterioro cerebral <span className="text-white font-semibold underline">NO ES LA EDAD</span>. Es esto...
          </p>

          {/* Video Player Container */}
          <div className="max-w-[320px] sm:max-w-[400px] mx-auto mb-4">
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
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400 mb-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
            </div>
            <span className="text-center">
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
          <h2 className="text-gray-800 font-semibold mb-5 text-xs sm:text-sm">
            Referencias Científicas y Estudios Clínicos:
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {universities.map((uni, index) => (
              <div
                key={index}
                className={`${uni.bg} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center text-white shadow-md`}
              >
                <span className="text-[8px] sm:text-[10px] md:text-xs font-bold leading-tight text-center px-1">{uni.name}</span>
                <span className="text-[6px] sm:text-[7px] md:text-[8px] opacity-90 uppercase">{uni.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Testimonial Section */}
      <section className="py-8 sm:py-10 px-4 bg-black">
        <div className="max-w-xs sm:max-w-sm mx-auto">
          <div className="bg-[#1a1f2e] rounded-2xl p-6 sm:p-8 text-center border border-[#2a3040]">
            {/* Doctor Avatar */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full border-[3px] border-cyan-500/60"></div>
              <div className="absolute inset-[6px] rounded-full overflow-hidden bg-gray-800">
                <img
                  src={doctorImage}
                  alt="Dr. James Mendoza"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide mb-1">DR. JAMES MENDOZA</h3>
            <p className="text-cyan-400 text-xs sm:text-sm mb-6">Neurocientífico</p>

            <div className="relative bg-[#0d1117] rounded-lg p-4 sm:p-5">
              <span className="text-cyan-400 text-2xl sm:text-3xl font-bold absolute left-2 sm:left-3 top-2 leading-none">"</span>
              <p className="text-gray-300 italic text-xs sm:text-sm leading-relaxed px-3 sm:px-4">
                No se trata de hacer más... sino de pensar mejor.
              </p>
              <span className="text-cyan-400 text-2xl sm:text-3xl font-bold absolute right-2 sm:right-3 bottom-1 leading-none">"</span>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section - Shows after 24:50 */}
      {showOffer && (
        <>
          {/* Pricing Section */}
          <section className="py-10 sm:py-16 px-4 bg-black">
            <div className="max-w-xl mx-auto text-center">
              {/* Title */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  <span className="bg-sky-500 text-white px-3 py-1 inline-block">ACCEDE HOY A LA TECNOLOGÍA MEMORY PULSE</span>
                </h2>
                <p className="bg-sky-500 text-white text-xl sm:text-2xl md:text-3xl font-bold px-3 py-1 mt-1 inline-block">POR:</p>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <p className="text-cyan-400 text-lg sm:text-xl italic mb-2">
                  <span className="line-through">NORMAL: 169,00 $USD</span>
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  <span className="bg-green-500 text-white px-4 py-2 inline-block">HOY: 37,00$USD</span>
                </p>
                <p className="text-gray-400 text-base sm:text-lg italic">
                  Mañana: 49,00$USD
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-base sm:text-lg md:text-xl py-4 px-6 sm:px-10 rounded-full shadow-lg shadow-yellow-400/30 transition-all hover:scale-105 mb-4"
              >
                ¡SÍ, QUIERO RECUPERAR MI AGUDEZA MENTAL!
              </a>

              {/* Add to Cart Link */}
              <p className="text-cyan-400 underline text-sm sm:text-base mb-6 cursor-pointer hover:text-cyan-300">
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  Agregar al Carrito
                </a>
              </p>

              {/* Payment Methods */}
              <div className="flex justify-center items-center gap-3 sm:gap-4">
                <span className="text-white font-bold text-sm sm:text-base">VISA</span>
                <div className="w-8 h-5 sm:w-10 sm:h-6 bg-gradient-to-r from-red-500 to-yellow-500 rounded flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-600 rounded-full opacity-80"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full -ml-1 sm:-ml-2 opacity-80"></div>
                </div>
                <div className="bg-blue-600 text-white text-[8px] sm:text-[10px] px-2 py-1 rounded font-bold">
                  AMERICAN EXPRESS
                </div>
                <span className="text-blue-600 font-bold text-sm sm:text-base bg-white px-2 py-1 rounded">PayPal</span>
              </div>
            </div>
          </section>

          {/* What You'll Receive Section */}
          <section className="py-10 sm:py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
                <span className="text-gray-900 italic">TODO LO QUE </span>
                <span className="bg-yellow-400 text-gray-900 px-2">RECIBIRÁS</span>
                <span className="text-gray-900 italic"> HOY:</span>
              </h2>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-cyan-500 italic mb-8">
                MEMORY PULSE + BONOS
              </h3>

              {/* Product Box Placeholder */}
              <div className="w-40 h-48 sm:w-48 sm:h-56 mx-auto mb-8 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <p className="font-bold text-sm sm:text-base">MEMORY</p>
                  <p className="font-bold text-sm sm:text-base">PULSE</p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-3 sm:space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 text-sm sm:text-base">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Value Badge */}
              <div className="text-center">
                <span className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 text-sm sm:text-base inline-block">
                  <span className="line-through">VALOR $249 USD</span>
                </span>
              </div>
            </div>
          </section>

          {/* Bonus 1 Section */}
          <section className="py-10 sm:py-16 px-4 bg-gray-100">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 italic">
                BONO #1: AHORRADOR DE MEMORIA DE 1 MINUTO
              </h2>

              {/* Bonus Box Placeholder */}
              <div className="w-40 h-48 sm:w-48 sm:h-56 mx-auto mb-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjJkM2VlIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')] opacity-30"></div>
                <div className="text-center text-white relative z-10">
                  <p className="text-xs sm:text-sm text-cyan-400">AHORRADOR DE</p>
                  <p className="font-bold text-sm sm:text-base">MEMORIA</p>
                  <p className="text-xs text-cyan-400">DE UN MINUTO</p>
                </div>
              </div>

              {/* Bonus Benefits */}
              <div className="space-y-3 sm:space-y-4 mb-8">
                {bonus1Benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3 justify-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 text-sm sm:text-base">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Value */}
              <div className="text-center">
                <span className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 text-sm sm:text-base inline-block mb-2">
                  <span className="line-through">VALOR $97 USD</span>
                </span>
                <p className="text-gray-900 font-bold text-sm sm:text-base">(GRÁTIS Uniéndote al Programa)</p>
              </div>
            </div>
          </section>

          {/* Bonus 2 Section */}
          <section className="py-10 sm:py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-cyan-500 italic">
                BONO #2: GUÍA DE COMPRAS INTELIGENTE
              </h2>

              {/* Bonus Box Placeholder */}
              <div className="w-32 h-44 sm:w-40 sm:h-52 mx-auto mb-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-sm flex items-center justify-center shadow-xl overflow-hidden relative">
                <div className="text-center text-white relative z-10 p-2">
                  <p className="text-[10px] sm:text-xs text-cyan-400 font-bold">GUÍA DE COMPRAS</p>
                  <p className="font-bold text-xs sm:text-sm">INTELIGENTE</p>
                </div>
              </div>

              {/* Bonus Benefits */}
              <div className="space-y-3 sm:space-y-4 mb-8">
                {bonus2Benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3 justify-center text-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 text-sm sm:text-base text-left">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Value */}
              <div className="text-center">
                <span className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 text-sm sm:text-base inline-block mb-2">
                  <span className="line-through">VALOR $147 USD</span>
                </span>
                <p className="text-gray-900 font-bold text-sm sm:text-base">(GRÁTIS Uniéndote al Programa)</p>
              </div>
            </div>
          </section>

          {/* Social Proof / Comments Section */}
          <section className="py-10 sm:py-16 px-4 bg-gray-50">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-3 sm:p-4 border-b border-gray-200">
                  <p className="text-gray-600 text-xs sm:text-sm">Mostrando {comments.length} comentarios</p>
                </div>

                <div className="divide-y divide-gray-100">
                  {comments.map((comment, index) => (
                    <div key={index} className="p-3 sm:p-4">
                      <div className="flex gap-2 sm:gap-3">
                        {/* Avatar */}
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center text-gray-600 font-bold text-xs sm:text-sm">
                          {comment.name.charAt(0)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-blue-600 text-xs sm:text-sm">{comment.name}</p>
                          <p className="text-gray-800 text-xs sm:text-sm mt-1">{comment.text}</p>
                          
                          <div className="flex items-center gap-3 sm:gap-4 mt-2 text-[10px] sm:text-xs text-gray-500">
                            <span className="text-blue-600 cursor-pointer hover:underline">Me gusta</span>
                            <span className="text-blue-600 cursor-pointer hover:underline">Responder</span>
                            <span>{comment.time}</span>
                          </div>

                          {/* Replies */}
                          {comment.replies && (
                            <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 pl-2 sm:pl-4 border-l-2 border-gray-200">
                              {comment.replies.map((reply, replyIndex) => (
                                <div key={replyIndex} className="flex gap-2 sm:gap-3">
                                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center text-gray-600 font-bold text-[10px] sm:text-xs">
                                    {reply.name.charAt(0)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-blue-600 text-[10px] sm:text-xs">{reply.name}</p>
                                    <p className="text-gray-800 text-[10px] sm:text-xs mt-1">{reply.text}</p>
                                    <div className="flex items-center gap-2 sm:gap-3 mt-1 text-[9px] sm:text-[10px] text-gray-500">
                                      <span className="text-blue-600 cursor-pointer">Me gusta</span>
                                      <span className="text-blue-600 cursor-pointer">Responder</span>
                                      <span>{reply.time}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-400">
                                    <ThumbsUp className="w-3 h-3" />
                                    <Heart className="w-3 h-3 text-red-500" />
                                    <span>{reply.likes}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Likes */}
                        <div className="flex items-start gap-1 text-[10px] sm:text-xs text-gray-400">
                          <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                          <span>{comment.likes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 sm:p-4 border-t border-gray-200 text-center">
                  <p className="text-gray-500 text-xs sm:text-sm">Debes iniciar sesión para dejar un comentario.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-10 sm:py-16 px-4 bg-black">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10">
                <span className="text-white italic">CONSULTE LAS PREGUNTAS MÁS </span>
                <span className="bg-cyan-500 text-white px-2">FRECUENTES</span>
              </h2>

              <div className="space-y-2 sm:space-y-3 mb-8 sm:mb-10">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-sky-500 rounded overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-3 sm:p-4 text-left"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span className="text-white font-medium text-xs sm:text-sm md:text-base">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-white text-xs sm:text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <div className="text-center">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-sm sm:text-lg md:text-xl py-3 sm:py-4 px-6 sm:px-10 rounded-full shadow-lg shadow-yellow-400/30 transition-all hover:scale-105 mb-6"
                >
                  ¡SÍ, QUIERO ACCEDER Y DESBLOQUEAR MI CLARIDAD MENTAL!
                </a>

                {/* Payment Methods */}
                <div className="flex justify-center items-center gap-3 sm:gap-4">
                  <span className="text-white font-bold text-xs sm:text-sm">VISA</span>
                  <div className="w-6 h-4 sm:w-8 sm:h-5 bg-gradient-to-r from-red-500 to-yellow-500 rounded flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full opacity-80"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full -ml-1 opacity-80"></div>
                  </div>
                  <div className="bg-blue-600 text-white text-[6px] sm:text-[8px] px-1 sm:px-2 py-0.5 sm:py-1 rounded font-bold">
                    AMEX
                  </div>
                  <span className="text-blue-600 font-bold text-xs sm:text-sm bg-white px-1 sm:px-2 py-0.5 sm:py-1 rounded">PayPal</span>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 border-t border-gray-800 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white text-xs sm:text-sm font-medium mb-1">
            Copyright 2026 – Memory Pulse ®
          </p>
          <p className="text-gray-500 text-[10px] sm:text-xs mb-4">
            Todos los Derechos Reservados
          </p>

          {/* Links */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <a href="#" className="text-gray-500 hover:text-white text-[10px] sm:text-xs transition-colors">
              Términos de Uso
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-[10px] sm:text-xs transition-colors">
              Privacidad
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-600 text-[8px] sm:text-[10px] leading-relaxed max-w-xl mx-auto">
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
