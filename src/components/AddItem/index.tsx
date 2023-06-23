import * as C from './style'
import Modal from 'react-modal'
import {useState} from 'react'
Modal.setAppElement('#root');

export const AddItem = () => {
    const StyleModal = {
        content:{
            margin:'auto',
            width:'700px',
            height:'500px'
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
            <Modal style ={StyleModal} isOpen={modalIsOpen} onRequestClose={fecharModal} contentLabel='Modal Exemplo'>
            <h2>Olá</h2>
        <button onClick={fecharModal}>Fechar</button>
        <div>Eu sou uma modal</div>
            </Modal>
            <C.ItemsBox display = {transparence ? 'flex' : 'none'}>
                <C.Items onClick={abrirModal}>Adicionar</C.Items>
                <C.Items onClick={abrirModal}>Remover</C.Items>
            </C.ItemsBox>
            <C.Button onClick={transparencia}>+</C.Button>
        </C.Container>

    )
}