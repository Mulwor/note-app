import { useState } from 'react';

interface TodosProps {
  id: number;
  title: string;
  done: boolean;
}

export function ListArrayObject() {
  const [todos, setTodos] = useState<TodosProps[]>([
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
  ]);
  const [nextId, setNextId] = useState(3);

  function handleAddTodo(title: string) {
    setTodos([
      ...todos,
      {
        id: nextId,
        title: title,
        done: false,
      },
    ]);
    setNextId(nextId + 1);
  }

  function handleChangeTodo(nextTodo: TodosProps) {
    setTodos(todos.map((t) => (t.id === nextTodo.id ? nextTodo : t)));
  }

  function handleDeleteTodo(todoId: number) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

interface AddTodoProps {
  onAddTodo: (title: string) => void;
}

function AddTodo({ onAddTodo }: AddTodoProps) {
  const [title, setTitle] = useState('');

  return (
    <>
      <input
        placeholder='Add todo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={() => {
          setTitle('');
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
}

interface TaskListProps {
  todos: TodosProps[];
  onChangeTodo: (nextTodo: TodosProps) => void;
  onDeleteTodo: (todoId: number) => void;
}

function TaskList({ todos, onChangeTodo, onDeleteTodo }: TaskListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

interface TaskProps {
  todo: TodosProps;
  onChange: (nextTodo: TodosProps) => void;
  onDelete: (todoId: number) => void;
}

function Task({ todo, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type='checkbox'
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}> Delete </button>
    </label>
  );
}
