'use client'

import Table from '@/app/components/Table'
import { useEffect, useState } from 'react'
import { TMovie, TMovieRes } from '@/app/movies/types'
import { ColumnDefinitionType } from '@/app/components/Table/types'
import Pagination from '@/app/components/Pagination'
import Input from '@/app/components/Input'
import Button from '@/app/components/Button'
import { SearchIcon } from '@/app/components/Icons'
import Select from '@/app/components/Select'

const movieColumns: ColumnDefinitionType<TMovie, keyof TMovie>[] = [
  { header: 'ID', key: 'id' },
  { header: 'Year', key: 'year' },
  { header: 'Title', key: 'title' },
  {
    header: 'Winner',
    key: 'winner',
    render: (row) => (row.winner ? 'Yes' : 'No'),
  },
]

const Page = () => {
  const [movies, setMovies] = useState<TMovie[]>([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [year, setYear] = useState<number | undefined>(undefined)
  const [winner, setWinner] = useState<number | undefined>(undefined)

  const getMovies = async () => {
    let url = `https://tools.texoit.com/backend-java/api/movies?page=${page}&size=10`

    const isWinner = winner === 2 ? true : winner === 3 ? false : undefined
    if (isWinner !== undefined) {
      url = url.concat(`&winner=${isWinner}`)
    }

    if (year) {
      url = url.concat(`&year=${year}`)
    }

    const response = await fetch(url)

    const data: TMovieRes = await response.json()

    setMovies(data.content)
    setTotalPages(data.totalPages)
  }

  useEffect(() => {
    getMovies()
  }, [page])

  const handlePageChange = (page: number) => setPage(page)

  return (
    <div className="ml-5 flex w-full flex-col p-6">
      <div className="flex flex-1 flex-col">
        <div className="mb-2 text-xl font-medium">Movies</div>
        <div className="mt-5 flex">
          <Input
            placeholder="Search by year"
            value={year}
            type="number"
            onChange={(e) => setYear(Number(e.target.value))}
          />
          <Select
            options={[
              { value: 1, label: 'Yes/No' },
              { value: 2, label: 'Yes' },
              { value: 3, label: 'No' },
            ]}
            value={winner}
            onChange={(e) => setWinner(Number(e.target.value))}
            className="ml-2"
          />
          <Button className="ml-2" onClick={getMovies}>
            <SearchIcon />
          </Button>
        </div>
        <div className="mt-5">
          <Table columns={movieColumns} data={movies} />
          <Pagination
            onPageChange={handlePageChange}
            totalPages={totalPages}
            currentPage={page}
          />
        </div>
      </div>
    </div>
  )
}

export default Page
