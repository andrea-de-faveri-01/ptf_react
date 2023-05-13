import React from "react";
import "./NewPost.css";
import { useForm } from "react-hook-form";
import { createPost } from "../../shared/api";

let nextId = 101;

function NewPost({ setCards }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;


  async function onSubmit(data) {
    const { title, content } = data;
    const newPost = { id: nextId++, title, body: content, userId: 11 };
    await createPost(newPost);
    setCards((prevCards) => [...prevCards, newPost]);
    reset();
  }

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title:
          <input {...register("title", { required: true, minLength: 1, maxLength: 20  })} />
        </label>
        <br />
        <label>
          content:
          <textarea {...register("content", { required: true, minLength: 10, maxLength: 500   })}></textarea>
        </label>
        {errors.title && <p>The title is required and must have at least 1 character.</p>}
        {errors.content && <p>The content is required and must have at least 10 characters and a maximum of 500 characters.</p>}
        <br />
        <input type="submit" value="Crear post" />
      </form>
    </div>
  );
}

export default NewPost;
