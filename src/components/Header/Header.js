import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import SocialMediaIcon from '../SocialMediaIcon'
import GithubLogo from '../../assets/svg/github-logo.svg'
import LinkedinLogo from '../../assets/svg/linkedin-logo.svg'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 16px 0;
`

const StyledLink = styled(Link)`
  font-family: Montserrat;
  font-size: 21px;
  font-weight: 100;
  color: inherit;
  border-bottom: solid 2px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  user-select: none;
  width: 96px;
  padding-bottom: 4px;
`

const Surname = styled.div`
  font-weight: 500;
  margin-top: -4px;
`

const Header = ({ className }) => (
  <StyledHeader className={className}>
    <SocialMediaIcon
      Logo={GithubLogo}
      href="https://github.com/GabrielDuarteM"
      aria-label="GitHub link"
    />
    <StyledLink aria-label="The website logo" to="/">
      Gabriel
      <Surname>Duarte</Surname>
    </StyledLink>
    <SocialMediaIcon
      Logo={LinkedinLogo}
      aria-label="Linkedin link"
      href="https://www.linkedin.com/in/GabrielDuarteM"
    />
  </StyledHeader>
)

export default Header
