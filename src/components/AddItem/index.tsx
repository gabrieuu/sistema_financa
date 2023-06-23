import * as C from './style'
import Modal from 'react-modal'
import {useState} from 'react'
import {FormArea} from '../FormArea'
Modal.setAppElement('#root');

type Props = {
    funcao : () => void;
}

export const AddItem = ({funcao}:Props) => {
    const StyleModal = {
        content:{
            margin:'auto',
            width:'400px',
            height:'500px',
            boxShadow: '0 5px 10px 2px #ccc',
            borderRadius: '20px',
        }
    }
    const [modalIsOpen, setIsOpen] = useState(false);
    const [transparence, setTransparence] = useState(false)

    const transparencia = () =>{
        if(transparence === false){
            setTransparence(true)
        }else{
            setTransparence(false);
        }
    }
    const fecharModal = () => {
        setIsOpen(false)
    }

    const abrirModal = () => {
        setIsOpen(true)
    }
    return (
        <C.Container>
            <Modal style ={StyleModal} isOpen={modalIsOpen} onRequestClose={fecharModal}>
                <FormArea onAdd = {funcao} fecharModal = {fecharModal}/>
            </Modal>
            <C.ItemsBox display = {transparence ? 'flex' : 'none'}>
                <C.Items onClick={abrirModal}>Adicionar</C.Items>
                {/*<C.Items onClick={abrirModal}>Remover</C.Items>*/}
            </C.ItemsBox>
            <C.Button onClick={transparencia}>+</C.Button>
        </C.Container>

    )
}