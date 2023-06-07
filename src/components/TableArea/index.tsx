import * as C from './style.ts';
import {Item} from '../../types/Item.ts'

type Props = {
    list: Item[];
}

export const TableArea = ({ list }:Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                     
                ))}
            </tbody>
        </C.Table>
    )
}