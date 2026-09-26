const revealPage = async () => {
  await document.fonts.ready
  document.documentElement.classList.remove('fonts-loading')
}

void revealPage()
