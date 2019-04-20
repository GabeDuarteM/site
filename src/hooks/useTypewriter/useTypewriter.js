import React from 'react'

const useTypewriter = (text, pauses = {}) => {
  const [lengthTyped, setLengthTyped] = React.useState(0)

  // eslint-disable-next-line consistent-return
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

export default useTypewriter
