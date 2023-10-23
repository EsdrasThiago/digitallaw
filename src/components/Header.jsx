import facebook from "../images/facebook_icon.png"
import instagram from "../images/instagram_icon.png"
import linkedin from "../images/linkedin_icon.png"
import twitter from "../images/twitter_icon.png"
import digital from "../images/Logo_Digitl_Law.png"

function Header() {

  return (
    <div className="header__main">
      <img src={digital} alt="logo da digital law" className="digital__icon" />
      <div>
        <img src={facebook} alt="icone do facebook" className="social__icons"/>
        <img src={instagram} alt="icone do instagram" className="social__icons" />
        <img src={linkedin} alt="icone do linkedin" className="social__icons" />
        <img src={twitter} alt="icone do twitter" className="social__icons" />
      </div>
    </div>
  )
}

export default Header
