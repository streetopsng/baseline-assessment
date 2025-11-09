"use client"

import { useState } from "react"

interface RoleSelectionModalProps {
  selectedRole: "facilitator" | "trainee" | null
  setSelectedRole: (role: "facilitator" | "trainee" | null) => void
}

export default function RoleSelectionModal({ selectedRole, setSelectedRole }: RoleSelectionModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleContinue = () => {
    if (selectedRole) {
      setIsLoading(true)
      
      console.log("Selected role:", selectedRole)
    
    }
  }

  return (
    <div className="relative inline-block">
      

      {/* Modal */}
      <div className="bg-black border border-gray-800 rounded-lg p-8 md:p-12 md:px-20 max-w-md mx-auto">
        {/* Title */}
        <p className="text-white text-lg mb-8">Please select your role to continue</p>

        {/* Radio options */}
        <div className="space-y-4 mb-8 flex items-center  justify-center">
          {/* Facilitator option */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-5 h-5">
              <input
                type="radio"
                name="role"
                value="facilitator"
                checked={selectedRole === "facilitator"}
                onChange={(e) => setSelectedRole(e.target.value as "facilitator")}
                className="w-5 h-5 cursor-pointer accent-white"
              />
            </div>
            <span className="text-white group-hover:text-gray-300 transition-colors">Facilitator</span>
          </label>

          {/* Trainee option */}
          <label className="flex items-center gap-3 cursor-pointer md:mt-[-15px] md:ps-[10px]  group">
            <div className="relative w-5 h-5">
              <input
                type="radio"
                name="role"
                value="trainee"
                checked={selectedRole === "trainee"}
                onChange={(e) => setSelectedRole(e.target.value as "trainee")}
                className="w-5 h-5 cursor-pointer accent-white"
              />
            </div>
            <span className="text-white group-hover:text-gray-300 transition-colors">Trainee</span>
          </label>
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          disabled={!selectedRole || isLoading}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          {isLoading ? "Loading..." : "Continue"}
        </button>
      </div>

     
    </div>
  )
}
