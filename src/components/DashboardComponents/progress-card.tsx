import { Card } from "@/components/ui/card"

export default function ProgressCard() {
  const progress = (4 / 12) * 100

  return (
    <Card className="mb-8 p-6 bg-white">
      <h2 className="text-xl font-semibold text-slate-900 mb-2">UI/UX Design Track</h2>
      <p className="text-sm text-slate-600 mb-4">Week 4 of 12</p>

      <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
        <div className="bg-red-900 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <p className="text-sm text-slate-700 text-center">You&apos;re making great progress! Keep up the amazing work.</p>
    </Card>
  )
}
