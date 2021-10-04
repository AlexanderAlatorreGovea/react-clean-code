import React, { useEffect, useState } from "react";

const GetData = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts?.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </div>
  );
};

export default GetData;
