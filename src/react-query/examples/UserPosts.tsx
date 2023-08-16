// import axios from 'axios';
import { useEffect, useState } from "react";
import usePosts from "../hooks/usePosts";


// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

const PostList = () => {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => setPosts(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  const [userId, setUserId] = useState<number>()
  console.log(userId)

//   const { data: posts, error, isLoading } = usePosts(userId);

const { data: posts, error, isLoading } = usePosts(userId);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select value={userId} onChange={(e) => e.target.value !== "" && setUserId(parseInt(e.target.value))} className="form-select mb-3" aria-label="select Users">
        <option defaultValue="1">Please choose the User</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
