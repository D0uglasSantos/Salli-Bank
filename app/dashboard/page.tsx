"use client";

// import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  PlusIcon,
  HomeIcon,
  MoreHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChartNoAxesCombinedIcon,
  MoveUpRightIcon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function DashboardPage() {
  // const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const totalCards = 3;

  // Função para navegar entre os cartões
  const navigateCard = (direction: "next" | "prev") => {
    if (carouselRef.current) {
      const cardWidth = 300; // Largura aproximada de cada cartão + espaçamento
      let newIndex = direction === "next" ? activeCard + 1 : activeCard - 1;

      // Garantir que o índice esteja dentro dos limites
      if (newIndex < 0) newIndex = 0;
      if (newIndex >= totalCards) newIndex = totalCards - 1;

      // Rolar para o cartão
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });

      setActiveCard(newIndex);
    }
  };

  // Detectar mudanças de rolagem para atualizar o indicador ativo
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const cardWidth = 300; // Largura aproximada de cada cartão + espaçamento
        const newActiveCard = Math.round(scrollPosition / cardWidth);

        if (newActiveCard !== activeCard) {
          setActiveCard(newActiveCard);
        }
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [activeCard]);

  return (
    <div className="min-h-screen bg-gray-800 text-white px-4 py-6 flex flex-col">
      {/* Status bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="h-3 w-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 12.5L10.5 14.5L15.5 9.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-white text-xs">10:00</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9.5C2 9.5 5.5 3 12 3C18.5 3 22 9.5 22 9.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="h-3 w-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 7H17M7 12H17M7 17H17"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Header with profile */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Hello, Matheus</h1>
          <p className="text-[#4a9ea8]">My wallet</p>
        </div>
        <div className="w-10 h-10 bg-white rounded-full"></div>
      </div>

      {/* Wallet card */}
      <div className="bg-gray-700 rounded-2xl p-4 mb-4 shadow-lg">
        <p className="text-gray-400 text-sm mb-2">AVAILABLE</p>
        <p className="text-4xl font-bold mb-4">$8,500</p>
        <div className="flex gap-2">
          <button className="bg-gradient-to-r from-[#4cc89f] to-[#175f40] text-white px-6 py-2 rounded-full text-sm shadow-md">
            Send
          </button>
          <button className="bg-white text-[#0a1a2a] px-6 py-2 rounded-full text-sm  shadow-md">
            request
          </button>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-gradient-to-br from-[#349675] to-[#06344b] rounded-2xl p-4 mb-4">
        <p className="text-xl mb-2">Today</p>
        <div className="flex justify-between items-center mb-2">
          <p>Purchase</p>
          <p>$2.050.-</p>
        </div>
        <div className="flex justify-between items-center mb-2">
          <p>Payment</p>
          <p>$3.500.-</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Purchase</p>
          <p>$250.-</p>
        </div>
      </div>

      {/* Cards section with carousel */}
      <div className="bg-gray-700 rounded-2xl p-4 mb-20 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-400 text-sm mb-2">MY CARDS</p>
          <div className="flex gap-2">
            <button
              onClick={() => navigateCard("prev")}
              className="w-8 h-8 rounded-full bg-[#1a5a7a] flex items-center justify-center"
              disabled={activeCard === 0}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigateCard("next")}
              className="w-8 h-8 rounded-full bg-[#1a5a7a] flex items-center justify-center"
              disabled={activeCard === totalCards - 1}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-in-out space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
          >
            {/* Card 1 - Salli Bank */}
            <div className="bg-gradient-to-br from-[#042b4a] to-[#2586b7] rounded-xl p-4 min-w-[280px] snap-start">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center">
                  <div className="mr-1">
                    <Image
                      src="/logo.svg"
                      alt="Salli Bank Logo"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-white font-bold">Salli</span>
                  <span className="text-[#d4af37] font-bold">Bank</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-[#ff0000] rounded-full"></div>
                  <div className="w-6 h-6 bg-[#ff9900] rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-1">
                <div className="w-4 h-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-white font-mono mb-2 text-xl font-bold">
                2501 1254 5957 0834
              </p>
              <div className="flex justify-between items-center">
                <p className="text-white font-mono text-sm">MATHEUS SALLI</p>
                <p className="text-white font-mono text-sm">03/28</p>
              </div>
            </div>

            {/* Card 2 - Visa */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-4 min-w-[280px] snap-start">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center">
                  <div className="mr-1">
                    <Image
                      src="/logo.svg"
                      alt="Salli Bank Logo"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-white font-bold">Salli</span>
                  <span className="text-[#d4af37] font-bold">Life</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-[#1434cb] rounded-full flex items-center justify-center text-white text-xs">
                    V
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-1">
                <div className="w-4 h-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-white font-mono mb-2 text-xl font-bold">
                4539 8219 0172 5284
              </p>
              <div className="flex justify-between items-center">
                <p className="text-white font-mono text-sm">MATHEUS SALLI</p>
                <p className="text-white font-mono text-sm">05/26</p>
              </div>
            </div>

            {/* Card 3 - Black Card */}
            <div className="bg-gradient-to-br from-[#000000] to-[#434343] rounded-xl p-4 min-w-[280px] snap-start">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center">
                  <div className="mr-1">
                    <Image
                      src="/logo.svg"
                      alt="Salli Bank Logo"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-white font-bold">Black</span>
                  <span className="text-[#d4af37] font-bold">Salli</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-[#d4af37] rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-1">
                <div className="w-4 h-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-white font-mono mb-2 text-xl font-bold">
                3782 822463 10005
              </p>
              <div className="flex justify-between items-center">
                <p className="text-white font-mono text-sm">MATHEUS SALLI</p>
                <p className="text-white font-mono text-sm">12/27</p>
              </div>
            </div>
          </div>

          {/* Indicadores de página */}
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(totalCards)].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full bg-white ${
                  activeCard === index ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.scrollTo({
                      left: index * 300,
                      behavior: "smooth",
                    });
                    setActiveCard(index);
                  }
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom navigation - Flutuante */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 flex justify-between items-center shadow-lg w-3/4">
        <button className="p-2">
          <HomeIcon className="w-6 h-6 text-black" />
        </button>
        <button className="p-2">
          <ChartNoAxesCombinedIcon  className="w-6 h-6 text-black" />
        </button>
        <button className="p-2">
          <MoveUpRightIcon className="w-6 h-6 text-black" />
        </button>
        <button className="p-2">
          <PlusIcon className="w-6 h-6 text-black" />
        </button>
        <button className="p-2">
          <MoreHorizontalIcon className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
}
