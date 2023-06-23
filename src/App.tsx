import * as C from './App.styles'
import { useState, useEffect } from 'react'
import {Item} from './interfaces/Item' // interface
import {Category} from './interfaces/Category' // interface
import {items} from './data/items' // dados de items
import {categories} from './data/categories' // dados da categoria
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter'
import {TableArea} from './components/TableArea'
import {InfoArea} from './components/InfoArea'
import {FormArea} from './components/FormArea'
import {AddItem} from './components/AddItem'
const App = () => {
  const [list, setList] = useState(items);
  const [filteredList,setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)


  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) )
  },[list, currentMonth])

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      }else{
        incomeCount += filteredList[i].value;
      }
    }

    setExpense(expenseCount);
    setIncome(incomeCount);
  },[filteredList])

  const handleMonthChange = (newMonth : string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = ( item : Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
        
      </C.Header>
      <C.Body>
        <InfoArea currentMonth = {currentMonth}
         onMonthChange = {handleMonthChange}
         income = {income}
         expense = {expense}
        />

        

        <TableArea list = {filteredList}/>
      </C.Body>
      <AddItem funcao = {handleAddItem}/>
    </C.Container>
  )
}

export default App