import { render } from '@testing-library/react'
import YearsWithMultipleWinners from '@/app/dashboard/YearsWithMultipleWinners'

test('renders YearsWithMultipleWinners table', async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({
      years: [
        {
          year: 1980,
          winnerCount: 99,
        },
        {
          year: 1990,
          winnerCount: 99,
        },
      ],
    })
  )

  const { findByText } = render(<YearsWithMultipleWinners />)
  const year1 = await findByText('1980')
  const year2 = await findByText('1990')

  expect(year1).toBeInTheDocument()
  expect(year2).toBeInTheDocument()
})
