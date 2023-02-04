import { Container, ToDoContainer } from './styles';
import { ToDoLabel } from '../ToDoLabel';

import PlusSVG from '../../assets/plus.svg';
import { ToDoItem } from '../ToDoItem';

export function ToDoList() {
    return (
        <Container>
            <div className='input-content'>
                <input type="text" placeholder='Adicione uma tarefa' />
                <button>
                    Criar
                    <img src={PlusSVG} alt="" />
                </button>
            </div>
            
            <ToDoContainer>
                <div className="to-do-header">
                    <ToDoLabel label='Tarefas criadas' quantidade={0} />
                    <ToDoLabel label='Concluídas' quantidade={0} />
                </div>
                <div className="to-do-list">
                    <ToDoItem />    
                </div>         
            </ToDoContainer>
           
        </Container>
    )
}