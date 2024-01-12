import { FC, FormEvent, useCallback, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

type Todo = {
  id: number;
  title: string;
}

export const Todos: FC<object> = () => {
  const [text, setText] = useState<string>('');
  const [filterText, setFilterText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChangeAddElementInput = useCallback((event: FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  }, []);

  const handleFilter = useCallback((event: FormEvent<HTMLInputElement>) => {
    setFilterText(event.currentTarget.value);
  }, []);

  const handleAdd = useCallback(() => {
    setTodos([...todos, { title: text, id: todos.length + 1 }]);
    setText('');
  }, [text, todos]);

  const handleRemove = useCallback((id: number) => {
    setTodos(todos.filter((item: Todo) => item.id !== id));
  }, [todos]);

  return (
    <>
      <Input
        customField="str"
        value={text}
        placeholder="Введите название нового поля"
        onChange={handleChangeAddElementInput}
      />
      <Button onClick={handleAdd}>
        Добавить
      </Button>

      <div>
        <Input
          customField="filter"
          placeholder="Фильтруем"
          onChange={handleFilter}
          value={filterText}
        />
        <ul>
          {todos
            .filter((item: Todo) => item.title.includes(filterText))
            .map(({ title, id }) => (
              <li key={id}>
                <span>{title} ({id})</span>
                <Button onClick={() => handleRemove(id)}>
                  Удалить
                </Button>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
