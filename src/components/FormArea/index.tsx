import * as C from './style'
import {Item} from '../../interfaces/Item'
import {categories} from '../../data/categories'
import {useState} from 'react'
import { dataOriginal } from '../../helpers/dateFilter'

type Props = {
    onAdd : (item:Item) => void;
    fecharModal: () => void;
}   

export const FormArea = ({ onAdd, fecharModal}: Props) => {
    
    const [dateField,setDateField] = useState('');
    const [categoryField,setCategoryField] = useState('');
    const [titleField,setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    let categorieKey: string[] = Object.keys(categories)

    const handleAddEvent = () => {      
        onAdd({
            date: dataOriginal(dateField),
            category: categoryField,
            title: titleField,
            value: valueField
          });
    }

    return (
        <C.Container>
            <C.Title>Adicionar</C.Title>
            <C.InputBox>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input type='date' value={dateField} onChange={e => setDateField(e.target.value)}/>
            </C.InputBox>
            <C.InputBox>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                    <option>Selecionar</option>
                    {categorieKey.map((cat,index) => (
                        <option key = {index} value={cat}>{categories[cat].title}</option>
                    ))} 
                </C.Select>
            </C.InputBox>
            <C.InputBox>
                <C.InputTitle>Título</C.InputTitle>
                <C.Input value={titleField} onChange={e => setTitleField(e.target.value)}></C.Input>
            </C.InputBox>
            <C.InputBox>
                <C.InputTitle>Value</C.InputTitle>
                <C.Input type='number' value={valueField} onChange={e => setValueField(parseFloat(e.target.value))}></C.Input>
            </C.InputBox>
            <C.BtnContainer>
            <C.Button  onClick={handleAddEvent}>Adicionar</C.Button>
            <C.Button color = '#bbb' onClick={fecharModal}>Fechar</C.Button>
            </C.BtnContainer>
        </C.Container>
    )
}