
import Header from "../components/Header"
import Footer from "../components/Footer"
import IcsmLink from "../components/IcsmLink"

function Home() {

  return (
    <div>
      <Header />
      <div className="flex">
        <IcsmLink />
      </div>
      <Footer />
    </div>
  )
}

export default Home
