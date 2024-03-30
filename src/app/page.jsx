import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Landing from "@/components/landing"

export default function Home() {
  return (
    <>
      <div className="md:px-20 px-4">
        <Header />
        <Landing />
      </div>
      <Footer />
    </>
  )
}
