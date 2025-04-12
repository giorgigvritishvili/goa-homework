import React from "react";

function PostDisplay({ posts, setPosts }) {

  const handleDelete = (id) => {
    setPosts(prev => prev.filter(post => post.id != id));
  }

  return (
    <div data-testid="posts-container" className="flex wrap gap-10">

      {
        posts.map(post => {
          return (
            <div className="post-box" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default PostDisplay;