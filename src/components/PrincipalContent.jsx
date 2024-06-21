import { useEffect, useState } from "react";
import { improbidadeContents } from "../mock/mainContents";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function PrincipalContent() {

  const [contents, setContents] = useState();
  const [page, setPage] = useState(0);

  const onClickNextPage = () => {
    setPage(page+1)
  }

  const onClickLastPage = () => {
    setPage(page-1)
  }

  useEffect(() => {
    console.log(improbidadeContents[page])
    setContents(improbidadeContents[page])
  }, [page])

  return (
    <div>
      <Header />
      <div className="main__icsm">
        {contents?.map((e, i) => {
          if (e.tag === "p") {
            return <p key={i} className={e.className ? e.className : ""}>{e.text}</p>
          } if (e.tag === "h2") {
            return <h2 key={i}>{e.text}</h2>
          } if (e.tag === "img") {
            return <img key={i} src={e.src} alt={e.alt} />
          } if (e.tag === "h1") {
            return <h1 key={i}>{e.text}</h1>
          } if (e.tag === "ol") {
              return <ol key={i}>{e.content.map((el, ind) => <li key={`${i}${ind}`}>{el.text}</li>)}</ol>
          }
        })}
      </div>
      {page === 0 && <Link to="/" className="left__button"><h2>Página Inicial</h2></Link>}
      {page !== 0 && <button type="button" className="left__button" onClick={onClickLastPage}>Página Anterior</button>}
      {page !== contents?.length && <button type="button" className="right__button" onClick={onClickNextPage}>Proxima Página</button>}
      <Footer />
    </div>
  )
}

export default PrincipalContent