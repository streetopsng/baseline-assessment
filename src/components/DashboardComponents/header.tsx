"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="">
      <div className="max-w-6xl mx-auto md:mt-[-60px] md:mb-[-80px]  flex items-center justify-between">
        <div className="">
          <img src="/logo.png" alt="StreetOps Logo" className="h-[200px]" />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-700">Welcome, John</span>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
