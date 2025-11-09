"use client"
import { useUserDetailsStore } from "@/app/store/useUserDetailsStore"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Header() {

  const {userState} = useUserDetailsStore()
  const router = useRouter()
  return (
    <header className="">
      <div className="max-w-6xl mx-auto md:mt-[100px] md:mb-[-0px] mt-[20px] px-8 flex items-center justify-between">
        <div className="">
          <img src="/red-logo.png" alt="StreetOps Logo" className="md:h-[30px] h-[25px]" />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
          {/* <span className="text-sm text-slate-700">Welcome, {userState && userState.firstName}</span> */}
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
              {/* <AvatarFallback>JD</AvatarFallback> */}
            </Avatar>
          </div>
          <Button
          onClick={()=> {
            localStorage.clear()
            router.push("/")
          }}
          variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
