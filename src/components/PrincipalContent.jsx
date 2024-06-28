import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { switchPagesFunction } from "../mock/switchPages";
import GameButton from "./GameButton";
import { switchQuestionsFunction } from "../mock/switchQuestions";
import Context from "../context/myContext";

function PrincipalContent({ actualPage }) {

  const { setQuestions } = useContext(Context)
  const [contents, setContents] = useState();
  const [contentsLength, setContentsLength] = useState();
  const [page, setPage] = useState(0);

  const onClickNextPage = () => {
    setPage(page + 1)
  }

  const onClickLastPage = () => {
    setPage(page - 1)
  }

  useEffect(() => {
    const pageContents = switchPagesFunction(actualPage)
    setContents(pageContents[page])
    setContentsLength(pageContents.length)
  }, [page, actualPage])

  return (
    <div>
      <div className="main__icsm">
        {contents?.map((e, i) => {
          if (e.tag === "p") {
            return <p key={i} className={e.className ? e.className : ""}>{e.text}</p>
          } if (e.tag === "h2") {
            return <h2 key={i} className={e.className ? e.className : ""}>{e.text}</h2>
          } if (e.tag === "img") {
            return <img key={i} src={e.src} alt={e.alt} className={e.className ? e.className : ""} />
          } if (e.tag === "h1") {
            return <h1 key={i} className={e.className ? e.className : ""}>{e.text}</h1>
          } if (e.tag === "ol") {
            return <ol key={i} className={e.className ? e.className : ""}>{e.content.map((el, ind) => <li key={`${i}${ind}`}>{el.text}</li>)}</ol>
          } if (e.tag === "a") {
            return <div className="quiz__button" key={i}>
              <a href={e.link} download={e.downloadName}>
                <button>{e.text}</button>
              </a>
            </div>
          } if (e.tag === "gameButton") {
            setQuestions(switchQuestionsFunction(actualPage))
            return <GameButton key={i} />
          }
        })}
      </div>
      {page === 0 && <Link to="/" className="left__button"><h2>Página Inicial</h2></Link>}
      {page !== 0 && <button type="button" className="left__button" onClick={onClickLastPage}>Página Anterior</button>}
      {page !== contentsLength - 1 && <button type="button" className="right__button" onClick={onClickNextPage}>Proxima Página</button>}
    </div>
  )
}

export default PrincipalContent