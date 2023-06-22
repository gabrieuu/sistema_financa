// todas as funcões que envolvem data

import {Item} from '../interfaces/Item';

export const getCurrentMonth = () => {
    let now = new Date();// pega a data atual
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const filterListByMonth = (list:Item[], date:string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-'); // recebe a data por parametro (2023-8) e separa pelo '-', e passa esse resultado para as variaveis year e month

    list.map(l => {
        if(l.date.getFullYear() === parseInt(year) && l.date.getMonth()+1 === parseInt(month)){
            newList.push(l);
        }
    })

    return newList
}

export const formatData = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() +1;
    let day = date.getDate();
    
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}
const addZeroToDate = (num: number):string => num < 10 ? `0${num}` : `${num}`;

export const formatCurrentMonth = (currentMonth : string): string => {
let [year,month] = currentMonth.split('-');
let mesFormatado = parseInt(month);

let mesesExtenso = ['Janeiro','Fevereiro','Março','Abril',
                    'Maio','Junho','Julho','Agosto',
                    'Setembro','Outubro','Novembro','Dezembro']

return `${mesesExtenso[mesFormatado-1]} de ${year} `;
}

export const dataOriginal = (data:string) => {
    let[year,month,day] = data.split('-');
    return new Date(parseInt(year),parseInt(month)-1,parseInt(day));
}
//O Objeto Date