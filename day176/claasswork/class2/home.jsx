

import React, {useState} from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input setPosts={setPosts} />
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
}

export default Home;