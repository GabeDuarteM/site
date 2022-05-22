import React from "react"
import Footer from "../Footer"
import Header from "../Header"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center flex-col">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
