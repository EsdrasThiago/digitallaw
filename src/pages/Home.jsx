
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { siteContentsMain } from "../mock/mainContents"
import { Link } from "react-router-dom"

function Home() {

  const [homeContents, setHomeContents] = useState();

  useEffect(() => {
    const mainContents = siteContentsMain;
    setHomeContents(mainContents)
  }, [])

  return (
    <div>
      <Header />
      <div className="flex">
        {homeContents?.map((e) => (
          <Link to={e.link} className={e.className} key={e.id}>
            <img src={e.img} alt={e.altImg} />
            <h2>{e.title}</h2>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home
