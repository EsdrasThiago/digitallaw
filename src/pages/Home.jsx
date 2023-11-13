
import Header from "../components/Header"
import Footer from "../components/Footer"
import IcsmLink from "../components/IcsmLink"
import ImprobidadeLink from "../components/ImprobidadeLink"

function Home() {

  return (
    <div>
      <Header />
      <div className="flex">
        <IcsmLink />
        <ImprobidadeLink />
      </div>
      <Footer />
    </div>
  )
}

export default Home
