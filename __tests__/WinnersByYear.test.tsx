import { fireEvent, render } from '@testing-library/react'
import WinnersByYear from '@/app/dashboard/WinnersByYear'

test('Input year and render movie list', async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify([
      {
        id: 999,
        year: 1980,
        title: "Can't Stop the Music",
      },
    ])
  )

  const { getByPlaceholderText, getByTestId, findByText } = render(
    <WinnersByYear />
  )
  const input = getByPlaceholderText('Search by year')
  fireEvent.change(input, { target: { value: '1980' } })

  const searchButton = getByTestId('search-by-year')
  fireEvent.click(searchButton)

  const movieTitle = await findByText("Can't Stop the Music")
  expect(movieTitle).toBeInTheDocument()
})
