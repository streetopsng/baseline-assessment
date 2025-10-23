"use client"

import { useState } from "react"
import Header from "@/components/LandingComponents/landing-header"
import RoleSelectionModal from "@/components/LandingComponents/role-selection-modal"

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<"facilitator" | "trainee" | null>(null)

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=workspace desk office)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="text-center max-w-2xl">
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
              Empowering you to Learn, Build, and Excel.
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-300 mb-12 text-balance">
              Stay on track with weekly lessons, resources, and schedules designed to help you reach your goals faster.
            </p>

            {/* Role Selection Modal */}
            <RoleSelectionModal selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
          </div>
        </main>
      </div>
    </div>
  )
}
