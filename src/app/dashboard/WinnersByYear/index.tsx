import Input from '@/app/components/Input'
import Button from '@/app/components/Button'
import { SearchIcon } from '@/app/components/Icons'
import Table from '@/app/components/Table'
import { useState } from 'react'
import { TMovieWinnersByYear } from '@/app/types'
import { ColumnDefinitionType } from '@/app/components/Table/types'

const movieWinnersByYearColumns: ColumnDefinitionType<
  TMovieWinnersByYear,
  keyof TMovieWinnersByYear
>[] = [
  { header: 'ID', key: 'id' },
  { header: 'Year', key: 'year' },
  { header: 'Title', key: 'title' },
]

const WinnersByYear = () => {
  const [movieWinnersByYears, setMovieWinnersByYears] = useState<
    TMovieWinnersByYear[]
  >([])

  const [year, setYear] = useState<string | undefined>('')

  const getMovieByYear = async () => {
    const response = await fetch(
      `https://tools.texoit.com/backend-java/api/movies?winner=true&year=${year}`
    )
    const data: TMovieWinnersByYear[] = await response.json()
    setMovieWinnersByYears(data)
  }

  return (
    <div className="ml-5 mr-5 flex flex-1 flex-col">
      <div className="mb-2 text-xl font-medium">List movie winners by year</div>
      <div className="mt-5 flex">
        <Input
          placeholder="Search by year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <Button
          className="ml-2"
          onClick={getMovieByYear}
          data-testid="search-by-year"
        >
          <SearchIcon />
        </Button>
      </div>
      <Table columns={movieWinnersByYearColumns} data={movieWinnersByYears} />
    </div>
  )
}

export default WinnersByYear
