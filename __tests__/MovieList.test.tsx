import { render } from '@testing-library/react'
import Page from '@/app/movies/page'

test('render MovieList', async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({
      content: [
        {
          id: 999,
          year: 1980,
          title: 'Movie 1',
          winner: true,
        },
        {
          id: 1000,
          year: 1980,
          title: 'Movie 2',
          winner: false,
        },
      ],
      pageable: {
        pageSize: 0,
        pageNumber: 0,
        offset: 0,
        paged: true,
        unpaged: false,
      },
      totalElements: 2,
      last: true,
      totalPages: 1,
      first: true,
      numberOfElements: 2,
      size: 10,
    })
  )

  const { findByText } = render(<Page />)
  const movie1 = await findByText('Movie 1')
  const movie2 = await findByText('Movie 2')

  expect(movie1).toBeInTheDocument()
  expect(movie2).toBeInTheDocument()
})
