import React from "react";
import "./NewPost.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createPost } from "../../shared/api";

function NewPost({ setPosts }) {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    const { title, content } = data;
    const newPost = { title, body: content };
    await createPost(newPost);
    setPosts((posts) => [...posts, newPost]);
  }

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Título:
          <input {...register("title")} />
        </label>
        <br />
        <label>
          Contenido:
          <textarea {...register("content")}></textarea>
        </label>
        <br />
        <input type="submit" value="Crear post" />
      </form>

      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default NewPost;
