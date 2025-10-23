import { Calendar } from "lucide-react"
import ScheduleCard from "./schedule-card"

export default function ScheduleSection() {
  const courses = [
    {
      id: 1,
      title: "Design Fundamentals",
      description: "Introduction to design principles and color theory",
      schedule: "Monday & Tuesday",
      status: "Live",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: 2,
      title: "User Research Methods",
      description: "Learn how to conduct effective user interviews",
      schedule: "Wednesday",
      status: "Upcoming",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      title: "Prototyping Workshop",
      description: "Hands-on prototyping with Figma and Adobe XD",
      schedule: "Friday",
      status: "Workshop",
      statusColor: "bg-pink-100 text-pink-700",
    },
  ]

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-lg font-semibold text-slate-900">This week&apos;s Schedule</h2>
        <Calendar className="w-5 h-5 text-slate-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {courses.map((course) => (
          <ScheduleCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}
