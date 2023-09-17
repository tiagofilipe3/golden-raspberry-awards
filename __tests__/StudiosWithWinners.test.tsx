import { render } from '@testing-library/react'
import StudiosWithWinners from '@/app/dashboard/StudiosWithWinners'

test('renders StudioWithWinners table', async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({
      studios: [
        {
          name: 'Studio 1',
          winCount: 9,
        },
        {
          name: 'Studio 2',
          winCount: 9,
        },
      ],
    })
  )

  const { findByText } = render(<StudiosWithWinners />)
  const studio1 = await findByText('Studio 1')
  const studio2 = await findByText('Studio 2')

  expect(studio1).toBeInTheDocument()
  expect(studio2).toBeInTheDocument()
})
