const nodeToType = document.querySelector('#typedText')
const nodeToHide = document.querySelector('#postTextTyped')

if (!nodeToType || !nodeToHide) {
  throw new Error("Whoops, this shouldn't happen, the textTyped was not found")
}

const fullText = nodeToHide.textContent || ''
nodeToType.replaceChildren()

type TypewriterPauses = Record<string, number>

const customPauses: TypewriterPauses = {
  '!': 200,
  '.': 300,
}

const typeWriter = (index = 0) => {
  if (index >= fullText.length) {
    return
  }

  setTimeout(
    () => {
      typeWriter(index + 1)
    },
    customPauses[fullText.charAt(index)] || 35,
  )
  nodeToType.textContent += fullText.charAt(index)
  nodeToHide.textContent = fullText.slice(index + 1)
}
typeWriter()
