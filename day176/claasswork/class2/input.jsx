import React from "react";

function Input({ setPosts }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: e.target.title.value,
      description: e.target.description.value,
      id: Date.now()
    }

    setPosts(prev => [...prev, post]);

    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" placeholder="Enter Title" name="title" data-testid="title-input" required />
      <textarea className="mt-10 w-100" placeholder="Enter Description" name="description" data-testid="description-input" required />
      <button data-testid="create-button" className="mt-10">
          Create Post
      </button>
    </form>
  );
}

export default Input;