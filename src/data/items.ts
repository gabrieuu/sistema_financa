import { Item } from "../interfaces/Item";

export const items:Item[] = [
    {
        date: new Date(2023, 5, 5),
        category: 'food',
        title: 'McDonalds',
        value: 32.12
    },
    {
        date: new Date(2023, 5, 15),
        category: 'food',
        title: 'Burguer King',
        value: 28
    },
    {
        date: new Date(2023, 5, 16),
        category: 'rent',
        title: 'Aluguel apt',
        value: 2300
    },
    {
        date: new Date(2023, 9, 18),
        category: 'salary',
        title: 'Salário',
        value: 4500
    }
]