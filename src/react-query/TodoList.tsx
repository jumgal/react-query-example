import { useTodos } from "./hooks/useTodos";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => setTodos(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  const {data: todos, isLoading, error} = useTodos()
  if (isLoading) {
    return <h1>Loading ...</h1>;
  } else if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
