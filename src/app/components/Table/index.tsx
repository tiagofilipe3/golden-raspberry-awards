import { TProps } from '@/app/components/Table/types'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

const Table = <T extends { id: string | number }, K extends keyof T>({
  columns,
  data,
}: TProps<T, K>) => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="inline-block min-w-full p-1.5 align-middle">
          <div className="overflow-hidden">
            <table className="w-1/2 min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  {columns.map(({ key, header }) => (
                    <th
                      key={`${String(key)}-header`}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((obj) => (
                    <tr
                      key={obj.id}
                      className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800"
                    >
                      {columns.map(({ key, render, width }) => (
                        <td
                          key={obj.id + String(key)}
                          className={clsx(
                            'whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200',
                            width && `w-[${width}]`
                          )}
                        >
                          {render ? render(obj) : (obj[key] as ReactNode)}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
