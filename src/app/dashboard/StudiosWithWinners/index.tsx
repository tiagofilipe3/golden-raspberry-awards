import Table from '@/app/components/Table'
import { useEffect, useState } from 'react'
import { TStudiosWithWinners } from '@/app/types'

import { ColumnDefinitionType } from '@/app/components/Table/types'
import addUuid from '@/app/utils'
const studiosWithWinnersColumns: ColumnDefinitionType<
  TStudiosWithWinners,
  keyof TStudiosWithWinners
>[] = [
  { header: 'Name', key: 'name' },
  { header: 'Win Count', key: 'winCount' },
]

const StudiosWithWinners = () => {
  const [studiosWithWinners, setStudiosWithWinners] = useState<
    TStudiosWithWinners[]
  >([])

  useEffect(() => {
    getStudiosWithWinners()
  }, [])

  const getStudiosWithWinners = async () => {
    const response = await fetch(
      'https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count'
    )
    const data: { studios: TStudiosWithWinners[] } = await response.json()
    const dataWithId = addUuid(data.studios.slice(0, 3))
    setStudiosWithWinners(addUuid(dataWithId))
  }

  return (
    <div className="ml-5 mr-5 flex flex-1 flex-col">
      <div className="mb-2 text-xl font-medium">Top 3 studios with winners</div>
      <Table columns={studiosWithWinnersColumns} data={studiosWithWinners} />
    </div>
  )
}

export default StudiosWithWinners
