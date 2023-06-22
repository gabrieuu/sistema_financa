import styled from 'styled-components';

export const TableLine = styled.tr`
`;
export const TableColumn = styled.td`
    padding: 5px 0;
    border-radius: 5px;
`;

export const Category = styled.div<{color:string}>`
display: inline-block;
background-color: ${props => props.color};
padding: 5px 10px;
border-radius: 5px;
color: #fff;
`;

export const Value = styled.div<{color:string}>`
display: inline-block;
color: ${props => props.color};
padding: 5px 10px;
border-radius: 5px;
`;