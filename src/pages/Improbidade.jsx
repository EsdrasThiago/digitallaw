import Header from "../components/Header"
import Footer from "../components/Footer"
import PrincipalContent from "../components/PrincipalContent";

function Improbidade() {

  return (
    <div>
      <Header />
      <div className="flex">
        <PrincipalContent actualPage="improbidade" />
      </div>
      <Footer />
    </div>
  )
}

export default Improbidade
