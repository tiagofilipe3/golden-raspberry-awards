type TMovie = {
  id: number
  year: number
  title: string
  winner: boolean
}

type TMovieRes = {
  content: TMovie[]
  totalPages: number
}

export type { TMovie, TMovieRes }
