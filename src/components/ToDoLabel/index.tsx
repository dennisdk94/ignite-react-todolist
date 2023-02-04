import { Container } from './styles';

interface IProps {
    label: string,
    quantidade: number
}

export function ToDoLabel(props:IProps) {
    return (
        <Container>
            <span>{props.label}</span>
            <div>
                {props.quantidade}
            </div>
        </Container>
    )
}