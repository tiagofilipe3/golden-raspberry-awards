import { SelectHTMLAttributes } from 'react'
import { clsx } from 'clsx'

type TSelect = SelectHTMLAttributes<HTMLSelectElement> & {
  options: {
    value: number
    label: string
  }[]
}

const Select = ({ options, className, ...rest }: TSelect) => {
  return (
    <select
      className={clsx(
        'block w-full rounded-md border border-gray-200 px-3 py-2 pr-9 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400',
        className
      )}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
