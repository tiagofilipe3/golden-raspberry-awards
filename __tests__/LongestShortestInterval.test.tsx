import LongestShortestInterval from '@/app/dashboard/LongestShortestInterval'
import { render } from '@testing-library/react'

test('renders LongestShortestInterval table', async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({
      min: [
        {
          producer: 'Producer 1',
          interval: 9,
          previousWin: 2018,
          followingWin: 2019,
        },
      ],
      max: [
        {
          producer: 'Producer 2',
          interval: 99,
          previousWin: 1900,
          followingWin: 1999,
        },
      ],
    })
  )

  const { findByText } = render(<LongestShortestInterval />)
  const producer1 = await findByText('Producer 1')
  const producer2 = await findByText('Producer 2')

  expect(producer1).toBeInTheDocument()
  expect(producer2).toBeInTheDocument()
})
