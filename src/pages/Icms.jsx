import Header from "../components/Header"
import Footer from "../components/Footer"
import PrincipalContent from "../components/PrincipalContent";

function Icms() {

  return (
    <div>
      <Header />
      <div className="flex">
        <PrincipalContent actualPage="icms" />
      </div>
      <Footer />
    </div>
  )
}

export default Icms
