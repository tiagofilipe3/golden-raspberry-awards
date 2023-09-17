import { clsx } from 'clsx'

type TProps = {
  onPageChange: (page: number) => void
  totalPages: number
  currentPage: number
}

const Pagination = ({ onPageChange, totalPages, currentPage }: TProps) => {
  const getPages = () => {
    const maxPageButtons = 5 // Number of page buttons to show
    const halfMaxButtons = Math.floor(maxPageButtons / 2)
    let startPage = currentPage - halfMaxButtons
    let endPage = currentPage + halfMaxButtons

    if (startPage < 0) {
      startPage = 0
      endPage = maxPageButtons - 1
    }

    if (endPage >= totalPages) {
      endPage = totalPages - 1
      startPage = Math.max(totalPages - maxPageButtons, 0)
    }

    let pages = []

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  return (
    <nav className="flex items-center space-x-2">
      <a
        className="inline-flex cursor-pointer items-center gap-2 rounded-md p-4 text-gray-400 hover:text-blue-600 aria-disabled:pointer-events-none"
        onClick={() => {
          if (currentPage > 0) onPageChange(currentPage - 1)
        }}
        aria-disabled={currentPage === 0}
      >
        <span aria-hidden="true">«</span>
        <span>Previous</span>
      </a>
      {getPages().map((page) => (
        <a
          key={page}
          className={clsx(
            'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm font-medium',
            page === currentPage
              ? 'bg-blue-500 text-white'
              : 'text-gray-500 hover:text-blue-600'
          )}
          onClick={() => onPageChange(page)}
        >
          {page + 1}
        </a>
      ))}
      <a
        className="inline-flex cursor-pointer items-center gap-2 rounded-md p-4 text-gray-500 hover:text-blue-600 aria-disabled:pointer-events-none"
        onClick={() => {
          if (currentPage < totalPages - 1) onPageChange(currentPage + 1)
        }}
        aria-disabled={currentPage === totalPages - 1}
      >
        <span>Next</span>
        <span aria-hidden="true">»</span>
      </a>
    </nav>
  )
}

export default Pagination
