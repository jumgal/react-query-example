import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number,
  pageSize: number
}

// const usePosts = (userId: number | undefined) => {
//   const fetchPosts = () => {
//     return axios
//       .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
//         params: {
//           userId
//         }
//       })
//       .then((res) => res.data);
//   };

//   return useQuery<Post[], Error>({
//     queryKey: userId ? ["users", userId, "posts"]: ['posts'],
//     queryFn: fetchPosts,
//     staleTime: 10 * 1000,
//   });
// };

const usePosts = (query: PostQuery) => {
  const fetchPosts = () => {
    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize
        }
      })
      .then((res) => res.data);
  };

  return useQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, //1m
    keepPreviousData: true
  });
};

export default usePosts;
