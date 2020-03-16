import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components/macro'
import 'modern-normalize'

import Header from '../Header'
import { ThemeProvider } from '../ThemeContext'
import SocialMediaIcon from '../SocialMediaIcon'
import GithubLogo from '../../assets/svg/github-logo.svg'
import LinkedinLogo from '../../assets/svg/linkedin-logo.svg'

const GlobalCss = createGlobalStyle`
  html,
  body {
    font-family: Roboto;
    background-color: ${({ theme }) => theme.colors.primary[3]};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Montserrat;
  }

  a {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Content = styled.div`
  width: 75vw;
  max-width: 900px;
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 16px;
  > * {
    margin: 0 16px;
  }
`

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div role="group">
      <ThemeProvider>
        <GlobalCss />
        <Header siteTitle={site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <Main>
            <Content>{children}</Content>
          </Main>
          <Footer>
            <SocialMediaIcon
              Logo={GithubLogo}
              aria-label="GitHub link"
              href="https://github.com/GabrielDuarteM"
            />
            <SocialMediaIcon
              Logo={LinkedinLogo}
              aria-label="Linkedin link"
              href="https://www.linkedin.com/in/GabrielDuarteM"
            />
          </Footer>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Layout
