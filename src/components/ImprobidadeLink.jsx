import { Link } from "react-router-dom"
import improbidadePrincipalIMG from "../images/improbidadePrincipal.avif"

function ImprobidadeLink() {
  return (
    <Link to="improbidade" className="icsm__link">
        <img src={improbidadePrincipalIMG} alt="Saco de dinheiro escrito ICMS"/>
        <h2>IMPROBIDADE ADMINISTRATIVA</h2>
        <hr className="underline" />
      </Link>
  )
}

export default ImprobidadeLink
