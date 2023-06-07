import styled from "styled-components";

const color = {
    blueDark: "#00747C",
    light: "#fefefe",
    lightBlue:"#00BBC9",
    lightDark:"#878787",
    dark:"#202022"
}

export const Container = styled.div`

`;

export const Header = styled.div`

background-color: ${color.blueDark};
height: 150px;
width: 100%;
text-align: center;
`;

export const HeaderText = styled.h1`
padding-top: 30px;
color: ${color.light};
`;

export const Body = styled.div`
margin: auto;
max-width: 980px;
margin-bottom: 50px;

`;
