"use client";
import { Menu } from "lucide-react"

export default function LandingHeader() {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-4 md:mt-[-80px] md:mb-[-100px] md:px-8 md:py-6">
      {/* Logo */}
      <div className="">
          <img src="/logo.png" alt="StreetOps Logo" className="h-[200px]" />
        </div>

      {/* Menu icon */}
      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
        <Menu className="w-6 h-6 text-white" />
      </button>
    </header>
  )
}
