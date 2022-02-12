import { StyledHeader } from "./styles/Header.styled";
import { StyledButton } from "./styles/Button.styled";
import logo from "../images/music-note.png"

const Header = () => {
    return (
        <StyledHeader>
            <div>
                <img src={logo} alt="" />
                <h1>music hub</h1>
            </div>
            <div>
                <StyledButton style={{borderColor: "#6F2232"}}>Home</StyledButton>
                <StyledButton style={{borderColor: "#950740"}}>About</StyledButton>
                <StyledButton style={{borderColor: "#C3073F"}}>To-listen</StyledButton>
            </div>
        </StyledHeader>
    );
}

export default Header;