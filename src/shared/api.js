import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = () => {
  return axios.get(`${POST_URL}/posts`);
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${POST_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post(`${POST_URL}/posts`, post);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
