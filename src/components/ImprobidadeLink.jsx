import { Link } from "react-router-dom"
import improbidadePrincipalIMG from "../images/improbidadePrincipal.avif"

function ImprobidadeLink() {
  return (
    <Link to="improbidade" className="icsm__link">
        <img src={improbidadePrincipalIMG} alt="Juiz batendo martelo"/>
        <h2>IMPROBIDADE ADMINISTRATIVA</h2>
      </Link>
  )
}

export default ImprobidadeLink
