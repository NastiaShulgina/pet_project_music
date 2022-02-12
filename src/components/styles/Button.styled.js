import styled from "styled-components";

export const StyledButton = styled.button`
background: none;
border: 5px solid;
line-height: 1;
font-size: 0.8em;
margin: 0.5em;
padding: 0.8em 1.6em;
border-color: #a972cb;

transition: 0.25s;

&:hover,
&:focus { 
    // border-color: ${({theme}) => theme.colors.neonPurple} !important;
    // color: #fff;
    cursor: pointer;
    transform: translateY(-0.25em);
}
`