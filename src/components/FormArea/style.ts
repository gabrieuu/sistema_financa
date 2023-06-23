import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 5px 10px 2px #ccc;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
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

export const Input = styled.input`
padding: 5px;
`

export const Select = styled.select`
padding: 5px;
`

export const Button = styled.button`
height: 30px;
align-self: flex-end;
padding: 5px 15px;
background: #1F487E;
color: #fff;
border: none;
transform: translateY(-40%);
border-radius: 5px;
cursor: pointer;

&:hover{
    background-color: #1D3461;
}
`
