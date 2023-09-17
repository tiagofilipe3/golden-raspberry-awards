'use client'
import { DashboardIcon, MenuIcon, MoviesIcon } from '@/app/components/Icons'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

const SideBar = () => {
  const pathname = usePathname()

  return (
    <div>
      <div
        className="
          hs-overlay
          scrollbar-y
          dark:scrollbar-y
          fixed
          bottom-0
          left-0
          top-0
          z-[60]
          block
          w-64
          transform
          overflow-y-auto
          border-r
          border-gray-200
          bg-white
          pb-10
          pt-7
          transition-all
          duration-300
          dark:border-gray-700
          dark:bg-gray-800
          lg:bottom-0
          lg:right-auto
          lg:translate-x-0
        "
      >
        <div className="p-6">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="/"
            aria-label="Brand"
          >
            Golden Raspberry Awards
          </a>
        </div>
        <nav
          className="hs-accordion-group flex w-full flex-col flex-wrap p-6"
          data-hs-accordion-always-open="true"
        >
          <ul className="space-y-1.5">
            <li>
              <a
                className={clsx(
                  'flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100',
                  pathname === '/'
                    ? 'bg-gray-100 dark:bg-gray-900 dark:text-white'
                    : 'dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300'
                )}
                href="/"
              >
                <DashboardIcon />
                Dashboard
              </a>
            </li>

            <li>
              <a
                className={clsx(
                  'flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100',
                  pathname === '/movies'
                    ? 'bg-gray-100 dark:bg-gray-900 dark:text-white'
                    : 'dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300'
                )}
                href="/movies"
              >
                <MoviesIcon />
                Movies
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SideBar
