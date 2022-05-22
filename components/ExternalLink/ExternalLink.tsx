import React from "react"

interface ExternalLinkProps {
  children: React.ReactNode
  href: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ children, ...props }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

export default ExternalLink
