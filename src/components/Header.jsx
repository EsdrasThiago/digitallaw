// import facebook from "../images/facebook_icon.png"
import instagram from "../images/instagram_icon.png"
// import linkedin from "../images/linkedin_icon.png"
// import twitter from "../images/twitter_icon.png"
import digital from "../images/Logo_Digitl_Law.png"
import { Link } from "react-router-dom"

function Header() {

  return (
    <div className="header__main">
      <Link to="/">
        <img src={digital} alt="logo da digital law" className="digital__icon" />
      </Link>
      <div>
        {/* <img src={facebook} alt="icone do facebook" className="social__icons"/> */}
        <a href="https://www.instagram.com/digitalaw_?igsh=MTI0MnZvOTA0M2Ntcg==">
          <img src={instagram} alt="icone do instagram" className="social__icons" />
        </a>
        {/* <img src={linkedin} alt="icone do linkedin" className="social__icons" />
        <img src={twitter} alt="icone do twitter" className="social__icons" /> */}
      </div>
    </div>
  )
}

export default Header
