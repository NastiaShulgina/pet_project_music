import { StyledLanding } from "./styles/Landing.styled";
import { StyledButton } from "./styles/Button.styled";
import concert from "../images/concert.png"

const Landing = () => {
    return (
        <StyledLanding>
            <h2><div>10</div> best music artists, <div>100</div>songs, <div>1</div> place</h2>
            <img src={concert} alt="Concert illustration" />
            <StyledButton style={{borderColor: "#ef6461", color: "#ef6461", maxWidth: "max-content", alignSelf: "center"}}>EXPLORE NEW MUSIC</StyledButton>
        </StyledLanding>
    );
}

export default Landing;