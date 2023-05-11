import React from "react";
import "./NewPost.css";
import { useForm } from "react-hook-form";
import { createPost } from "../../shared/api";


function NewPost({ setCards }) {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    const { title, content } = data;
    const newPost = { title, body: content, userId: 11 };
    await createPost(newPost);
    setCards((prevCards) => [...prevCards, newPost ]);
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

    
    </div>
  );
}

export default NewPost;
