import React from 'react'

import ExternalLink from '../ExternalLink'
import useTheme from '../ThemeContext/ThemeContext'

const ICON_SIZE = '24px'

const SocialMediaIcon = ({ Logo, ...props }) => {
  const theme = useTheme()

  const fill = `${theme.colors.text.primary}`

  return (
    <ExternalLink {...props}>
      <Logo fill={fill} height={ICON_SIZE} width={ICON_SIZE} />
    </ExternalLink>
  )
}

export default SocialMediaIcon
