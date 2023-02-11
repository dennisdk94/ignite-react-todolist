import {useState} from 'react';
import { Container, ToDoContainer } from './styles';
import { ToDoLabel } from '../ToDoLabel';

import PlusSVG from '../../assets/plus.svg';
import { ToDoItem } from '../ToDoItem';

interface IListToDo {
    id: number;
    check: boolean;
    label: string;
}

export function ToDoList() {
    const [createTodo, setCreateTodo] = useState('');
    const [listtoDo, setListTodo] = useState<IListToDo[]>([]);
    const [todoConcluded, setTodoConcluded] = useState(0);

    const handleAddToDo = () => {
        const data:IListToDo = {
            id: listtoDo.length + 1,
            check: false,
            label: createTodo,
        };
        setListTodo([...listtoDo, data]);
        setCreateTodo('');
    }

    const excludeTodo = (index: number) => {
        if(listtoDo.length > 1) {
            setListTodo(listtoDo.filter((todo) => todo.id !== index+1))
        } else {
            setListTodo([])
        }
    }

    const checkTodo = (index:number) => {
        const auxTasks = [...listtoDo]
        auxTasks[index].check = !auxTasks[index].check;

        const filterTaskCheked = auxTasks.filter((task) => task.check)

        setListTodo(auxTasks)
        setTodoConcluded(filterTaskCheked.length)
    }

    return (
        <Container>
            <div className='input-content'>
                <input 
                    type="text" 
                    placeholder='Adicione uma tarefa'
                    value={createTodo}
                    onChange={(e) => setCreateTodo(e.target.value)}
                 />
                <button onClick={handleAddToDo}>
                    Criar
                    <img src={PlusSVG} alt="" />
                </button>
            </div>
            
            <ToDoContainer>
                <div className="to-do-header">
                    <ToDoLabel label='Tarefas criadas' quantidade={listtoDo.length} />
                    <ToDoLabel label='Concluídas' quantidade={`${todoConcluded} de ${listtoDo.length}`} />
                </div>
                <div className="to-do-list">
                    {listtoDo.map((todo, index) => 
                        <ToDoItem 
                            key={index} 
                            label={todo.label} 
                            checked={todo.check}
                            handleCheck={() => checkTodo(index)}
                            handleExclude={() => excludeTodo(index)}
                        />
                    )}
                       
                </div>         
            </ToDoContainer>
           
        </Container>
    )
}