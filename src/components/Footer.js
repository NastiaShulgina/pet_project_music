import instagram from "../images/social-media/instagram.png"
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer">
                <h3>CONTACT US ↓</h3>
                <div className="social-media">
                    <img src={instagram} alt="instagram" />
                    {/* <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={youtube} alt="youtube" /> */}
                </div>
            </div>
        </StyledFooter>
    );
}

export default Footer;