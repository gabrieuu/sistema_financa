import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 5px 10px 2px #ccc;
    border-radius: 10px;
    margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{width?:number}>`//coloca '?' pra sinalizar que a prop é opcional.
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
`;