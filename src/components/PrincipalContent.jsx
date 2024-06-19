import { useEffect, useState } from "react";
import { siteContents } from "../mock/mainContents";
import Header from "./Header";
import Footer from "./Footer";

function PrincipalContent() {

  const [contents, setContents] = useState();

  useEffect(() => {
    setContents(siteContents[0].pages[0])
    console.log(siteContents[0].pages[0])
  })

  return (
    <div>
      <Header />
      <div className="main__icsm">
        {contents.map((e, i) => {
          if(e.tag === "p") {
            return <p key={i}>{e.text}</p>
          } if (e.tag === "h2") {
            return <h2 key={i}>{e.text}</h2>
          } if (e.tag === "img") {
            return <img key={i} src={e.src} alt={e.alt} />
          }
        })}
      </div>
      <Footer />
    </div>
  )
}

export default PrincipalContent