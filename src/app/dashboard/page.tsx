import Header from "@/components/DashboardComponents/header"
import ProgressCard from "@/components/DashboardComponents/progress-card"
import ScheduleSection from "@/components/DashboardComponents/schedule-section"
import BottomCards from "@/components/DashboardComponents/bottom-card"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 ">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Student Dashboard</h1>
        <ProgressCard />
        <ScheduleSection />
        <BottomCards />
      </main>

     
    </div>
  )
}
