import Link from "next/link"
import React from "react"
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon"
import GithubSvg from "../../public/svg/github-logo.svg"
import LinkedinSvg from "../../public/svg/linkedin-logo.svg"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="mx-12 my-4 flex justify-around items-center">
      <SocialMediaIcon
        Svg={GithubSvg}
        aria-label="Github profile"
        href="https://github.com/GabrielDuarteM"
      />
      <Link href="/">
        <span className="text-[21px] font-thin border-b-violet-300 border-b-2 w-24 pb-1 text-center cursor-pointer select-none leading-tight font-['Montserrat']">
          Gabriel <div className="font-medium -mt-1">Duarte</div>
        </span>
      </Link>
      <SocialMediaIcon
        Svg={LinkedinSvg}
        aria-label="Linkedin profile"
        href="https://www.linkedin.com/in/GabrielDuarteM"
      />
    </header>
  )
}

export default Header
