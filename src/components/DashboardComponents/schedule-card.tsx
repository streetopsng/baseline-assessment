import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface Course {
  id: number
  title: string
  description: string
  schedule: string
  status: string
  statusColor: string
}

export default function ScheduleCard({ course }: { course: Course }) {
  return (
    <Card className="p-6 bg-white border-l-4 border-l-red-900">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-slate-900 mb-1">{course.title}</h3>
          <p className="text-sm text-slate-600">{course.description}</p>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${course.statusColor}`}>
          {course.status}
        </span>
      </div>

      <p className="text-sm text-slate-600 mb-4">{course.schedule}</p>

      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
        <Download className="w-4 h-4 mr-2" />
        Download resource
      </Button>
    </Card>
  )
}
