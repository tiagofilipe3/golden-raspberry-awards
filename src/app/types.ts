type TYearsWithMultipleWinners = {
  id: string
  year: number
  winnerCount: number
}

type TStudiosWithWinners = {
  id: string
  name: string
  winCount: number
}

type TLongestShortestIntervalData = {
  min: TLongestShortestInterval[]
  max: TLongestShortestInterval[]
}

type TLongestShortestInterval = {
  id: string
  producer: string
  interval: number
  previousWin: number
  followingWin: number
}

type TMovieWinnersByYear = {
  id: number
  year: number
  title: string
}

export type {
  TYearsWithMultipleWinners,
  TStudiosWithWinners,
  TLongestShortestIntervalData,
  TLongestShortestInterval,
  TMovieWinnersByYear,
}
