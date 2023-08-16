import {useState} from 'react'
import {useQuery} from '@tanstack/react-query'

function Todos() {
    const [page, setPage] = useState(0)

    interface Todo {
        id: number;
        title: string;
        userId: number;
        completed: boolean;
      }

  
    const fetchProjects = (page = 0) => fetch('https://jsonplaceholder.typicode.com/todos?page=' + page).then((res) => res.json())
  
    const {
      isLoading,
      isError,
      error,
      data: todos,
      isFetching,
      isPreviousData,
    } = useQuery<Todo[], Error>({
      queryKey: ['todos', page],
      queryFn: () => fetchProjects(page),
      keepPreviousData : true
    })
  
    return (
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            {todos.map(project => (
              <p key={project.id}>{project.title}</p>
            ))}
          </div>
        )}
        <span>Current Page: {page + 1}</span>
        <button
          onClick={() => setPage(old => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Previous Page
        </button>{' '}
        <button
          onClick={() => {
            if (!isPreviousData && d.hasMore) {
              setPage(old => old + 1)
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || !data?.hasMore}
        >
          Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}{' '}
      </div>
    )
  }