import styled from 'styled-components';


export const Table = styled.table`
    width:100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 50px;
    margin-top: 20px;
    background: #fefefe;
    box-shadow:  20px 20px 30px #d8d8d8,
             -20px -25px 10px #ffffff;
    border-radius: 10px;
`;

export const TableHeadColumn = styled.th<{width?:number}>`
    padding: 5px 0;
    width: ${(prop) => prop.width ? `${prop.width}px` : 'auto'};
    text-align: left;
`;