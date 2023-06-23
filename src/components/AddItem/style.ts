import styled from 'styled-components'

export const Button = styled.button`
    width: 1.5em;
    height: 1.5em;
    font-size: 3em;
    margin-bottom: 5px;
    border: transparent;
    background-color: #1D3461;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;

&:hover{
    background-color: #1F487E;
}
`
export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
`;

export const ItemsBox = styled.div<{display : string}>`
    background:none;
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 1s ease-in;
`;

export const Items = styled.div`
    width: 100px;
    padding: 10px 20px;
    margin-bottom: 5px;
    cursor: pointer;
    box-shadow: 0 5px 10px 2px #ccc;
    margin-right: 10px;
    border-radius: 10px;
    
&:hover{
    background-color: #829CBC;
}
`;
