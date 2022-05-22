import React from "react"
import SocialMediaIcon from "../SocialMediaIcon"
import GithubSvg from "../../public/svg/github-logo.svg"
import LinkedinSvg from "../../public/svg/linkedin-logo.svg"

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex items-center justify-center mt-10 mb-4 space-x-8">
      <SocialMediaIcon
        Svg={GithubSvg}
        aria-label="GitHub link"
        href="https://github.com/GabrielDuarteM"
      />
      <SocialMediaIcon
        Svg={LinkedinSvg}
        aria-label="Linkedin link"
        href="https://www.linkedin.com/in/GabrielDuarteM"
      />
    </footer>
  )
}

export default Footer
