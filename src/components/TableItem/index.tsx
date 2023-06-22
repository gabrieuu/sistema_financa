import { Item } from '../../interfaces/Item';
import {formatData} from '../../helpers/dateFilter'
import * as C from './styles'
import {categories} from '../../data/categories';

type Prop = {
    item: Item
}

export const TableItem = ({item}:Prop) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatData(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color = {categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color = {categories[item.category].expense ? 'red' : 'green'}>
                    {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}