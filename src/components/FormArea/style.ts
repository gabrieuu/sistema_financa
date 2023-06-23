import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const InputBox = styled.div`
display: flex;
width: 100%;
padding: 10px;
flex-direction: column;
`;

export const InputTitle = styled.label`
font-weight: bold;
margin-bottom: 5px;
`;
export const Title = styled.h1`
text-align: center;
`;
export const Input = styled.input`
padding: 5px;
`

export const Select = styled.select`
padding: 5px;
`

export const Button = styled.button<{color? : string}>`
height: 40px;
align-self: flex-end;
padding: 5px 15px;
background: ${prop => prop.color ?? '#1F487E'};
color: #fff;
border: none;
margin-top: 10px;
border-radius: 5px;
cursor: pointer;
margin-right: 10px;

&:hover{
    background-color: #1D3461;
}
`
export const BtnContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`;
