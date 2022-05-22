import type { NextPage } from "next"
import About from "../components/About"
import Contact from "../components/Contact"
import Introduction from "../components/Introduction"
import Layout from "../components/Layout"

const Home: NextPage = () => {
  return (
    <Layout>
      <Introduction />
      <About />
      <Contact />
    </Layout>
  )
}

export default Home
