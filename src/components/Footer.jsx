// import facebook from "../images/facebook_icon.png"
import instagram from "../images/instagram_icon.png"
// import linkedin from "../images/linkedin_icon.png"
// import twitter from "../images/twitter_icon.png"

function Footer() {

  return (
    <div className="main__footer">
      <div className="icons__footer">
        {/* <img src={facebook} alt="icone do facebook" className="social__icons"/> */}
        <a href="https://www.instagram.com/digitalaw_?igsh=MTI0MnZvOTA0M2Ntcg==">
          <img src={instagram} alt="icone do instagram" className="social__icons" />
        </a>
        {/* <img src={linkedin} alt="icone do linkedin" className="social__icons" /> */}
        {/* <img src={twitter} alt="icone do twitter" className="social__icons" /> */}
      </div>
      <p>2023 Digit@l Law</p>
    </div>
  )
}

export default Footer
