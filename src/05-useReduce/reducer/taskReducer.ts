import { generarUUID } from '@/utils/generarID';
import * as z from 'zod/v4';

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: string } // text
    | { type: 'TOGGLE_TODO', payload: string } // id
    | { type: 'DELETE_TODO', payload: string } // id



const TodoSchema = z.object({
    id: z.string(),
    text: z.string(),
    completed: z.boolean(),
});

const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number(),
})

export const getTasksInitialState = (): TaskState => {

    const localStorageState = localStorage.getItem('tasks-state');

    if (!localStorageState) {
        return {
            todos: [],
            completed: 0,
            length: 0,
            pending: 0
        }
    }

    //validamos con zod
    const result = TaskStateSchema.safeParse(JSON.parse(localStorageState))

    if (result.error) {
        console.log(result.error);
        return {
            todos: [],
            completed: 0,
            length: 0,
            pending: 0
        }
    }

    return result.data
}

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: generarUUID(),
                text: action.payload,
                completed: false
            }

            return {
                ...state,
                length: state.todos.length + 1,
                pending: state.pending + 1,
                todos: [...state.todos, newTodo]
            }
        }

        case 'DELETE_TODO':
            const currentTodos = state.todos.filter(todo => todo.id != action.payload);
            return {
                ...state,
                length: state.todos.length - 1,
                todos: currentTodos,
                completed: currentTodos.filter(todo => todo.completed).length,
                pending: currentTodos.filter(todo => !todo.completed).length,
            }

        case 'TOGGLE_TODO':
            const updatedTodos: Todo[] = state.todos.map(todo => {
                if (todo.id == action.payload) {
                    return {
                        ...todo, completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                ...state,
                todos: updatedTodos,
                completed: updatedTodos.filter(todo => todo.completed).length,
                pending: updatedTodos.filter(todo => !todo.completed).length,
            }

        default:
            return state
    }
}