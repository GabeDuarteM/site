import React from "react"
import useTypewriter from "../../hooks/useTypewriter"

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  const [textTyped, textToType] = useTypewriter(
    `Hey! I'm Gabriel Duarte.\nYour friendly neighborhood developer.`,
    { "!": 200, ".": 600 }
  )
  return (
    <div className="text-4xl text-center font-['Montserrat'] min-h-[400px] [400px] h-[66vh] w-full items-center justify-center flex whitespace-pre-wrap">
      <div>
        {textTyped}
        <span className="opacity-0 select-none">{textToType}</span>
      </div>
    </div>
  )
}

export default Introduction
