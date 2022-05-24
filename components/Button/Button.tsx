import React from "react"

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <div className="m-1">
      <button
        className={`w-full hover:bg-violet-300 hover:text-bgColor transition-all duration-300 h-14 border-4 border-violet-300 ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
