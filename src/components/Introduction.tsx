import React from 'react'

interface TypewriterPauses {
  [keyof: string]: number
}

const useTypewriter = (text: string, pauses: TypewriterPauses = {}) => {
  const [lengthTyped, setLengthTyped] = React.useState(0)

  React.useEffect(() => {
    if (lengthTyped < text.length) {
      const currentCharacter = text[lengthTyped - 1]
      const pause = pauses[currentCharacter] || 35

      const timeout = setTimeout(() => {
        setLengthTyped(lengthTyped + 1)
      }, pause)

      return () => clearTimeout(timeout)
    }
  }, [lengthTyped, pauses, text])

  const textTyped = text.slice(0, lengthTyped)
  const textToType = text.slice(lengthTyped)

  return [textTyped, textToType]
}

const Introduction: React.FC = () => {
  const fullText = `Hey! I'm Gabriel Duarte.\nYour friendly neighborhood developer.`
  const [textTyped, textToType] = useTypewriter(fullText, {
    '!': 200,
    '.': 600,
  })

  return (
    <div className="text-4xl text-center font-['Montserrat'] min-h-[400px] [400px] h-[66vh] w-full items-center justify-center flex whitespace-pre-wrap">
      <div>
        <noscript>
          <div>{fullText}</div>
        </noscript>
        {textTyped}
        <span className="opacity-0 select-none">{textToType}</span>
      </div>
    </div>
  )
}

export default Introduction
