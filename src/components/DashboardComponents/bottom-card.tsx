"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Bell } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function BottomCards() {

  const router = useRouter()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-8 bg-white flex flex-col items-center text-center">
        <div className="bg-slate-900 p-4 rounded-lg mb-4">
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Full course schedule</h3>
        <p className="text-sm text-slate-600 mb-6">View your complete learning journey and upcoming milestones</p>
        {/* <Button 
      
        onClick={()=> router.push("https://docs.google.com/spreadsheets/d/1Zdz3gIDg7qU6AFWOhvxCre7TP4eceknGupniEP2PT9o/edit?gid=0#gid=0")}
        className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">View schedule</Button> */}
        <Link
        target="_blank"
         className="bg-red-600 hover:bg-red-700 text-white cursor-pointer p-2 rounded-md"
        href={"https://docs.google.com/spreadsheets/d/1Zdz3gIDg7qU6AFWOhvxCre7TP4eceknGupniEP2PT9o/edit?gid=0#gid=0"} >View Schedule</Link>
      </Card>

      {/* <Card className="p-8 bg-white flex flex-col items-center text-center">
        <div className="bg-slate-900 p-4 rounded-lg mb-4">
          <Bell className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Reflection</h3>
        <p className="text-sm text-slate-600 mb-6">Stay updated with important news and course updates.</p>
        <Button className="bg-red-600 hover:bg-red-700 text-white">Write</Button>
      </Card> */}
    </div>
  )
}
