import Table from '@/app/components/Table'
import { useEffect, useState } from 'react'
import { TYearsWithMultipleWinners } from '@/app/types'
import { ColumnDefinitionType } from '@/app/components/Table/types'
import addUuid from '@/app/utils'

const yearsWithMultipleWinnersColumns: ColumnDefinitionType<
  TYearsWithMultipleWinners,
  keyof TYearsWithMultipleWinners
>[] = [
  { header: 'Year', key: 'year' },
  { header: 'Win Count', key: 'winnerCount' },
]

const YearsWithMultipleWinners = () => {
  const [yearsWithMultipleWinners, setYearsWithMultipleWinners] = useState<
    TYearsWithMultipleWinners[]
  >([])

  useEffect(() => {
    getYearsWithMultipleWinners()
  }, [])

  const getYearsWithMultipleWinners = async () => {
    const response = await fetch(
      'https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners'
    )
    const data: { years: TYearsWithMultipleWinners[] } = await response.json()
    const dataWithId = addUuid(data.years)
    setYearsWithMultipleWinners(addUuid(dataWithId))
  }

  return (
    <div className="ml-5 mr-5 flex flex-1 flex-col">
      <div className="mb-2 text-xl font-medium">
        List years with multiple winners
      </div>
      <Table
        columns={yearsWithMultipleWinnersColumns}
        data={yearsWithMultipleWinners}
      />
    </div>
  )
}

export default YearsWithMultipleWinners
