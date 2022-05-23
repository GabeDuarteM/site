import React from "react"

interface ButtonProps {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="m-1">
      <button className="w-full hover:bg-violet-300 hover:text-bgColor transition-all duration-300 h-14 border-4 border-violet-300">
        {children}
      </button>
    </div>
  )
}

export default Button
