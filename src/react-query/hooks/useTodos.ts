import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

export const useTodos = () => {
    const fetchTodos = () => {
        // return await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    
        return axios
          .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
          .then((res) => res.data);
      };
    
      return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        staleTime: 10 * 1000
      });

}

