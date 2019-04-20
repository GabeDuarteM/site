import React from 'react'
import styled from 'styled-components/macro'

import ExternalLink from '../ExternalLink'

const StyledAbout = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Paragraph = styled.p`
  text-align: justify;
`

const techs = [
  { name: 'react', href: 'https://reactjs.org/' },
  { name: 'node', href: 'https://nodejs.org/en/' },
  { name: 'typescript', href: 'https://www.typescriptlang.org/' },
  { name: 'prettier', href: 'https://prettier.io/' },
  { name: 'eslint', href: 'https://eslint.org/' },
  {
    name: 'react-testing-library',
    href: 'https://github.com/kentcdodds/react-testing-library',
  },
  { name: 'jest', href: 'https://jestjs.io/' },
  { name: 'electron', href: 'https://electronjs.org/' },
]

const About = () => {
  return (
    <StyledAbout>
      <Paragraph>
        {`I'm`} a Javascript developer born in Brazil, graduated in Information
        Systems and now currently living in Hamburg, Germany.
      </Paragraph>

      <Paragraph>
        {`I'm`} a very positive person, always looking out for a light and
        flexible environment, good conversations, and good music. On my free
        time, I like to play guitar, watch TV shows and movies, play some games
        and, of course, to code. Be sure to check my repositories on{' '}
        <ExternalLink href="https://www.github.com/GabrielDuarteM">
          GitHub
        </ExternalLink>
        . Maybe you will find something of your liking{' '}
        <span
          role="img"
          aria-label="Emoji of winking face with tongue sticking out"
        >
          😜
        </span>
        .
      </Paragraph>

      <Paragraph>
        I normally do things with{' '}
        {techs.map((tech) => (
          <React.Fragment key={tech.name}>
            <ExternalLink href={tech.href}>{tech.name}</ExternalLink>,{' '}
          </React.Fragment>
        ))}
        and basically, any other technology that simplifies the development
        workflow, or that adds value to the user experience.
      </Paragraph>

      <Paragraph>
        One of the traits I think that defines me the most, is curiosity.
        Because of it, {`I'm`} always looking for new things, pushing myself
        further, learning about new technologies, and looking for ways to do the
        things I already do, but in a better way.
      </Paragraph>
    </StyledAbout>
  )
}

export default About
