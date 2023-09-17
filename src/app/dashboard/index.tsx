'use client'

import YearsWithMultipleWinners from '@/app/dashboard/YearsWithMultipleWinners'
import StudiosWithWinners from '@/app/dashboard/StudiosWithWinners'
import LongestShortestInterval from '@/app/dashboard/LongestShortestInterval'
import WinnersByYear from '@/app/dashboard/WinnersByYear'

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col p-6">
      <div className="flex flex-col lg:flex-row">
        <YearsWithMultipleWinners />
        <StudiosWithWinners />
      </div>
      <div className="mt-5 flex flex-col lg:flex-row">
        <LongestShortestInterval />
        <WinnersByYear />
      </div>
    </div>
  )
}

export default Dashboard
