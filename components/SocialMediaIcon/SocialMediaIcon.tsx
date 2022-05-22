import React from "react"
import ExternalLink from "../ExternalLink"

interface SocialMediaIconProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
  href: string
  "aria-label": string
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  Svg,
  href,
  ...props
}) => {
  return (
    <ExternalLink href={href} {...props}>
      <Svg className="fill-violet-400" width="24px" height="24px" />
    </ExternalLink>
  )
}

export default SocialMediaIcon
