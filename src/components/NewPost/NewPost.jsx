import React from "react";
import "./NewPost.css";
import { useForm } from "react-hook-form";
import { createPost } from "../../shared/api";
import { AddIcon } from "@chakra-ui/icons";
import MyButton from "../MyButton/MyButton";

let nextId = 101;

const NewPost = ({ setCards }) => {
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
    <div className="form-container">
      <h2>New Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Title:</label>
          <input
            {...register("title", {
              required: true,
              minLength: 1,
              maxLength: 20,
            })}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Content:</label>
          <textarea
            {...register("content", {
              required: true,
              minLength: 10,
              maxLength: 500,
            })}
          ></textarea>
          <br />
          <MyButton type="submit" style="add" size="l">
            <AddIcon boxSize={15} />
          </MyButton>
        </div>
        <div className="errors-container">
          {errors.title && (
            <p>
              The title is required and must have a maximum of 20 characters.
            </p>
          )}
          {errors.content && (
            <p>
              The content is required and must have at least 10 characters and a
              maximum of 500 characters.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default NewPost;
