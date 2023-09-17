import Table from '@/app/components/Table'
import { useEffect, useState } from 'react'
import {
  TLongestShortestInterval,
  TLongestShortestIntervalData,
} from '@/app/types'
import { ColumnDefinitionType } from '@/app/components/Table/types'
import addUuid from '@/app/utils'

const longestShortestIntervalColumns: ColumnDefinitionType<
  TLongestShortestInterval,
  keyof TLongestShortestInterval
>[] = [
  { header: 'Producer', key: 'producer', width: '200px' },
  { header: 'Interval', key: 'interval' },
  { header: 'Previous Year', key: 'previousWin' },
  { header: 'Following Year', key: 'followingWin' },
]

const LongestShortestInterval = () => {
  const [longestShortestIntervalMin, setLongestShortestIntervalMin] = useState<
    TLongestShortestInterval[]
  >([])

  const [longestShortestIntervalMax, setLongestShortestIntervalMax] = useState<
    TLongestShortestInterval[]
  >([])

  useEffect(() => {
    getLongestShortestInterval()
  }, [])

  const getLongestShortestInterval = async () => {
    const response = await fetch(
      'https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers'
    )
    const data: TLongestShortestIntervalData = await response.json()
    setLongestShortestIntervalMin(addUuid(data.min))
    setLongestShortestIntervalMax(addUuid(data.max))
  }

  return (
    <div className="ml-5 mr-5 flex flex-1 flex-col">
      <div className="mb-2 text-xl font-medium">
        Producers with longest and shortest interval between wins
      </div>
      <div className="mb-2 mt-3 text-xl">Maximum</div>
      <Table
        columns={longestShortestIntervalColumns}
        data={longestShortestIntervalMax}
      />
      <div className="mb-2 mt-3 text-xl">Minimum</div>
      <Table
        columns={longestShortestIntervalColumns}
        data={longestShortestIntervalMin}
      />
    </div>
  )
}

export default LongestShortestInterval
