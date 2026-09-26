const parts = [...document.querySelectorAll('#typedText > span')]
const characters = parts.flatMap((element) => Array.from(element.textContent, (character) => ({ character, element })))

const customPauses: Record<string, number> = {
  '!': 200,
  '.': 300,
}

const typeWriter = (index = 0) => {
  if (index >= characters.length) {
    return
  }

  const next = characters[index]
  next.element.textContent += next.character
  setTimeout(() => {
    typeWriter(index + 1)
  }, customPauses[next.character] ?? 35)
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  for (const part of parts) {
    part.textContent = ''
  }
  typeWriter()
}
