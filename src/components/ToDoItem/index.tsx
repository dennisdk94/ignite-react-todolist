import { Container, CheckBox } from './styles';

import Trash from '../../assets/trash.svg';
import Check from '../../assets/check.svg';

interface IProps {
    checked: boolean;
    label: string
    handleExclude: () => void;
    handleCheck: () => void;
}

export function ToDoItem(props:IProps) {
    return (
        <Container>
            <div className="content">
                <CheckBox checked={props.checked} onClick={() => props.handleCheck()}>
                    {props.checked && <img src={Check} alt="" />}
                </CheckBox>
                <span className={props.checked ? 'check' : ''}>
                    {props.label}
                </span>
            </div>
            <button onClick={() => props.handleExclude()}>
                <img src={Trash} alt="" />
            </button>
        </Container>
    )
}