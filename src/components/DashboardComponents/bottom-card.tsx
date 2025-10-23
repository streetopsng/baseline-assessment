import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Bell } from "lucide-react"

export default function BottomCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-8 bg-white flex flex-col items-center text-center">
        <div className="bg-slate-900 p-4 rounded-lg mb-4">
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Full course schedule</h3>
        <p className="text-sm text-slate-600 mb-6">View your complete learning journey and upcoming milestones</p>
        <Button className="bg-red-600 hover:bg-red-700 text-white">View schedule</Button>
      </Card>

      <Card className="p-8 bg-white flex flex-col items-center text-center">
        <div className="bg-slate-900 p-4 rounded-lg mb-4">
          <Bell className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Announcements</h3>
        <p className="text-sm text-slate-600 mb-6">Stay updated with important news and course updates.</p>
        <Button className="bg-red-600 hover:bg-red-700 text-white">View all</Button>
      </Card>
    </div>
  )
}
