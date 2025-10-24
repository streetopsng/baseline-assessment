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

        <main className="flex-1 flex items-center justify-center md:mt-[-150px] px-4 py-12">
          <div className="text-center ">
            {/* Main heading */}
            <h1 className="md:text-5xl  mb-6 text-white ">
              Empowering you to Learn, Build, and Excel.
            </h1>

            {/* Subheading */}
            <p className=" text-gray-300 mb-12 text-balance">
              Stay on track with weekly lessons, resources, and schedules designed to <br /> help you reach your goals faster.
            </p>

            <button className="bg-[#FB030C] p-2">
              Start here
            </button>
            {/* Role Selection Modal */}
            {/* <RoleSelectionModal selectedRole={selectedRole} setSelectedRole={setSelectedRole} /> */}
          </div>
        </main>
      </div>
    </div>
  )
}
