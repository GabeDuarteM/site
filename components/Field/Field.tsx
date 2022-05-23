import React from "react"
import styles from "./Field.module.css"

type InputTextareaProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >

interface FieldProps extends InputTextareaProps {
  textarea?: boolean
  label: string
}

const Field: React.FC<FieldProps> = ({ label, textarea = false, ...props }) => {
  const Input = textarea ? "textarea" : "input"
  const specificClasses = textarea ? "h-52 pt-6" : "h-14 pt-5"

  return (
    <div className="flex">
      <label
        className="absolute pointer-events-none text-xs ml-1 mt-1 h-5 pt-1 pl-2 pr-1"
        htmlFor={label}
      >
        {label}
      </label>
      <Input
        className={`w-full bg-transparent px-2 pb-2 m-1 border border-violet-400 ${specificClasses} ${styles.field}`}
        name={label.toLowerCase()}
        {...props}
      />
    </div>
  )
}

export default Field
