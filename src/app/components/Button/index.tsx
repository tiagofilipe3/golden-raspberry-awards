import { ButtonHTMLAttributes } from 'react'

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

const Button = ({ className, children, ...rest }: TProps) => {
  return (
    <button
      type="button"
      className={`inline-flex h-[2.875rem] w-[2.875rem] flex-shrink-0 items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  dark:focus:ring-offset-gray-800 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
export default Button
