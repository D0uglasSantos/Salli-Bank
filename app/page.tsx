"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    // Simular um pequeno atraso para dar feedback visual
    setTimeout(() => {
      router.push("/dashboard")
    }, 800)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a1a2a]">
      {/* Background image */}
      <Image src="/background-login.jpg" alt="Background" fill className="object-cover z-0" priority />

      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-2 z-10">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.5 12.5L10.5 14.5L15.5 9.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-white text-xs">02:52 am</div>
        </div>
        <div className="text-white text-xs">82%</div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      <div className="relative flex flex-col items-center justify-center h-full z-10 px-8">
        {/* Logo */}
        <div className="mb-4 flex flex-col items-center justify-center">
          <Image src="/logo.svg" alt="Salli Bank Logo" width={80} height={80} className="mb-2" />
          <div className="text-center">
            <span className="text-white text-2xl font-bold">Salli</span>
            <span className="text-gray-300 text-2xl"> Bank</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full max-w-xs flex flex-col gap-4 mt-8">
          <button
            className="w-full py-3 rounded-full border border-gray-300 text-white font-medium hover:bg-gray-300 hover:text-[#0a1a2a]"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <button className="w-full py-3 rounded-full bg-[#f5f2e3] text-[#0a1a2a] font-medium" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
